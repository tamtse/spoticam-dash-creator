import { Home, Radio, Music, Disc3, Heart, History, Folder } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { icon: Home, label: "Browse", path: "/" },
  { icon: Music, label: "Songs", path: "/songs" },
  { icon: Disc3, label: "Albums", path: "/albums" },
  { icon: Radio, label: "Artists", path: "/artists" },
  { icon: Radio, label: "Radio", path: "/radio" },
];

const myMusicItems = [
  { icon: History, label: "Recently Played", path: "/recent" },
  { icon: Heart, label: "Favorite Songs", path: "/favorites" },
  { icon: Folder, label: "Local File", path: "/local" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen flex flex-col border-r border-sidebar-border">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Spoticam</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-8">
        <div>
          <h2 className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Library
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground transition-smooth hover:bg-sidebar-accent"
                activeClassName="bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h2 className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            My Music
          </h2>
          <div className="space-y-1">
            {myMusicItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground transition-smooth hover:bg-sidebar-accent"
                activeClassName="bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};
