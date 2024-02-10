import EmailTemplate from '../../../components/ui/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const params = await req.json()
        const data = await resend.emails.send({
            from: `${params.from} <onboarding@resend.dev>`,
            to: ['tomas.facundo.sosa@gmail.com'],
            subject: params.subject,
            react: EmailTemplate({ content: params.body, from: params.from, subject: params.subject }),
            text: params.body
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
