# Logistic App Prototype

A logistics website built with React, TypeScript and Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── assets/            # Static assets bundled by Vite
│   ├── images/        # Photos, illustrations, hero images
│   └── icons/         # SVG icons (trucks, packages, status icons)
├── components/        # Reusable UI components
│   ├── common/        # Generic building blocks: Button, Input, Modal, Badge, Loader
│   ├── forms/         # Form pieces: AddressForm, PackageDetailsForm, QuoteForm
│   ├── layout/        # Header, Footer, Navbar, Sidebar
│   ├── shipment/      # ShipmentCard, ShipmentTable, ShipmentStatusBadge
│   └── tracking/      # TrackingSearch, TrackingTimeline, RouteMap
├── pages/             # Route-level screens (one folder per page)
│   ├── Home/          # Landing page: services, hero, CTA
│   ├── Tracking/      # Track a shipment by tracking number
│   ├── Shipments/     # List of user's shipments
│   ├── ShipmentDetails/ # Single shipment view
│   ├── Quote/         # Get a shipping rate / quote
│   ├── Dashboard/     # Overview stats for logged-in users
│   ├── Auth/          # Login / Register
│   └── NotFound/      # 404 page
├── layouts/           # Page shells: MainLayout, DashboardLayout, AuthLayout
├── routes/            # Route definitions and protected-route guards
├── services/          # API layer: apiClient, shipmentService, trackingService, authService
├── hooks/             # Custom hooks: useShipments, useTracking, useAuth, useDebounce
├── context/           # React context providers (auth, theme, notifications)
├── types/             # Shared TypeScript types: Shipment, TrackingEvent, Address, User
├── utils/             # Pure helpers: formatDate, formatCurrency, validateTrackingNumber
├── constants/         # Shipment statuses, service types, route paths, enums
├── config/            # Environment/app config (API base URL, feature flags)
└── styles/            # Global styles, CSS variables, theme tokens
```
