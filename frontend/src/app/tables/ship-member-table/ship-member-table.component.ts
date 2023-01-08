import { Component, OnInit } from "@angular/core";
import { ShipMemberModel } from "../../shared/models/ship-member.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ship-member-table",
  templateUrl: "./ship-member-table.component.html",
  styleUrls: ["./ship-member-table.component.css"],
})
export class ShipMemberTableComponent implements OnInit {
  // TODO: Boolean türlerin çıktısı tik olmalı
  shipMemberList: ShipMemberModel[] = [
    new ShipMemberModel(11322322454, "Evren", "Ispiroglu", 20, true),
  ];
  queryForm: FormGroup;
  latestQuery: string;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
    this.initTable();
  }

  onSubmit() {}

  onClickAdd() {}

  onClickUpdate() {}

  onClickDelete() {}

  private initForm() {
    this.queryForm = new FormGroup({
      citizenId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      hasLicense: new FormControl(null),
    });
  }

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/member/getAll").subscribe(
      (response) => {
        this.shipMemberList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }
}
