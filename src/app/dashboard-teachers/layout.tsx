import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talenta",
  description: "",
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

