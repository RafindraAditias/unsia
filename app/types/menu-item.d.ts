// types/menu-item.d.ts
declare module "@/app/constants/menu-data.json" {
  import { MenuItem } from "@/app/dashboard/menu/page";
  const value: MenuItem[];
  export default value;
}
// types/role-item.d.ts
declare module "@/app/constants/datarole.json" {
  import { Menuroles } from "@/app/dashboard/roles/page";
  const value: Menuroles[];
  export default value;
}
