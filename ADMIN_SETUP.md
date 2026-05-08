# ORUN Admin Panel Setup

## Access the Admin Panel

- **URL**: `http://localhost:3000/admin/login`
- **Default Username**: `admin`
- **Default Password**: `password123`

## Features

✅ **Secure Authentication** - JWT-based login system with HTTP-only cookies  
✅ **Content Management** - Edit sections directly from the dashboard  
✅ **Persistent Storage** - Uses Vercel KV in production, `.content/` locally  
✅ **Protected Routes** - Middleware protects admin pages from unauthorized access  
✅ **Session Management** - 7-day token expiration for security  

## Admin Dashboard Sections

The admin can manage content for:

1. **Hero Section** - Main headline and tagline
2. **Benefits** - Product benefits and features
3. **Before & After** - Results demonstration
4. **Testimonials** - Customer reviews
5. **FAQ** - Frequently asked questions

## Changing Credentials

### Development Environment

Edit `.env.local`:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_secure_jwt_secret
```

### Production Environment

**⚠️ IMPORTANT**: Set secure environment variables in your production deployment:

```bash
ADMIN_USERNAME=strong_username
ADMIN_PASSWORD=very_secure_password_here
JWT_SECRET=random_32_character_string_here
```

Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Vercel Storage (Required for Production Saves)

Admin saves are persistent on Vercel only when KV/Redis is configured.

1. Add a Redis/KV integration in Vercel Marketplace
2. Ensure these environment variables are set:

```bash
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

## File Structure

```
.content/               # Content storage (created on first save)
├── hero.json          # Hero section content
├── benefits.json      # Benefits section content
├── before-after.json  # Before/after section content
├── testimonials.json  # Testimonials content
└── faq.json          # FAQ content

app/
├── admin/
│   ├── login/
│   │   └── page.tsx          # Login page
│   └── dashboard/
│       └── page.tsx          # Admin dashboard
└── api/
    ├── auth/
    │   ├── login/route.ts    # Login endpoint
    │   ├── logout/route.ts   # Logout endpoint
    │   └── check/route.ts    # Auth check endpoint
    └── content/
        └── [section]/route.ts # Content CRUD endpoints

middleware.ts                   # Route protection middleware
```

## API Endpoints

### Authentication

**POST `/api/auth/login`**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**POST `/api/auth/logout`**
- Clears authentication cookie

**GET `/api/auth/check`**
- Returns auth status and username

### Content Management

**GET `/api/content/[section]`**
- Fetch content for a section (hero, benefits, before-after, testimonials, faq)

**PUT `/api/content/[section]`** (Requires authentication)
- Update content for a section

Example:
```json
{
  "title": "New Title",
  "description": "New description",
  "items": []
}
```

## Security Notes

1. **Change default credentials immediately** in production
2. **Use HTTPS only** in production (enforced by `secure` flag in cookies)
3. **Keep JWT_SECRET private** - generate a unique secret for production
4. **Session expires in 7 days** - users must login again after expiration
5. **HTTP-only cookies** prevent JavaScript access to tokens

## Troubleshooting

**Q: Login fails with correct credentials**  
A: Check that `.env.local` has `ADMIN_USERNAME` and `ADMIN_PASSWORD` set correctly

**Q: Admin dashboard shows 401 Unauthorized**  
A: Your JWT token expired or is invalid. Login again.

**Q: Changes not saving on Vercel**  
A: Add KV/Redis integration and verify `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set.

**Q: Changes not saving locally**  
A: Ensure `.content/` directory has write permissions. Check browser console for errors.

**Q: Content file corrupted**  
A: Delete the JSON file in `.content/` to restore defaults on next visit.

## Next Steps

1. Access admin panel: `http://localhost:3000/admin/login`
2. Login with credentials above
3. Select a section to edit
4. Modify the JSON content
5. Click "Save Changes"
6. Changes are instantly saved and can be loaded dynamically in components

## Future Enhancements

- [ ] Add image upload functionality
- [ ] Create rich text editor for descriptions
- [ ] Add version history/rollback
- [ ] Email notifications on content changes
- [ ] Multi-user support with roles (Admin, Editor)
- [ ] Content preview before saving
- [ ] Scheduled content publication
- [ ] Content export/backup

## Default Credentials

```
Username: admin
Password: password123
```

**⚠️ SECURITY WARNING**: Change these immediately in production!
