import { createServerFn } from "@tanstack/react-start";
import { contactSchema, formationSchema } from "./forms";

/**
 * Form submissions. Input is re-validated on the server.
 * Email delivery (to regisphotography5@gmail.com + copy to afovosteve@gmail.com)
 * is wired here once the sender domain is configured.
 */
export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    console.log("[contact] new request", { service: data.service, date: data.date });
    return { ok: true as const };
  });

export const submitFormation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => formationSchema.parse(input))
  .handler(async ({ data }) => {
    console.log("[formation] new registration", { programme: data.programme, level: data.level });
    return { ok: true as const };
  });
