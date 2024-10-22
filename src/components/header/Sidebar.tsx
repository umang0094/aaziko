import Link from "next/link";

import {
  BookmarkIcon,
  BracesIcon,
  CalendarIcon,
  ExternalLinkIcon,
  LayoutTemplateIcon,
  LogOutIcon,
  MegaphoneIcon,
  MonitorSmartphoneIcon,
  Package2Icon,
  PanelTopIcon,
  PinIcon,
  PlusIcon,
  StickyNoteIcon,
} from "lucide-react";

import { PaneContainer, PaneContent, PaneHeader } from "./pane";
import { SidebarClient } from "./sidebar-client";
import { NavItem } from "./sidebar-nav-item";
import { SidebarToggle } from "./sidebar-toggle";

const externalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/eckoln/nextdaily",
  },
  {
    label: "Next.js Docs",
    href: "https://nextjs.org/docs",
  },
  {
    label: "Next.js GitHub",
    href: "https://github.com/vercel/next.js",
  },
  {
    label: "RSS",
    href: "/feed.xml",
  },
];

function getTagIcon(slug: string) {
  switch (slug) {
    case "official":
      return MegaphoneIcon;
    case "tutorials":
      return MonitorSmartphoneIcon;
    case "packages":
      return Package2Icon;
    case "events":
      return CalendarIcon;
    case "showcase":
      return PanelTopIcon;
    case "templates":
      return LayoutTemplateIcon;
    case "examples":
      return BracesIcon;
    case "opinions":
      return StickyNoteIcon;
    default:
      return PinIcon;
  }
}

export async function Sidebar() {
  const tags = [{ name: "All", slug: "official" }];

  return (
    <SidebarClient>
      <PaneContainer className="max-h-screen overflow-y-auto">
        {/* Brand */}
        <PaneHeader className="justify-between">
          <Link
            className="inline-flex items-center space-x-3 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-0"
            href="/"
          >
            <BookmarkIcon size={20} />
            <span>Next Daily</span>
          </Link>
          <SidebarToggle />
        </PaneHeader>
        <PaneContent>
          <nav className="flex flex-1 flex-col divide-y divide-border text-muted-foreground">
            {/* User section */}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="space-y-0.5 py-2 xl:py-4">
                <div className="flex h-9 items-center px-2 xl:px-3">
                  <span className="text-sm">Menu</span>
                </div>
                {tags.map((tag) => {
                  const TagIcon = getTagIcon(tag.slug);
                  return (
                    <NavItem
                      className="justify-between"
                      href={`/tags/${tag.slug}`}
                      tag={tag.slug}
                      key={tag.slug}
                      prefetch
                    >
                      <div className="flex items-center space-x-3">
                        <TagIcon size={16} />
                        <span>{tag.name}</span>
                      </div>
                      {/* <span>{tag._count.resources}</span> */}
                    </NavItem>
                  );
                })}
              </div>
            )}
            {/* External links */}
            <div className="space-y-0.5 py-2 xl:mt-auto xl:py-4">
              {externalLinks.map((item) => (
                <NavItem href={item.href} target="_blank" key={item.href}>
                  <ExternalLinkIcon size={16} />
                  <span>{item.label}</span>
                </NavItem>
              ))}
            </div>
          </nav>
        </PaneContent>
      </PaneContainer>
    </SidebarClient>
  );
}
