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
  shipList: ShipModel[] = [
    new ShipModel(1, ShipType.Private, "Ship Name", "34LICENSE34", 5, 10, 0),
  ];
  latestQuery: string;
  queryForm: FormGroup;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  // TODO: handle errors
  ngOnInit() {
    this.initForm();
    this.dataService.get<any>("http://localhost:3000/ship/getAll").subscribe(
      (response) => {
        this.shipList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  onSubmit() {
    this.toastr.error("Ğ");
  }

  onClickAdd() {}

  onClickUpdate() {}

  onClickDelete() {}

  private initForm() {
    this.queryForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      shipName: new FormControl(null, [Validators.required]),
      shipType: new FormControl(null, [Validators.required]),
      licensePlate: new FormControl(null, [Validators.required]),
      length: new FormControl(null, [Validators.required]),
      motorPower: new FormControl(null, [Validators.required]),
      taxRate: new FormControl(null, [Validators.required]),
    });
  }
}
