import {Component, OnInit} from '@angular/core';
import {OwnershipModel} from "../../shared/models/ownership.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ownership-table',
  templateUrl: './ownership-table.component.html',
  styleUrls: ['./ownership-table.component.css']
})
export class OwnershipTableComponent implements OnInit {
  ownershipList: OwnershipModel[] = [
      new OwnershipModel(1, 11111111111, "2022-15-2", 1)
  ]
  queryForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.queryForm.value);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      shipId: new FormControl(null),
      citizenId: new FormControl(null),
      licensedAt: new FormControl(null),
      licensedBy: new FormControl(null)
    });
  }
}

