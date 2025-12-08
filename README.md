# Alternapath 🌿

Alternapath is a full-stack web app for exploring homeopathic remedies and ailments.

Users can browse ailments and remedies, see which remedies are linked to each ailment, save personal favorites, and manage their profile. Admin users get an internal dashboard for managing ailments, remedies, and their relationships.

> **Tech stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · PostgreSQL · Node.js · Playwright (E2E)

Language: TypeScript
Styling: Tailwind CSS
Database: PostgreSQL
ORM/DB Access: Custom pool helper using pg (lib/db.server.ts)
Auth: Custom JWT + HTTP-only cookies
Testing: Playwright E2E tests
Deployment: Render (Web Service + managed PostgreSQL)

* DEMO ADMIN ACCOUNT (FOR REVIEW)
- URL: https://www.alternapath.com
- Admin email: tmart1221
- Admin password: ********  Contact me for password

> Note: This account has full admin privileges. Do not use it for real data.
---

## Deployment

This project is deployed on [Render](https://render.com).

- Production URL: https://alternapath.onrender.com
- Custom domain: https://www.alternapath.com

# Environment variables 

See `.env.example` for required variables.
--

## User-facing

- 🔍 **Search ailments & remedies**
  - Search by ailment title, slug, remedy name, and (optionally) remedy description or keynotes.
- 📚 **Ailment detail pages**
  - Each ailment has a dedicated page (`/ailments/[slug]`) showing:
    - Ailment title and description
    - Linked remedies for that ailment
- 🌿 **Remedy detail**
  - View name and description of each remedy (and linked ailments, if implemented).
- ⭐ **Favorites**
  - Authenticated users can save:
    - Favorite ailments
    - Favorite remedies
    - Add notes to favorites
  - Favorites are shown under `/profile/favorites`.
- 👤 **User profile**
  - View basic account info (user ID, email/username).
  - Link to favorites and logout.

### Admin-facing

- 🔐 **Admin dashboard** (`/admin`)
  - Available only to users flagged as admin.
- 🩺 **Ailment management**
  - Create new ailments.
  - Edit existing ailments.
  - Soft-deactivate or delete ailments (depending on current implementation).
- 💊 **Remedy management**
  - Create new remedies.
  - Edit existing remedies.
  - Soft-deactivate or delete remedies.
- 🔗 **Link ailments ↔ remedies**
  - Admin can link one or more remedies to an ailment via a join table.
  - Done from an "all-in-one" admin card that handles:
    - New or existing ailment
    - New or existing remedy
    - Linking them together

---

Sources:
   - Springboard Projects
   - MDN
   - ChatGpt
---

#### Project Structure

src/
  app/
    layout.tsx
    page.tsx                # Home
    ailments/
      page.tsx              # Ailments list
      [slug]/
        page.tsx            # Ailment detail
    remedies/
      [id]/                 # Remedy detail
      page.tsx
      page.tsx              # Remedies list (if enabled)
    profile/
      page.tsx              # User profile
      favorites/
        page.tsx            # Favorites page
    admin/
      ailments/             # Ailments/admin
      page.tsx 
      remedies/             # Remedies/admin
      page.tsx                             
      page.tsx              # Admin dashboard/home
    learn/
      basics/
        page.tsx            # basics info page
      dosing/
        page.tsx            # dosing info page
      how-to-choose/
        page.tsx            # how to choose info page
      remedy-spotlights/
        page.tsx            # remedy info
      starter-kit/
        page.tsx            # starter info
      tracking/
        page.tsx            # track info
      layout.tsx
      page.tsx              # learn homepage with cards 
    login/
      page.tsx              # login homepage
    logout/
      page.tsx              # logout page
    search/
      page.tsx              # search page
    signup/
      page.tsx              # signup page
    users/
      page.tsx              # users page
    api/
      ailment-remedies/
        route.ts            # POST /api/ailment-remedies Linking ailments-remedies
      ailments/
        [slug]/
          route.ts           # Individual ailment route GET PUT DELETE
          route.ts           # POST /api/ailments GET list, POST new
      auth/
        login/
          route.ts          # POST credentials
        logout/
          route.ts          # POST clear cookies
        signup/
          route.ts          # POST credentials await cookie
      favorites/
          route.ts          # CRUD for favorites list
      graphql/
          route.ts          # additional DB ui route
      logout/
          route.ts          # POST clearcookie route
      profiles/
          me.route.ts       # route to see your profile
      remedies/
         [id]/
           route.ts         # GET PUT DELETE indidual remedies
           route.ts         # GET POST remedies list
      session/
          route.ts          # GET cookie for user session
        
  components/
    admin/
      AdminAilmentsClient.tsx
      AdminRemediesClient.tsx
      AdminQuicklinkCard.tsx  "all-in-one" create/link card lives here
    profile/
      FavoritesClient.tsx
    client/
      BackLink.tsx
      ProfileButton.tsx
    Server/
      LoginLogoutButton.tsx     button component
    AilmentCard.tsx. 
    FavoriteToggle.tsx
    Header.tsx
    RemedyPill.tsx
  
  graphql/
     resolvers.ts
     schema.ts
    
  lib/
    db.server.ts            # PostgreSQL pool helper
    auth.server.ts          # JWT creation, cookie/session helpers
    data.ts                 # Reusable data access functions
    ailments.server.ts      # Reusable individual ailment access function (probably should be in data.ts)

playwright/
  tests/
    admin.spec.ts
    auth.spec.ts
    # etc.

public/
  # Static assets (logo, favicon, images)

tailwind.config.js
next.config.mjs
package.json
README.md

API Overview


Auth
  POST /api/login
    Body: { "emailOrUsername": string, "password": string }
    Returns a JWT and sets a session cookie.
POST /api/logout
    Clears the session cookie.
Admin
   GET /api/admin/ailments
   POST /api/admin/ailments
   PUT /api/admin/ailments/:id
   DELETE /api/admin/ailments/:id
   GET /api/admin/remedies
   POST /api/admin/remedies
   PUT /api/admin/remedies/:id
   DELETE /api/admin/remedies/:id
   POST /api/admin/ailment-remedies
         Body contains ailment_id and remedy_id to link.
Favorites
   GET /api/favorites
   POST /api/favorites
   DELETE /api/favorites/:id
      All admin and favorites routes require authentication; admin routes also require is_admin = true.  

Authentication & Authorization
    Users log in via /login which posts to /api/login.
    Credentials are checked against the users table.
    Passwords are stored as bcrypt hashes.
    On successful login:
          A JWT is created (signed with JWT_SECRET).
          An HTTP-only session cookie is set.
    Server components / API routes use helpers from auth.server.ts / session.server.ts to:
          Read the cookie
          Verify the JWT
          Load the user record (and is_admin flag) from the database
    Admin routes and pages check is_admin and redirect or return 401/403 if not authorized.


# .env.local

DATABASE_URL=postgresql://user:password@127.0.0.1:5432/alternapath
JWT_SECRET=mysecret
JWT_EXPIRES=7d
ADMIN_EMAIL=
