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

  onSubmit() {}

  onClickAdd() {}

  onClickUpdate() {}

  onClickDelete() {}

  private initForm() {
    this.queryForm = new FormGroup({
      citizenId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
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
        this.toastr.error(error.error);
      }
    );
  }
}
