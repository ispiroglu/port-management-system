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
  domain: string = "member";
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

  onSubmit() {
    this.dataService.getFiltered(this.domain, this.queryForm.value).subscribe(
      (response) => {
        console.log(response);
        this.shipMemberList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  onClickAdd() {}

  onClickUpdate() {}

  onClickDelete() {}

  private initForm() {
    this.queryForm = new FormGroup({
      citizenid: new FormControl(null, [Validators.required]),
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      has_license: new FormControl(null),
    });
  }

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/member/getAll").subscribe(
      (response) => {
        console.log(response.body);
        this.shipMemberList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }
}
