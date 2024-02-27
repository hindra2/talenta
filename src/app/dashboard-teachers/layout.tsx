import type { Metadata } from "next";
import Logo from "@/Components/logo";
import Sidebar from "@/Components/dashboard-teachers/sidebar";

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
      <body className="relative font-medium bg-background">
        {/* top right logo */}
        <div className="absolute h-[225px] w-[225px] top-3 right-2 m-5">
          <Logo /> {}
        </div>
        {/* top left sidebar */}
        <div className="absolute h-128 w-128 left-0 top-0">
          <Sidebar /> {}
        </div>
        {children} {}
      </body>
    </html>
  );
}
