import { Component } from '@angular/core';
import {CrewModel} from "../../shared/models/crew.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-crew-table',
  templateUrl: './crew-table.component.html',
  styleUrls: ['./crew-table.component.css']
})
export class CrewTableComponent {
  crewList: CrewModel[] = [
      new CrewModel(1, 11111111, 1)
  ];
  queryForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {}

  onClickAdd() {}

  onClickUpdate() {}

  onClickDelete() {}


  private initForm() {
    this.queryForm = new FormGroup({
      id: new FormControl(null),
      citizenId: new FormControl(null),
      shipId: new FormControl(null),
    });
  }
}
