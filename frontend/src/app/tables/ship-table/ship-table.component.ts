import {Component, OnInit} from '@angular/core';
import {ShipModel, ShipType} from "../../shared/models/ship.model";
import {DataService} from "../../shared/service/http/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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

    constructor(private dataService: DataService, private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.initForm();
        this.dataService.get<ShipModel[]>('http://localhost:3000/ship/getAll')
            .subscribe((response) =>{
                this.shipList = response.body;
                console.log(this.shipList)
            });
    }
    onSubmit() {

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
