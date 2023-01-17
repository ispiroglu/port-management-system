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
  selectedMember: ShipMemberModel;
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
        this.toastr.error(error.error.detail);
      }
    );
  }

  onClickAdd() {
    this.dataService
      .createOnDomain(this.domain, this.queryForm.value)
      .subscribe(
        (response) => {},
        (error) => {
          console.log(error);
          this.toastr.error(error.error.detail);
        }
      );
    this.initTable();
  }

  onClickUpdate() {
    this.dataService
      .updateOnDomain(this.domain, this.queryForm.value, {
        citizenid: this.selectedMember.citizenid,
      })
      .subscribe(
        (response) => {},
        (error) => {
          console.log(error);
          this.toastr.error(error.error.detail);
        }
      );
    this.initTable();
  }

  onClickDelete() {
    this.dataService
      .deleteByParams(this.domain, this.queryForm.value)
      .subscribe(
        (response) => {},
        (error) => {
          console.log(error);
          this.toastr.error(error.error.detail);
        }
      );
  }

  onClickItem(member: ShipMemberModel) {
    this.selectedMember = member;
    this.queryForm.patchValue(member);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      citizenid: new FormControl(null, [Validators.required]),
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      has_license: new FormControl(false),
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
        this.toastr.error(error.error.detail);
      }
    );
  }
}
