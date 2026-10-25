/**
 * Web3Forms delivery (browser-side: free plan rejects server-side requests).
 * The access key is public by design — it only allows sending to the email
 * registered on the Web3Forms account.
 * Note: `ccemail` is a Pro-only feature (400 on the free plan), so no CC is sent.
 */
const WEB3FORMS_ACCESS_KEY = "4521c613-3dc5-4638-ae51-97ba857ec96a";

export async function sendWeb3Form(opts: {
  subject: string;
  name: string;
  email: string;
  rows: [string, string | undefined][];
}) {
  const fields: Record<string, string> = {};
  for (const [k, v] of opts.rows) if (v) fields[k] = v;
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: opts.subject,
      from_name: `${opts.name} via Régis - L'Œil Artistique`,
      replyto: opts.email,
      ...fields,
    }),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!res.ok || !json.success) {
    console.error("Web3Forms:", json.message ?? res.status);
    throw new Error(json.message || "Envoi impossible");
  }
}
