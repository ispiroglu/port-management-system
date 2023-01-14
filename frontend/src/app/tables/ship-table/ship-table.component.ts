import { Component, OnInit } from "@angular/core";
import { ShipModel, ShipType } from "../../shared/models/ship.model";
import { DataService } from "../../shared/service/http/data.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ship-table",
  templateUrl: "./ship-table.component.html",
  styleUrls: ["./ship-table.component.css"],
})
export class ShipTableComponent implements OnInit {
  domain: string = "ship";
  shipList: ShipModel[] = [
    new ShipModel(1, ShipType.Private, "Ship Name", "34LICENSE34", 5, 10, 0),
  ];
  latestQuery: string;
  queryForm: FormGroup;

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
        this.shipList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
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

    this.toastr.info("Tax rate checker function has been triggered. ");
    this.initTable();
  }

  onClickUpdate() {}

  onClickDelete() {
    this.dataService
      .deleteByParams(this.domain, this.queryForm.value)
      .subscribe(
        (response) => {},
        (error) => {
          this.toastr.error(error.error.detail);
        }
      );
  }

  private initForm() {
    this.queryForm = new FormGroup({
      shipid: new FormControl(null, [Validators.required]),
      shipname: new FormControl(null, [Validators.required]),
      shiptype: new FormControl(null, [Validators.required]),
      licenseplate: new FormControl(null, [Validators.required]),
      length: new FormControl(null, [Validators.required]),
      motorpower: new FormControl(null, [Validators.required]),
      taxrate: new FormControl(null, [Validators.required]),
    });
  }

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/ship/getAll").subscribe(
      (response) => {
        this.shipList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error.detail);
      }
    );
  }
}
