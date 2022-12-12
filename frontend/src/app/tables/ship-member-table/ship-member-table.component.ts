import {Component, OnInit} from '@angular/core';
import {ShipMemberModel} from "../../shared/models/ship-member.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-ship-member-table',
    templateUrl: './ship-member-table.component.html',
    styleUrls: ['./ship-member-table.component.css']
})
export class ShipMemberTableComponent implements OnInit {

    // TODO: Boolean türlerin çıktısı tik olmalı
    shipMemberList: ShipMemberModel[] = [
        new ShipMemberModel(11322322454, "Evren", "Ispiroglu", 20, true)
    ]
    queryForm: FormGroup;

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        console.log(this.queryForm.value);
    }

    private initForm() {
        this.queryForm = new FormGroup({
            citizenId: new FormControl(null),
            name: new FormControl(null),
            surname: new FormControl(null),
            age: new FormControl(null),
            hasLicense: new FormControl(null)
        });
    }
}
