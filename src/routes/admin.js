import { Group, Dashboard } from "@mui/icons-material";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <Dashboard />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/users",
    name: "users",
    icon: <Group />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/users",
    name: "users",
    icon: <Group />,
    sidebar: true,
    isPrivate: true,
  },
];
