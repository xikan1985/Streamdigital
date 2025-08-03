# Replit Configuration

## Overview

This is a full-stack web application built with Express.js backend and React frontend, designed as a comprehensive website for Stream Digital, an AI services company targeting trade businesses in Australia. The application features multiple pages including home, contact, plans/pricing, and resources sections, with Go High Level form integration and modern design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for data validation
- **Storage**: Currently using in-memory storage with interface for easy migration to database
- **API Design**: RESTful endpoints with proper error handling

### Database Design
- **ORM**: Drizzle configured for PostgreSQL
- **Tables**: 
  - `users` - Basic user authentication structure
  - `contact_submissions` - Stores contact form submissions with fields for trade type, business size, and contact info
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`

## Key Components

### Frontend Components
- **Multi-Page Website**: Home, Contact, Plans, Resources with full navigation
- **Landing Page Sections**: Hero, Features, Benefits, Testimonials, Contact, Footer
- **UI Components**: Complete Shadcn/ui component library including forms, buttons, modals, etc.
- **Navigation**: Fixed header with routing between pages and smooth scrolling on home page
- **Contact Form**: Go High Level embedded form integration for lead capture
- **Pricing Plans**: Two-tier pricing structure ($250 and $350 AUD monthly plans)
- **Resources Section**: Trade-specific content and case studies

### Backend Components
- **Route Handlers**: Contact form submission and retrieval endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Validation**: Zod schema validation for all API inputs
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Zod schemas for type-safe data validation
- **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

1. **User Navigation**: Users browse between pages (Home, Contact, Plans, Resources)
2. **Lead Capture**: Go High Level embedded forms capture leads directly into external system
3. **Form Integration**: External form handles validation and submission to Go High Level CRM
4. **Multi-Page Experience**: Seamless routing between different sections of the website
5. **Contact Integration**: All contact forms route to the same Go High Level system for unified lead management

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with comprehensive Radix UI component primitives
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date utilities
- **HTTP Client**: Built-in fetch with TanStack Query wrapper

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) configured via DATABASE_URL
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **TypeScript**: Strict type checking across entire application
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)
- **Vite Plugins**: Runtime error overlay and Replit-specific development features

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations stored in `/migrations` directory

### Environment Configuration
- **Development**: Uses tsx for hot reloading, Vite dev server
- **Production**: Serves static files from Express, uses compiled JavaScript
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Deployment Requirements
- Node.js environment with ESM support
- PostgreSQL database (Neon Database recommended)
- Environment variables: `DATABASE_URL`, `NODE_ENV`

## Development Notes

- Multi-page website structure with client-side routing using Wouter
- Go High Level form integration for external lead management system
- Stream Digital branding with custom logo integration
- Professional gradient-based design system with purple/blue color scheme
- Mobile-responsive design implemented throughout all pages
- Comprehensive pricing structure with two-tier plans ($250/$350 AUD monthly)
- Trade-specific resources and case studies for different contractor types
- Ready for production deployment with proper build scripts and error handling

## Recent Changes (January 2025)

- **Multi-Page Architecture**: Expanded from single landing page to full website with Contact, Plans, and Resources pages
- **Go High Level Integration**: Replaced native forms with embedded Go High Level forms for unified lead management
- **Navigation System**: Implemented proper routing with Wouter for seamless page transitions
- **Pricing Structure**: Added comprehensive pricing page with $250 and $350 monthly plans
- **Resources Section**: Created trade-specific content library with case studies and guides
- **Logo Integration**: Updated to use actual Stream Digital logo with mountain/water design and "1% matters" tagline
- **Local Focus Update**: Updated all content to specifically target electricians and plumbers in Geelong and Bellarine region
- **Service Propositions**: Integrated specific services including Miss Call Text Back, AI Appointment Booking, CRM, Reputation Management, and Paid Ads Management
- **Features Page**: Created dedicated Features page with complete original landing page content