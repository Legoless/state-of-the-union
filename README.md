# State of the Union

An interactive visualization of the AI ecosystem (LLMs, Tools, Agents, and more), built with React, Vite, and React Flow.

## Overview

This project provides a node-based graph interface to explore the relationships between various AI models, development tools, and autonomous agents. Users can select nodes to view detailed specifications, providers, and descriptions in a side panel.

## Tech Stack

-   **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **UI Components**: [HeroUI](https://www.heroui.com/)
-   **Visualization**: [React Flow](https://reactflow.dev/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Features

-   **Interactive Graph**: Drag, zoom, and explore nodes representing AI entities.
-   **Categorization**: distinct colors and groupings for LLMs, Image Models, Video Models, IDEs, Agents, and more.
-   **Details Panel**: Click any node to see a sidebar with in-depth information.
-   **Dark Mode**: A modern, dark-themed aesthetic optimized for extended viewing.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components/AIGraph.tsx`: Main graph component using React Flow.
-   `src/components/Sidebar.tsx`: Details panel for selected nodes.
-   `src/data/ai-graph.ts`: Static data source defining all nodes and edges.
-   `src/App.tsx`: Main application layout and state management.
