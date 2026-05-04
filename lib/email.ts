import nodemailer from 'nodemailer'
import { loadSettings } from '@/app/api/settings/route'

export async function sendNewUserEmail({
  toEmail,
  username,
  password,
  role,
}: {
  toEmail: string
  username: string
  password: string
  role: string
}) {
  const settings = loadSettings()

  if (
    !settings.smtpHost ||
    !settings.smtpUser ||
    !settings.smtpPass ||
    !settings.smtpFrom
  ) {
    throw new Error('SMTP is not configured in Settings. Please add SMTP credentials first.')
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    settings.siteUrl ||
    'https://orunspf.com'

  const adminUrl = `${siteUrl}/admin/login`

  const transporter = nodemailer.createTransport({
    host: settings.smtpHost,
    port: Number(settings.smtpPort) || 587,
    secure: settings.smtpSecure === true || settings.smtpPort === '465',
    auth: {
      user: settings.smtpUser,
      pass: settings.smtpPass,
    },
  })

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F1EA;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F1EA;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:#1A0E04;padding:28px 32px;">
            <p style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;">ORUN</p>
            <p style="margin:4px 0 0;font-size:11px;color:#A4866D;text-transform:uppercase;letter-spacing:0.12em;">Admin Access</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1A0E04;">Welcome to ORUN Admin</p>
            <p style="margin:0 0 24px;font-size:15px;color:#7A5C3A;line-height:1.6;">
              Your admin account has been created. Use the credentials below to log in.
            </p>

            <!-- Credentials box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F1EA;border-radius:12px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:12px;">
                        <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9D7F66;">Username</p>
                        <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#1A0E04;">${username}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="border-top:1px solid #E6D8CA;padding-top:12px;">
                        <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9D7F66;">Password</p>
                        <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#1A0E04;font-family:monospace;">${password}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="border-top:1px solid #E6D8CA;padding-top:12px;">
                        <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9D7F66;">Role</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#C8541F;text-transform:capitalize;">${role}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#C8541F;border-radius:10px;">
                  <a href="${adminUrl}" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none;">
                    Log In to Admin Panel →
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:13px;color:#9D7F66;line-height:1.6;">
              Please change your password after your first login. If you did not expect this email, you can safely ignore it.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:18px 32px;border-top:1px solid #F3EAE0;">
            <p style="margin:0;font-size:12px;color:#B18D72;">© ${new Date().getFullYear()} ORUN SPF · Protect. Glow. Thrive.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  await transporter.sendMail({
    from: settings.smtpFrom,
    to: toEmail,
    subject: `Your ORUN Admin access — ${username}`,
    html,
  })
}
