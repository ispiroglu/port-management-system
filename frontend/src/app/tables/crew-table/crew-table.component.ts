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

  private initTable() {
    this.dataService.get<any>("http://localhost:3000/crew/getAll").subscribe(
      (response) => {
        this.crewList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }
}
