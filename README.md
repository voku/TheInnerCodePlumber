# The Inner Code Plumber

An interactive deep-dive into **Adaptive Systemic Intuition** for senior software engineers.

## Overview

This project explores how experienced developers build intuition for code quality and maintainability—the "gut feeling" that something is wrong even when tests pass and linters are silent.

Based on the article by Lars Moelleken, this interactive application demonstrates principles of software development that go beyond mere programming syntax.

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Build for Production

Build the application for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main application component with navigation
├── components/
│   ├── BlogPost.tsx       # Main content and article sections
│   ├── UIComponents.tsx   # Reusable UI components
│   └── InteractiveDemos.tsx # Interactive code demonstrations
├── index.html             # HTML entry point
├── index.tsx              # React entry point
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## Key Features

- **Progressive reading experience** with scroll-based navigation
- **Interactive code examples** demonstrating intuition principles
- **Responsive design** for mobile and desktop
- **Smooth scrolling** and section highlighting
- **Table of contents** for easy navigation

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Deployment

This project is configured for deployment to GitHub Pages. Push to the main branch to trigger automatic deployment via GitHub Actions.

## AI Assistant Helper: Key Files Detector

When working with an AI assistant on this codebase, use this prompt to help the AI quickly identify and understand the most important files:

```
Please analyze this repository and identify the key files I should understand. Focus on:
1. Entry points (index files, main app files)
2. Core component files
3. Configuration files (build, deployment)
4. Any files that define the project structure or architecture

For each key file, provide:
- File path
- Primary purpose/responsibility
- Key dependencies or files it interacts with
- Why it's important to understand this file

This will help me quickly understand the codebase structure and make informed changes.
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

See the repository for license information.

## Related

Original article: [LinkedIn Post by Lars Moelleken](https://lnkd.in/er9SJpty)
