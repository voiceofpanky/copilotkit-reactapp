"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
      <div className="flex justify-center gap-8 mb-3">

        {/* YouTube */}
        <a
          href="https://youtube.com/@edtech-shower"
          target="_blank"
          className="hover:text-red-400"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.6 3.2H4.4A4.4 4.4 0 000 7.6v8.8a4.4 4.4 0 004.4 4.4h15.2a4.4 4.4 0 004.4-4.4V7.6a4.4 4.4 0 00-4.4-4.4zM10 15.5V8.5l6 3.5-6 3.5z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/pankajsao"
          target="_blank"
          className="hover:text-blue-400"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98 2.98-1.33 2.98-2.98S6.63 3.5 4.98 3.5zM2.4 21.5h5.16V9H2.4v12.5zM9.34 9v12.5h5.16v-6.7c0-3.72 4.84-4.02 4.84 0v6.7H24V13.1c0-7.22-8.22-6.96-9.5-3.4V9H9.34z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/voiceofpanky"
          target="_blank"
          className="hover:text-gray-400"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.1 11.1 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.99 10.99 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>

      <p>© 2025 EdTech Shower</p>
    </footer>
  );
}