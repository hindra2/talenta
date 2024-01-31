import type { Metadata } from "next";
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "Talenta",
  description: "Dashboard Teachers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-medium">
        <Header/> {}
        {children} {}
      </body>
    </html>
  );
}

