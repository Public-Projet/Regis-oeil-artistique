import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Chip, DateField, Field } from "@/components/form-fields";
import { WhatsAppCopyDialog } from "@/components/WhatsAppCopyDialog";
import {
  formationEquipment,
  formationLevels,
  formationModes,
  formationObjectives,
  formationProgrammes,
  formationSchema,
  formationSlots,
  formationSummaryRows,
  whatsappSummary,
  type FormationInput,
} from "@/lib/forms";
import { submitFormation } from "@/lib/forms.functions";
import { sendWeb3Form } from "@/lib/web3forms";

export function FormationForm({ defaultProgramme }: { defaultProgramme?: string }) {
  const send = useServerFn(submitFormation);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormationInput>({
    resolver: zodResolver(formationSchema),
    defaultValues: {
      availability: [],
      startDate: "",
      programme: (formationProgrammes as readonly string[]).includes(defaultProgramme ?? "")
        ? (defaultProgramme as FormationInput["programme"])
        : undefined,
    },
  });

  const onSubmit = async (data: FormationInput) => {
    setServerError("");
    try {
      await send({ data });
      await sendWeb3Form({ subject: `[Formation] ${data.programme ?? "Inscription"} — ${data.name}`, name: data.name, email: data.email, rows: formationSummaryRows(data) });
      setWaMessage(
        whatsappSummary(
          "Bonjour Régis, je viens de m'inscrire à une formation depuis votre site :",
          formationSummaryRows(data),
        ),
      );
      setDialogOpen(true);
      reset({ availability: [], startDate: "" });
    } catch {
      setServerError("L'envoi a échoué. Réessayez ou écrivez-moi directement sur WhatsApp.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        <Step n="01" title="Vos coordonnées" />
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Nom complet" error={errors.name?.message}>
            <input {...register("name")} className="field-input" placeholder="Votre nom" autoComplete="name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" className="field-input" placeholder="vous@exemple.com" autoComplete="email" />
          </Field>
          <Field label="Téléphone / WhatsApp" error={errors.phone?.message}>
            <input {...register("phone")} type="tel" className="field-input" placeholder="+229 ..." autoComplete="tel" />
          </Field>
          <Field label="Adresse (ville, quartier)" error={errors.address?.message}>
            <input {...register("address")} className="field-input" placeholder="Porto-Novo, Ouando…" autoComplete="street-address" />
          </Field>
        </div>

        <Step n="02" title="Votre profil" />
        <Field label="Niveau actuel" error={errors.level?.message}>
          <div className="flex flex-wrap gap-2 pt-2">
            {formationLevels.map((l) => (
              <Chip key={l} type="radio" value={l} label={l} inputProps={register("level")} />
            ))}
          </div>
        </Field>
        <Field label="Matériel" error={errors.equipment?.message}>
          <div className="flex flex-wrap gap-2 pt-2">
            {formationEquipment.map((e) => (
              <Chip key={e} type="radio" value={e} label={e} inputProps={register("equipment")} />
            ))}
          </div>
        </Field>
        <Field label="Objectif principal" error={errors.objective?.message}>
          <select {...register("objective")} className="field-input" defaultValue="">
            <option value="" disabled>Choisir…</option>
            {formationObjectives.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>

        <Step n="03" title="La formation" />
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Formation souhaitée" error={errors.programme?.message}>
            <select {...register("programme")} className="field-input" defaultValue={defaultProgramme ?? ""}>
              <option value="" disabled>Choisir…</option>
              {formationProgrammes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </Field>
          <Field label="Format" error={errors.mode?.message}>
            <select {...register("mode")} className="field-input" defaultValue="">
              <option value="" disabled>Choisir…</option>
              {formationModes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Disponibilités" error={errors.availability?.message}>
          <div className="flex flex-wrap gap-2 pt-2">
            {formationSlots.map((s) => (
              <Chip key={s} type="checkbox" value={s} label={s} inputProps={register("availability")} />
            ))}
          </div>
        </Field>
        <Field label="Date de début souhaitée (facultatif)" error={errors.startDate?.message}>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => <DateField value={field.value} onChange={field.onChange} />}
          />
        </Field>
        <Field label="Précisions (facultatif)" error={errors.details?.message}>
          <textarea
            {...register("details")}
            rows={4}
            className="field-input resize-none"
            placeholder="Ce que vous aimeriez photographier, vos attentes, vos questions…"
          />
        </Field>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
            {isSubmitting ? "Envoi…" : "Envoyer mon inscription"}
          </button>
          {serverError && <span className="text-sm text-destructive">{serverError}</span>}
        </div>
      </form>

      <WhatsAppCopyDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        message={waMessage}
        title="Votre inscription a bien été envoyée"
      />
    </>
  );
}

function Step({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-3">
      <span className="font-display text-2xl text-accent">{n}</span>
      <h3 className="font-display text-2xl">{title}</h3>
    </div>
  );
}
