import NotFound from "./pages/NotFound";

export const CommonRoutes = {
  title: "Home",
  path: "/home",
  // icon: SettingsIcon,
  component: NotFound,
  guard: true,
  subRoutes: [
    // { component: Home, path: "/", title: "Home" },
  ],
};
