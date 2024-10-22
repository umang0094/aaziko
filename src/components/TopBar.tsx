import Link from "next/link";
import { Badge, badgeVariants } from "./ui/badge";
import { Separator } from "./ui/separator";
import { SidebarToggle } from "./header/sidebar-toggle";

// components/TopBar.tsx
export default function TopBar() {
  return (
    <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <img src="/logo.png" className="ml-6 h-16 w-auto" />
          <Separator orientation="vertical" className="h-16 mx-4" />
          <div className="flex flex-col justify-center space-y-2">
            <Link href="" className={badgeVariants({ variant: "outline" })}>
              Switch to Buyer
            </Link>
            <Link href="" className={badgeVariants({ variant: "outline" })}>
              Switch to Company
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Upgrade to Gold Supplier
          </button>
          <button className="px-3 py-1 border rounded">Message</button>
          <div className="relative">
            {/* Add user menu here */}
            <span>My Account ▼</span>
          </div>
          <select className="border rounded">
            <option>Help</option>
          </select>
          <select className="border rounded">
            <option>English</option>
          </select>
        </div>
      </div>
    </header>
  );
}
