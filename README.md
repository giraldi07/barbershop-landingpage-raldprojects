# Modern Landing Page with React, Vite, and Tailwind CSS

A beautiful and responsive landing page built with modern web technologies.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive
- 🎭 Smooth animations with Framer Motion
- 🎯 Reusable components
- 🎨 Styled with Tailwind CSS and shadcn/ui

## Tech Stack

- React.js
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── navbar.tsx     # Responsive navigation bar
│   ├── footer.tsx     # Responsive footer
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Dark/Light theme toggle
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
└── App.tsx            # Main application component
```

## Components Usage

### Navbar

```tsx
import { Navbar } from "@/components/navbar";

function App() {
  return <Navbar />;
}
```

### Footer

```tsx
import { Footer } from "@/components/footer";

function App() {
  return <Footer />;
}
```

### Theme Toggle

```tsx
import { ThemeToggle } from "@/components/theme-toggle";

function Component() {
  return <ThemeToggle />;
}
```

### Theme Provider

```tsx
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file. The default theme uses CSS variables for colors, which can be found in `src/index.css`.

### Components

All components are built with reusability in mind. You can customize their appearance by:

1. Modifying the Tailwind CSS classes
2. Adjusting the component props
3. Extending the components with additional features

## License

MIT