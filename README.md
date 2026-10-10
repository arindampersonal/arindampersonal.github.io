# Arindam Dutta — Senior Azure DevOps & Cloud Engineer Portfolio

A bespoke, production-ready digital portfolio engineered for **Arindam Dutta**, Senior Azure DevOps & Cloud Engineer. Features an editorial-meets-cloud-infrastructure visual identity, deep architectural case studies, honest skill tiering, and zero-runtime-cost static delivery on GitHub Pages.

- **GitHub Repository**: [https://github.com/arindampersonal/arindam-dutta.github.io](https://github.com/arindampersonal/arindam-dutta.github.io)
- **Production URL**: [https://arindam-dutta.github.io/](https://arindam-dutta.github.io/)

---

## 1. Technology Stack

- **Core**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with bespoke typography tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (respects `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting Target**: GitHub Pages (Static Hosting via GitHub Actions)

---

## 2. Local Installation & Development

### Prerequisites
- Node.js LTS `v20.x` or `v22.x` (verified on Node `v24`)
- npm `v9+` or `v10+`

### Commands
```bash
# Clone the repository
git clone https://github.com/arindampersonal/arindam-dutta.github.io.git
cd arindam-dutta.github.io

# Clean install from locked dependencies
npm ci

# Launch local development server (http://localhost:5173/)
npm run dev

# Run TypeScript type-checking and production Vite build
npm run build

# Preview the compiled production build locally (http://localhost:4173/)
npm run preview
```

---

## 3. Centralized Content Architecture

To ensure long-term maintainability, all content, metrics, case studies, and links live in typed data stores under `src/data/`:

| Data File | Content Managed | Key Fields to Edit |
|---|---|---|
| [`src/data/profile.ts`](src/data/profile.ts) | Personal identity, headline, bio, location, photo slot | `name`, `title`, `experienceYears`, `currentEmployer`, `contact.email`, `photoConfig.showPhoto` |
| [`src/data/projects.ts`](src/data/projects.ts) | Flagship (LifeOps) & enterprise cloud case studies | `title`, `tagline`, `problemStatement`, `personalImplementation`, `highlights`, `techStack`, `links` |
| [`src/data/skills.ts`](src/data/skills.ts) | Domain categories with honest tiering | `skills[].name`, `level` (`'production'`, `'applied'`, `'exploratory'`), `highlight` |
| [`src/data/experience.ts`](src/data/experience.ts) | Career history at TCS | `role`, `company`, `period`, `responsibilities`, `keyTechnologies` |
| [`src/data/certifications.ts`](src/data/certifications.ts) | Microsoft credentials & research tracks | `title`, `badgeLabel`, `issuer`, `verificationUrl`, `continuousLearning` topics |
| [`src/data/socialLinks.ts`](src/data/socialLinks.ts) | Direct communication channels | `github`, `linkedin`, `email`, and live platform links |
| [`src/data/engineeringApproach.ts`](src/data/engineeringApproach.ts) | 5-phase infrastructure lifecycle | Steps `01` to `05`, principles, descriptions, tooling, deliverables |

### How to Add or Edit a Project
Open [`src/data/projects.ts`](src/data/projects.ts) and add a project object. Empty link fields (`""`) automatically hide action buttons without dead links:
```typescript
{
  id: "new-project-id",
  title: "Project Name",
  tagline: "High-impact subtitle",
  category: "Cloud & IaC",
  status: "Live in Production", // "Enterprise Architecture" | "Modular Framework" | "Engineering Lab"
  featuredOrder: 6,
  links: {
    liveUrl: "https://example.com", // leave "" if not public
    repoUrl: ""
  },
  summary: "High-level summary...",
  problemStatement: "The operational or architectural hurdle...",
  personalImplementation: [
    "What you personally built step 1",
    "What you personally built step 2"
  ],
  deliveryAutomation: "Pipeline description...",
  futureRoadmap: ["Next milestone..."],
  highlights: ["Deliverable 1", "Deliverable 2"],
  techStack: ["Terraform", "Azure", "Docker"],
  architecture: {
    challenge: "Challenge detail...",
    solution: "Solution detail...",
    infrastructure: ["Azure VNet", "Key Vault"],
    pipeline: ["Stage 1: Lint", "Stage 2: Deploy"],
    verificationNote: "Production enterprise deployment"
  }
}
```

### How to Add a Personal Profile Photo
By default, the portfolio displays an architectural monogram card (`AD`) with geographic coordinates. To show a personal headshot:
1. Place your image in the `public/` directory (e.g. `public/avatar.jpg`).
2. In [`src/data/profile.ts`](src/data/profile.ts), update:
   ```typescript
   photoConfig: {
     showPhoto: true,
     url: "/avatar.jpg",
     altText: "Arindam Dutta — Senior Azure DevOps & Cloud Engineer"
   }
   ```

---

## 4. GitHub Actions Deployment Automation

The repository is configured with an automated continuous delivery workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Workflow Characteristics
- **Trigger**: Automatically runs on every push to the `main` branch, and can also be triggered manually via `workflow_dispatch`.
- **Runner**: `ubuntu-latest` with official Node.js 20 LTS.
- **Integrity**: Installs dependencies via `npm ci` ensuring zero dependency drift.
- **Quality Gate**: Runs `npm run build` which enforces full TypeScript validation (`tsc`) before building the static bundle.
- **Deployment**: Uses official GitHub Actions (`actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`) with OIDC tokens (`id-token: write`).
- **Security**: Zero environment secrets or cloud credentials required; purely static delivery.

### How to Inspect Deployment Runs
1. In your GitHub repository, open the **Actions** tab:
   [https://github.com/arindampersonal/arindam-dutta.github.io/actions](https://github.com/arindampersonal/arindam-dutta.github.io/actions)
2. Select the latest **Deploy to GitHub Pages** run.
3. Click into the **Build & Validate** or **Deploy to GitHub Pages** step to view real-time logs.

---

## 5. Required GitHub Pages Setup Steps

To activate automated deployment for your user site:

1. Open your repository on GitHub:
   [https://github.com/arindampersonal/arindam-dutta.github.io](https://github.com/arindampersonal/arindam-dutta.github.io)
2. Navigate to **Settings** → **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown menu (do **not** select "Deploy from a branch").
4. Push your changes to the `main` branch.
5. Once the Actions workflow completes, visit your live website at:
   **[https://arindam-dutta.github.io/](https://arindam-dutta.github.io/)**

### Optional: Using a Custom Domain
If you later configure a custom domain (e.g. `arindamdutta.com`):
1. In **Settings** → **Pages** → **Custom domain**, enter your domain name.
2. Add the corresponding DNS `CNAME` or `A` records pointing to GitHub Pages.
3. Because Vite is configured with `base: '/'`, the site will immediately resolve assets correctly on your custom domain without modifying any code.

---

## 6. Verification Summary

| Check | Tool / Command | Result |
|---|---|---|
| Lockfile Consistency | `npm ci` | Passed (0 errors, 146 audited packages) |
| TypeScript Validation | `tsc` | Passed (Strict mode, 0 errors) |
| Production Bundle Build | `npm run build` | Passed (`dist/index.html` created in ~2.3s) |
| Asset Loading at Root `/` | `npm run preview` | Verified (HTML, JS, CSS, and SVG favicon serve with HTTP 200) |
| Theme & Responsiveness | Browser Testing | Light mode default, optional dark mode, clean mobile layout |
