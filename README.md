# Copono Frontend

This is the frontend repository for **Copono**, a smart coupon rewards platform. Built with React, Tailwind CSS, Shadcn UI, and Framer Motion.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/copono-frontend.git
    cd copono-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

    The app will run at `http://localhost:5173`.

## 🛠️ Technology Stack

-   **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [React Router DOM](https://reactrouter.com/)

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn UI primitives
│   ├── Navbar.jsx      # Main navigation
│   ├── Hero.jsx        # Landing page hero
│   ├── Features.jsx    # Feature grid
│   ├── ...
├── lib/                # Utility functions
├── App.jsx             # Main application layout
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static host.

## 🤝 Contributing

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
