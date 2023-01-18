import { Routes } from "@angular/router";

import { ShipTableComponent } from "../../tables/ship-table/ship-table.component";
import { ShipOwnerTableComponent } from "../../tables/ship-owner-table/ship-owner-table.component";
import { ShipMemberTableComponent } from "../../tables/ship-member-table/ship-member-table.component";
import { EmployeeTableComponent } from "../../tables/employee-table/employee-table.component";
import { CrewTableComponent } from "../../tables/crew-table/crew-table.component";
import { OwnershipTableComponent } from "../../tables/ownership-table/ownership-table.component";
import { ExtrasComponent } from "../../tables/extras/extras.component";

export const AdminLayoutRoutes: Routes = [
  { path: "ship-table", component: ShipTableComponent },
  { path: "owner-table", component: ShipOwnerTableComponent },
  { path: "member-table", component: ShipMemberTableComponent },
  { path: "employee-table", component: EmployeeTableComponent },
  { path: "crew-table", component: CrewTableComponent },
  { path: "ownership-table", component: OwnershipTableComponent },
  { path: "extras", component: ExtrasComponent },
];
