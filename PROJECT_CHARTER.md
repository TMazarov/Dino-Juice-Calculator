# Dino Juice Calc – Project Charter

## Core Vision
To create a minimalistic, functional, and visually stunning Progressive Web App (PWA) that serves as a fuel consumption calculator. The user experience should be seamless and beautiful, adhering to the highest standards of modern web design.

## Guiding Principles
- **Mentorship:** The project is built as a learning journey, with clear explanations and beginner-friendly steps.
- **One Step at a Time:** Concepts and code are introduced in small, manageable chunks.
- **Explain Everything:** Every command, code block, and configuration is thoroughly commented and explained.
- **Local First Workflow:** All changes are implemented and tested locally before being committed and pushed to GitHub.
- **No Command Chaining:** Terminal commands are provided one at a time for clarity.

## Core Application Functionality
- **Primary Function:** Calculate fuel efficiency.
- **Inputs:** Distance traveled (km/miles), Fuel used (liters/gallons).
- **Outputs:** Liters per 100 kilometers (L/100km), Miles per gallon (MPG).
- **Unit Switching:** User can switch between Metric and Imperial systems (default: Metric).

## Tech Stack & Design System
- **Framework:** React
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Theme:** Dark theme by default, with user toggle for light/dark mode
- **Aesthetics:** Modern, futuristic, clean, and minimalistic

## Project Structure & Code Standards
- **File Organization:** Logical folder structure (components, styles, hooks, utils, etc.)
- **Component-Based Architecture:** Each function, component, and style in its own file (max 150 lines per file)
- **Commenting:** Every file, function, and complex line is meticulously commented

## PWA Requirements
- **Manifest:** manifest.json for PWA metadata
- **Service Worker:** Offline access and background updates with auto-refresh
- **Fullscreen Experience:** Launches in fullscreen when installed
- **Custom Install Prompt:** Beautiful, non-intrusive install prompt using shadcn/ui
- **404 Handling:** SPA 404 solution for GitHub Pages

## Asset Generation
- **Input:** logo.png (transparent background)
- **Scripts:** Generate PWA icons and favicons using automated scripts
- **Output:** Place assets in correct directories

## Development, Deployment & Automation
- **Version Control:** GitHub
- **Hosting:** GitHub Pages
- **Branching:** main (development), gh-pages (production)
- **CI/CD:** GitHub Actions workflow for automated deployment

## Action Plan
1. Project Initialization
2. Building the Application
3. PWA Conversion & Asset Creation
4. Deployment & Automation

## Progress Update (as of current phase)
- Core UI and calculation logic are implemented and functional.
- Unit switching (Metric/Imperial) is complete and uses a modern toggle.
- Theme toggling (dark/light) is implemented and persists user preference.
- Validation and accessibility improvements are in place.
- PWA setup is complete: manifest, service worker, and offline support are working.
- Automated scripts for PWA icons and favicons from logo.png are implemented and tested.
- Favicon and icon references in manifest and HTML are verified.
- Next step: custom install prompt and final PWA polish.

