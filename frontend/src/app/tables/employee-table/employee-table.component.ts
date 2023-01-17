import { Component, OnInit } from "@angular/core";
import { EmployeeModel } from "../../shared/models/employee.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";
import { ShipModel } from "../../shared/models/ship.model";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.css"],
})
export class EmployeeTableComponent implements OnInit {
  domain: string = "employee";
  selectedEmployee: EmployeeModel;
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

  onSubmit() {
    this.dataService.getFiltered(this.domain, this.queryForm.value).subscribe(
      (response) => {
        console.log(response);
        this.employeeList = response.body.rows;
        this.latestQuery = response.body.query;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error.detail);
      }
    );
  }

  onClickAdd() {
    let val = this.queryForm.value;
    val["employeeid"] = "nextval('employee_id_seq')";
    console.log(val);
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
        employeeid: this.selectedEmployee.employeeid,
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

  onClickItem(employee: EmployeeModel) {
    this.selectedEmployee = employee;
    this.queryForm.patchValue(employee);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      employeeid: new FormControl(null, [Validators.required]),
      citizenid: new FormControl(null, [Validators.required]),
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
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
          this.toastr.error(error.error.detail);
        }
      );
  }
}
