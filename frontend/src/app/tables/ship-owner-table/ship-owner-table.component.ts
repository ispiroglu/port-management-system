import { Component, OnInit } from "@angular/core";
import { ShipOwnerModel } from "../../shared/models/ship-owner.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ship-owner-table",
  templateUrl: "./ship-owner-table.component.html",
  styleUrls: ["./ship-owner-table.component.css"],
})
export class ShipOwnerTableComponent implements OnInit {
  domain: string = "owner";
  shipOwnerList: ShipOwnerModel[] = [
    new ShipOwnerModel(3353343326, "Hasan", "Hüseyin", 55, "Kardeşler Kundura"),
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
        this.shipOwnerList = response.body.rows;
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

  onClickUpdate() {}

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
    this.initTable();
  }

  private initForm() {
    this.queryForm = new FormGroup({
      citizenid: new FormControl(null, [Validators.required]),
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      age: new FormControl(null),
      company: new FormControl(null, [Validators.min(18)]),
    });
  }

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/owner/getAll").subscribe(
      (response) => {
        this.shipOwnerList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error.detail);
      }
    );
  }
}
