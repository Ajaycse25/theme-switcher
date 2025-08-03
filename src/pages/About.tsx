export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About This App</h2>
      <p className="mb-4">
        This Multi-Theme Switcher App is built using React, Vite, TypeScript, and Tailwind CSS. It allows users to
        change the visual appearance of the application by selecting different themes.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Theme 1 – Minimal light theme</li>
        <li>Theme 2 – Dark mode with sidebar layout</li>
        <li>Theme 3 – Colorful and playful card layout</li>
      </ul>
    </div>
  );
}
