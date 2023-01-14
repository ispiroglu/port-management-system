import { Component } from "@angular/core";
import { CrewModel } from "../../shared/models/crew.model";
import { FormControl, FormGroup } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-crew-table",
  templateUrl: "./crew-table.component.html",
  styleUrls: ["./crew-table.component.css"],
})
export class CrewTableComponent {
  domain: string = "crew";
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
