// Centralized, typed access to environment variables

type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) {
    // Keep it non-crashing in client apps; surface clear error instead
    console.error(`Missing required env variable: ${String(name)}`);
  }
  return value as string;
}

export const emailJsConfig: EmailJsConfig = {
  serviceId: getRequiredEnv("VITE_EMAIL_JS_SERVICE_ID"),
  templateId: getRequiredEnv("VITE_EMAIL_JS_TEMPLATE_ID"),
  publicKey: getRequiredEnv("VITE_EMAIL_JS_PUBLIC_KEY"),
};


