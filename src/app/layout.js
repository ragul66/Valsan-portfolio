import "./globals.css";

export const metadata = {
  title: "Valsan-Portfolio",
  description: "Designed by Ragul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ animation: "pageLoad 0.6s ease both" }}>
        {children}
        <style>{`
          @keyframes pageLoad {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </body>
    </html>
  );
}
