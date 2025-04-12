# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e8c33ea1-743b-49b9-8cc8-18d2dcf6b416

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e8c33ea1-743b-49b9-8cc8-18d2dcf6b416) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e8c33ea1-743b-49b9-8cc8-18d2dcf6b416) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# SalesPulse - Sales Talent Intelligence Assessment Platform

## Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (buttons, cards, etc.)
│   ├── layout/          # Layout components (navbar, sidebar, etc.)
│   ├── assessment/      # Assessment-specific components
│   ├── reports/         # Report-specific components
│   └── analytics/       # Analytics-specific components
│
├── context/             # React Context providers and hooks
│   ├── AppContext.tsx   # Main application context
│   └── AuthContext.tsx  # Authentication context
│
├── hooks/               # Custom React hooks
│   ├── use-toast.ts
│   └── use-auth.ts
│
├── lib/                 # Utility functions and services
│   ├── api/            # API service functions
│   ├── utils/          # Helper functions
│   └── constants/      # Constants and configuration
│
├── pages/              # Page components
│   ├── auth/          # Authentication pages
│   ├── assessment/    # Assessment pages
│   ├── reports/       # Report pages
│   └── analytics/     # Analytics pages
│
├── types/             # TypeScript type definitions
│   ├── schema.ts     # Database schema types
│   └── api.ts        # API types
│
├── styles/           # Global styles and theme
│   ├── globals.css
│   └── theme.ts
│
├── data/            # Static data and mock data
│   ├── questions/   # Assessment questions
│   └── mock/        # Mock data for development
│
└── assets/         # Static assets (images, icons, etc.)
    ├── images/
    └── icons/

public/             # Public assets
├── images/
└── icons/

tests/             # Test files
├── unit/
├── integration/
└── e2e/
```

## Database Schema

The application uses the following main entities:

1. User
   - Personal information
   - Role and permissions
   - Company and department

2. Assessment
   - Multiple types (personality, intelligence, competency)
   - Questions and responses
   - Scores and results

3. Report
   - Individual and team reports
   - Metrics and insights
   - Recommendations

4. Team
   - Team structure
   - Member management
   - Department organization

5. Analytics
   - Performance metrics
   - Trends and comparisons
   - Insights and predictions

For detailed type definitions, see `src/types/schema.ts`.
