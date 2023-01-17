import { Component } from "@angular/core";
import { CrewModel } from "../../shared/models/crew.model";
import { FormControl, FormGroup } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";
import { ShipOwnerModel } from "../../shared/models/ship-owner.model";
import { ShipModel } from "../../shared/models/ship.model";

@Component({
  selector: "app-crew-table",
  templateUrl: "./crew-table.component.html",
  styleUrls: ["./crew-table.component.css"],
})
export class CrewTableComponent {
  domain: string = "crew";
  selectedCrew: CrewModel;
  crewList: CrewModel[] = [new CrewModel(1, 11111111, 1)];
  queryForm: FormGroup;
  latestQuery: string = "";

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
        this.crewList = response.body.rows;
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
        id: this.selectedCrew.id,
      })
      .subscribe(
        (response) => {},
        (error) => {
          console.log(error);
          this.toastr.error(error.error.detail);
        }
      );
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

  onClickItem(element: CrewModel) {
    this.selectedCrew = element;
    this.queryForm.patchValue(element);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      id: new FormControl(null),
      citizenid: new FormControl(null),
      shipid: new FormControl(null),
    });
  }

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/crew/getAll").subscribe(
      (response) => {
        this.crewList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error.detail);
      }
    );
  }
}
