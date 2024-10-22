import Link from "next/link";

const menuItems = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "💬", label: "Message Center", href: "/messages" },
  { icon: "📦", label: "Orders", href: "/orders" },
  { icon: "💼", label: "Wallet", href: "/wallet" },
  { icon: "📋", label: "My list", href: "/my-list" },
  { icon: "🛠️", label: "Business Services", href: "/services" },
  { icon: "👤", label: "Accounts", href: "/accounts" },
  { icon: "📅", label: "Event", href: "/events" },
  { icon: "🛒", label: "Order with Aaziko", href: "/order-aaziko" },
];

export default function SideMenu() {
  return (
    <nav className="lg:w-64 w-18 ml-10 mt-6 bg-white shadow-lg sticky top-28">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center justify-center lg:justify-start px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-0 lg:mr-2">{item.icon}</span>
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
