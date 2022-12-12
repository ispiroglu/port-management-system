import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ShipTableComponent} from "../../tables/ship-table/ship-table.component";
import {ShipOwnerTableComponent} from "../../tables/ship-owner-table/ship-owner-table.component";
import {ShipMemberTableComponent} from "../../tables/ship-member-table/ship-member-table.component";
import {EmployeeTableComponent} from "../../tables/employee-table/employee-table.component";
import {CrewTableComponent} from "../../tables/crew-table/crew-table.component";
import {OwnershipTableComponent} from "../../tables/ownership-table/ownership-table.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    ShipTableComponent,
    ShipOwnerTableComponent,
    ShipMemberTableComponent,
    EmployeeTableComponent,
    CrewTableComponent,
    OwnershipTableComponent
  ]
})

export class AdminLayoutModule {}
