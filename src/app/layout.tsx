// app/layout.tsx
import { Sidebar } from "@/components/header/Sidebar";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import TopBar from "@/components/TopBar";
import { Providers } from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Providers>
          {/* TopBar takes full width */}
          <TopBar />
          {/* <Sidebar /> */}
          {/* Main layout with SideMenu and content area */}
          <div className="flex">
            {/* SideMenu in a container to prevent scrolling */}
            <aside className="flex-none">
              <SideMenu />
            </aside>

            {/* Main content taking the rest */}
            <main className="flex-grow p-6 overflow-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
