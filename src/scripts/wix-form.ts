// Sends the contact form to the existing Wix form ("Ordero Contact Form") through
// Wix Headless. Submissions appear in the Wix dashboard exactly as they do today,
// and the form's own automations and email notifications keep running.
//
// Configure in .env (see .env.example):
//   PUBLIC_WIX_CLIENT_ID  OAuth app client ID from Wix Headless settings
//   PUBLIC_WIX_FORM_ID    defaults to the live site's contact form

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const CLIENT_ID = import.meta.env.PUBLIC_WIX_CLIENT_ID as string | undefined;
const FORM_ID = (import.meta.env.PUBLIC_WIX_FORM_ID as string | undefined) || '8fbe9da0-eebd-454b-9599-9fdde431eff7';

// Field keys ("targets") of the live Wix form, read from its schema.
const FIELDS = {
  name: 'name',
  email: 'email_5f9c',
  phone: 'phone_cd3c',
  message: 'message',
} as const;

let clientPromise: Promise<any> | null = null;

function getClient() {
  if (!CLIENT_ID) throw new Error('PUBLIC_WIX_CLIENT_ID is not set');
  // Load the SDK only when someone actually sends the form.
  clientPromise ??= Promise.all([import('@wix/sdk'), import('@wix/auto_sdk_forms_submissions')]).then(([sdk, submissions]) =>
    sdk.createClient({
      modules: { submissions },
      auth: sdk.OAuthStrategy({ clientId: CLIENT_ID }),
    }),
  );
  return clientPromise;
}

export async function submitContact(values: ContactValues) {
  const client = await getClient();
  const submissions: Record<string, string> = {
    [FIELDS.email]: values.email,
    [FIELDS.phone]: values.phone,
    [FIELDS.message]: values.message,
  };
  if (values.name) submissions[FIELDS.name] = values.name;
  return client.submissions.createSubmission({ formId: FORM_ID, submissions });
}
