import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Field, DateField } from "@/components/form-fields";
import { WhatsAppCopyDialog } from "@/components/WhatsAppCopyDialog";
import {
  contactBudgets,
  contactSchema,
  contactServices,
  contactSummaryRows,
  whatsappSummary,
  type ContactInput,
} from "@/lib/forms";
import { submitContact } from "@/lib/forms.functions";

export function ContactForm({
  defaultSubject = "",
  defaultMessage = "",
}: {
  defaultSubject?: string;
  defaultMessage?: string;
}) {
  const send = useServerFn(submitContact);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: defaultSubject,
      message: defaultMessage,
      date: "",
      time: "",
      budget: "",
    },
  });

  useEffect(() => {
    if (defaultSubject) setValue("subject", defaultSubject);
    if (defaultMessage) setValue("message", defaultMessage);
  }, [defaultSubject, defaultMessage, setValue]);

  const onSubmit = async (data: ContactInput) => {
    setServerError("");
    try {
      await send({ data });
      setWaMessage(
        whatsappSummary(
          "Bonjour Régis, je viens de vous envoyer une demande depuis votre site :",
          contactSummaryRows(data),
        ),
      );
      setDialogOpen(true);
      reset({ subject: "", message: "", date: "", time: "", budget: "" });
    } catch {
      setServerError("L'envoi a échoué. Réessayez ou écrivez-moi directement sur WhatsApp.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Nom complet" error={errors.name?.message}>
            <input {...register("name")} className="field-input" placeholder="Votre nom" autoComplete="name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" className="field-input" placeholder="vous@exemple.com" autoComplete="email" />
          </Field>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Téléphone / WhatsApp (facultatif)" error={errors.phone?.message}>
            <input {...register("phone")} type="tel" className="field-input" placeholder="+229 ..." autoComplete="tel" />
          </Field>
          <Field label="Prestation" error={errors.service?.message}>
            <select {...register("service")} className="field-input" defaultValue="">
              <option value="" disabled>Choisir…</option>
              {contactServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          <Field label="Date souhaitée" error={errors.date?.message && "Choisissez une date"}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => <DateField value={field.value} onChange={field.onChange} />}
            />
          </Field>
          <Field label="Heure (approx.)" error={errors.time?.message}>
            <input {...register("time")} type="time" className="field-input" />
          </Field>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          <Field label="Lieu (facultatif)" error={errors.location?.message}>
            <input {...register("location")} className="field-input" placeholder="Ville, salle, quartier…" />
          </Field>
          <Field label="Nb. de personnes (facultatif)" error={errors.guests?.message}>
            <input {...register("guests")} inputMode="numeric" className="field-input" placeholder="ex. 120" />
          </Field>
        </div>

        <Field label="Budget indicatif (facultatif)" error={errors.budget?.message}>
          <select {...register("budget")} className="field-input">
            <option value="">Non précisé</option>
            {contactBudgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>

        <Field label="Sujet" error={errors.subject?.message}>
          <input {...register("subject")} className="field-input" placeholder="Mariage, portrait, événement…" />
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} rows={5} className="field-input resize-none" placeholder="Parlez-moi de votre projet…" />
        </Field>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
            {isSubmitting ? "Envoi…" : "Envoyer la demande"}
          </button>
          {serverError && <span className="text-sm text-destructive">{serverError}</span>}
        </div>
      </form>

      <WhatsAppCopyDialog open={dialogOpen} onOpenChange={setDialogOpen} message={waMessage} />
    </>
  );
}
