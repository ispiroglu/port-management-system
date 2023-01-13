import { Component, OnInit } from "@angular/core";
import { EmployeeModel } from "../../shared/models/employee.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.css"],
})
export class EmployeeTableComponent implements OnInit {
  employeeList: EmployeeModel[] = [
    new EmployeeModel(1, 3341152132, "Asude Merve", "Ekiz", "Lisans Memuru"),
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
      employeeId: new FormControl(null, [Validators.required]),
      citizenId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
    });
  }

  private initTable() {
    this.dataService
      .get<any>("http://localhost:3000/employee/getAll")
      .subscribe(
        (response) => {
          this.employeeList = response.body.rows;
          this.latestQuery = response.body.query;
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
  }
}
