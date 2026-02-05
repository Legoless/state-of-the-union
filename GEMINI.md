# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Commands

- **Development Server**: `npm run dev` - Starts the Vite development server.
- **Build**: `npm run build` - compiles TypeScript (`tsc`) and builds the production assets via Vite.
- **Lint**: `npm run lint` - Runs ESLint to check for code quality issues.
- **Preview**: `npm run preview` - Serves the production build locally for testing.

*Note: Ensure `npm install` has been run to install dependencies.*

## Architecture & Structure

This project is a **React** application built with **Vite** and **TypeScript**, designed to visualize the AI ecosystem as an interactive graph.

### Core Stack
- **Framework**: React 19 + Vite 7.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4 (configured with `@tailwindcss/postcss`) and HeroUI (`@heroui/react`) for UI components.
- **Visualization**: React Flow (`@xyflow/react`) handles the interactive node graph.
- **Icons**: Lucide React.

### Application Flow
1. **Entry Point**: `src/main.tsx` mounts the application.
2. **Main Layout**: `src/App.tsx` is the primary container. It manages the global state for the currently selected node (`selectedNode`) and coordinates between the Graph and the Sidebar.
3. **Data Source**: The graph data (Nodes and Edges) is statically defined in `src/data/ai-graph.ts`. This acts as the single source of truth for the visualization.

### Key Components
- **`src/components/AIGraph.tsx`**:
    - Wraps the `ReactFlow` instance.
    - Uses a custom node type (`CustomAINode`) to render cards with HeroUI components (`Card`, `Chip`) inside the graph.
    - Handles node click events to update the parent state.
    - Configured with `colorMode="dark"` for the intended aesthetic.
- **`src/components/Sidebar.tsx`**:
    - A slide-over panel that displays details (description, provider, specs) of the selected node.
    - Uses HeroUI `Card` components for layout.

### Styling
- **Tailwind CSS**: Used for layout and spacing. Global styles are defined in `src/index.css`.
- **HeroUI**: Provides the base design system and components. `HeroUIProvider` wraps the app in `src/App.tsx`.
