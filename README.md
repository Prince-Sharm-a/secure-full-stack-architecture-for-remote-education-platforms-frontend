# Secure Full Stack Architecture for Remote Education Platforms Frontend

## Overview

This project is the frontend for a remote education platform called Edducator. It is built with Next.js and provides a public learning marketplace together with separate experiences for admins, teachers, and students.

The app is designed around a secure, role-based workflow:

- Visitors can discover courses and use the homepage search experience.
- Teachers can manage courses, assignments, attendance, grades, and student-related work.
- Students can view their dashboard, courses, assignments, attendance, and results.
- Admins can manage users, subjects, assignments, reports, and platform settings.

The app also integrates authentication, dark mode, rich content editing, image and video upload flows, Supabase, and Razorpay checkout.

## Key Features

- Public landing page with search and course discovery.
- Separate dashboards for admin, teacher, and student roles.
- Route-based layouts and navigation tailored to each role.
- Authentication state handled through a client-side auth context.
- Theme switching with light and dark mode support.
- Payment support through Razorpay checkout.
- UI building blocks for modals, cards, buttons, sidebars, uploads, and editors.

## Tech Stack

- Next.js 16 with the App Router.
- React 19 and TypeScript.
- Tailwind CSS 4 for styling.
- Supabase client for backend services.
- Sonner for toast notifications.
- Radix UI, Lucide icons, and Shadcn-style UI components.
- React Hook Form, React Quill, and react-easy-crop for interactive forms and content workflows.

## Project Structure

- `src/app/(public)` contains the public-facing homepage, course pages, and contact page.
- `src/app/admin` contains admin dashboard pages.
- `src/app/teacher` contains teacher dashboard pages.
- `src/app/student` contains student dashboard pages.
- `src/components` contains reusable UI, cards, modals, sidebars, uploads, and navigation.
- `src/context` contains authentication context.
- `src/lib` contains API helpers, types, Supabase setup, and utilities.

## Main Routes

- Public pages: `/`, `/courses`, `/courses/[slug]`, `/contact`
- Admin pages: `/admin/dashboard`, `/admin/users`, `/admin/courses`, `/admin/subjects`, `/admin/assignments`, `/admin/reports`, `/admin/settings`
- Teacher pages: `/teacher/dashboard`, `/teacher/courses`, `/teacher/courses/new`, `/teacher/courses/[slug]`, `/teacher/assignments`, `/teacher/assignments/[slug]`, `/teacher/attendance`, `/teacher/grades`, `/teacher/students`
- Student pages: `/student/dashboard`, `/student/courses`, `/student/assignments`, `/student/attendance`, `/student/results`
- Authentication and access control pages are grouped under `src/app/(auth)` and `src/app/unauthorized`

## Getting Started

### Prerequisites

- Node.js 18 or newer.
- npm, pnpm, yarn, or bun.

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Lint the codebase

```bash
npm run lint
```

## Environment Variables

Create a `.env` file with the required values for your local or deployed backend and third-party integrations.

- `NEXT_PUBLIC_FRONTEND_URL`
- `NEXT_PUBLIC_BACKEND_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_TOKEN`
- `NEXT_PUBLIC_ROZARPAY_KEY_ID`
- `NEXT_PUBLIC_ROZARPAY_SECRET`

Keep secrets private and do not commit real production credentials.

## Notes

- The application uses a root theme provider and auth provider in the main layout.
- Razorpay checkout is loaded globally in the app shell.
- The admin, teacher, and student areas each have their own sidebar and page layout.
- The current UI includes a public landing page focused on search and course exploration.

## Deployment

The app is ready to be deployed as a standard Next.js frontend, for example on Vercel or any platform that supports Node.js applications.

#### https://secure-full-stack-architecture-for.vercel.app
