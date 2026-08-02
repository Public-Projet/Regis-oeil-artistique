import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Numéro trop long")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(2, "Sujet requis").max(120),
  message: z.string().trim().min(10, "Message trop court").max(1500),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({
  defaultSubject = "",
  defaultMessage = "",
}: {
  defaultSubject?: string;
  defaultMessage?: string;
}) {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subject: defaultSubject, message: defaultMessage },
  });

  useEffect(() => {
    if (defaultSubject) setValue("subject", defaultSubject);
    if (defaultMessage) setValue("message", defaultMessage);
  }, [defaultSubject, defaultMessage, setValue]);

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    reset({ subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nom" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Votre nom" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="input" placeholder="vous@exemple.com" />
        </Field>
      </div>
      <Field label="Téléphone (facultatif)" error={errors.phone?.message}>
        <input {...register("phone")} type="tel" className="input" placeholder="+229 ..." />
      </Field>
      <Field label="Sujet" error={errors.subject?.message}>
        <input {...register("subject")} className="input" placeholder="Mariage, portrait, événement…" />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={6} className="input resize-none" placeholder="Parlez-moi de votre projet…" />
      </Field>

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
          {isSubmitting ? "Envoi…" : "Envoyer le message"}
        </button>
        {sent && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-[var(--ochre-deep)]"
          >
            ✓ Merci, votre message a bien été reçu.
          </motion.span>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--color-border);
          padding: 0.75rem 0;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus { border-color: var(--ochre); }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="eyebrow mb-1">{label}</div>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </label>
  );
}
