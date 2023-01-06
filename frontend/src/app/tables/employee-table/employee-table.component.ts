import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../../shared/models/employee.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    employeeList: EmployeeModel[] = [
        new EmployeeModel(1, 3341152132, "Asude Merve", "Ekiz", "Lisans Memuru")
    ]
    queryForm: FormGroup;

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {}

    onClickAdd() {}

    onClickUpdate() {}

    onClickDelete() {}

    private initForm() {
        this.queryForm = new FormGroup({
            employeeId: new FormControl(null),
            citizenId: new FormControl(null),
            name: new FormControl(null),
            surname: new FormControl(null),
            position: new FormControl(null)
        });
    }
}
