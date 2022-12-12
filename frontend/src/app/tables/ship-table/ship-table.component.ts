import {Component, OnInit} from '@angular/core';
import {ShipModel, ShipType} from "../../shared/models/ship.model";
import {DataService} from "../../shared/service/http/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-ship-table',
    templateUrl: './ship-table.component.html',
    styleUrls: ['./ship-table.component.css']
})
export class ShipTableComponent implements OnInit {
    shipList: ShipModel[] = [
        new ShipModel(
            1, ShipType.Private, "Ship Name", "34LICENSE34", 5, 10, 0
        )
    ]
    queryForm: FormGroup;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        console.log(this.queryForm.value);
    }

    private initForm() {
        this.queryForm = new FormGroup({
            id: new FormControl(null),
            shipName: new FormControl(null),
            shipType: new FormControl(null),
            licensePlate: new FormControl(null),
            length: new FormControl(null),
            motorPower: new FormControl(null),
            taxRate: new FormControl(null),
        });
    }
}
