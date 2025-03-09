import { MenuItem } from "@/app/dashboard/menu/page";
import {
  LayoutDashboard,
  Menu,
  UserCheck,
  Shield,
  User,
  AppWindow,
  FileText,
  Menu as MenuIcon,
} from "lucide-react";

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Menu, label: "Menu", href: "/dashboard/menu" },
  { icon: UserCheck, label: "roles", href: "/dashboard/roles" },
  { icon: Shield, label: "Permissions", href: "/dashboard/permissions" },
  { icon: User, label: "Users", href: "/dashboard/users" },
  { icon: AppWindow, label: "Apps", href: "/dashboard/apps" },
  { icon: FileText, label: "Audit Trail", href: "/dashboard/audit-trail" },
];
