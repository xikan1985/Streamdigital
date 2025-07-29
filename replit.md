# Replit Configuration

## Overview

This is a full-stack web application built with Express.js backend and React frontend, designed as a landing page for an AI services company targeting trade businesses in Australia. The application features a contact form system and is built with modern TypeScript, Tailwind CSS, and component-based architecture.

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
- **Landing Page Sections**: Hero, Features, Benefits, Testimonials, Contact, Footer
- **UI Components**: Complete Shadcn/ui component library including forms, buttons, modals, etc.
- **Navigation**: Fixed header with smooth scrolling to sections
- **Contact Form**: Multi-field form with validation and submission handling

### Backend Components
- **Route Handlers**: Contact form submission and retrieval endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Validation**: Zod schema validation for all API inputs
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Zod schemas for type-safe data validation
- **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

1. **User Interaction**: Users fill out contact form on landing page
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: Form data sent to `/api/contact` endpoint
4. **Server Validation**: Server validates data using shared Zod schemas
5. **Data Storage**: Contact submission stored in memory (ready for database migration)
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notification shown to user based on response

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

- The application is currently using in-memory storage but is designed for easy migration to PostgreSQL
- All form validation schemas are shared between client and server for consistency
- The UI follows a professional gradient-based design system with custom CSS variables
- Mobile-responsive design implemented throughout
- Ready for production deployment with proper build scripts and error handling