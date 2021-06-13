import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "client",
    loadChildren: () =>
      import("./client/client.module").then((mod) => mod.ClientModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((mod) => mod.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
