import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Valsan-Portfolio",
  description: "Designed by Ragul",
};

import SmoothScroll from "./components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <main style={{ animation: "pageLoad 0.6s ease both" }}>
            {children}
          </main>
        </SmoothScroll>
        <style>{`
          @keyframes pageLoad {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: none; }
          }
        `}</style>
      </body>
    </html>
  );
}
