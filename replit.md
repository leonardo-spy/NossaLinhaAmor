# Romantic Journey Landing Page

## Overview

This is a romantic storytelling website that celebrates a couple's journey from dating to engagement. The application presents their love story through a cinematic, scroll-based experience with elegant animations and carefully curated visual elements. Built as a single-page application, it features a hero section, timeline of milestones, photo gallery, relationship counter, proposal highlight, and footer - all designed to create an emotional and intimate browsing experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing, though the application is primarily a single-page experience with one main route (`/`).

**UI Framework**: shadcn/ui components built on Radix UI primitives, providing accessible, customizable components styled with Tailwind CSS. The design system follows a "new-york" style variant with custom romantic color palette.

**State Management**: TanStack Query (React Query) for server state management, providing caching and data synchronization for API requests.

**Styling Approach**: 
- Tailwind CSS with custom configuration for romantic theming
- Custom CSS variables for light/dark mode support
- Google Fonts integration (Playfair Display for headlines, Montserrat for body text)
- Custom animations defined in index.css for scroll-triggered effects

**Animation Strategy**: Custom scroll-based animations using Intersection Observer API through the `useScrollAnimation` hook. Supports multiple animation types (fade-up, fade-down, scale, zoom, reveal) with configurable delays and thresholds.

**Design System**:
- Romantic color palette (rose, blush, gold, cream, wine)
- Consistent spacing using Tailwind units (4, 8, 12, 16, 20, 24, 32)
- Typography hierarchy with serif headlines and sans-serif body text
- Shadow and elevation system for depth

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API endpoints for fetching couple information, milestones, and gallery photos. All routes are prefixed with `/api`.

**Data Storage**: Currently uses in-memory storage (`MemStorage` class) with default seed data. The architecture supports easy migration to PostgreSQL through Drizzle ORM.

**Static File Serving**: Production builds serve the compiled React application as static files, with fallback to index.html for client-side routing.

**Development Setup**: Uses Vite middleware mode in development for hot module replacement and instant updates.

### Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL, though currently using in-memory storage.

**Schema Design**:
- `users` table: Authentication data (currently unused in the single-page experience)
- `milestones` table: Timeline events with title, description, date, image URL, and display order
- `gallery_photos` table: Photo gallery with image URLs, captions, and order
- `couple_info` table: Core couple data (names, dates, hero title/subtitle, opening message)

**Migration Strategy**: Drizzle Kit configured for schema migrations to PostgreSQL when database is provisioned.

### Build Process

**Development**: 
- Vite dev server with HMR for the React frontend
- tsx for running TypeScript server code directly
- Concurrent development of client and server

**Production Build**:
- Custom build script using esbuild for server bundling
- Vite for optimized client bundle
- Server dependencies are selectively bundled (allowlist) to reduce cold start times
- Output: Single `dist` folder with compiled server (index.cjs) and public client assets

**Path Aliases**: Configured in both TypeScript and Vite:
- `@/*` → client/src
- `@shared/*` → shared types and schemas
- `@assets/*` → attached_assets for images

## External Dependencies

### UI Component Library
- **Radix UI**: Comprehensive set of accessible, unstyled component primitives (accordion, dialog, dropdown, tooltip, etc.)
- **shadcn/ui**: Pre-built component patterns using Radix UI and Tailwind CSS

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom romantic theme configuration
- **class-variance-authority**: Type-safe variant system for component styling
- **clsx & tailwind-merge**: Conditional className utilities

### Data Fetching & State
- **TanStack Query (React Query)**: Server state management, caching, and synchronization

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL client for serverless environments (Neon Database)
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

### Forms & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver for React Hook Form
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Fast build tool and dev server
- **esbuild**: Fast JavaScript bundler for production server
- **tsx**: TypeScript execution for development
- **TypeScript**: Type safety across the stack

### Fonts & Assets
- **Google Fonts**: Playfair Display (serif) and Montserrat (sans-serif) loaded via CDN
- Generated images stored in `attached_assets/generated_images/`

### Utilities
- **date-fns**: Date manipulation and formatting for relationship counters
- **wouter**: Lightweight client-side routing (< 2KB alternative to React Router)
- **lucide-react**: Icon library for UI elements

### Replit Integration (Development Only)
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner

### Session Management (Prepared but Unused)
- **express-session**: Session middleware
- **connect-pg-simple**: PostgreSQL session store
- Ready for future authentication features