import {Component, OnInit} from '@angular/core';
import {ShipOwnerModel} from "../../shared/models/ship-owner.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ship-owner-table',
  templateUrl: './ship-owner-table.component.html',
  styleUrls: ['./ship-owner-table.component.css']
})
export class ShipOwnerTableComponent implements OnInit {
  shipOwnerList: ShipOwnerModel[] = [
      new ShipOwnerModel(3353343326, "Hasan", "Hüseyin", 55, "Kardeşler Kundura")
  ]
  queryForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.queryForm.value);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      citizenId: new FormControl(null),
      name: new FormControl(null),
      surname: new FormControl(null),
      age: new FormControl(null),
      company: new FormControl(null)
    });
  }
}
