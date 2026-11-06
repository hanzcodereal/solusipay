import { ProviderAttributes } from "../database/attributes";

export function detectProviderByPhone(
  phone: string,
  providers: ProviderAttributes[],
) {
  const cleanPhone = phone.replace(/\s+/g, "");

  for (const provider of providers) {
    const prefixes = provider.prefix_tujuan?.split(",") || [];

    for (const prefix of prefixes) {
      if (cleanPhone.startsWith(prefix)) {
        return provider;
      }
    }
  }

  return null;
}
