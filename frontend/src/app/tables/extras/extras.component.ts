import { Component } from "@angular/core";
import { DataService } from "../../shared/service/http/data.service";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.css"],
})
export class ExtrasComponent {
  tableHeaders: string[];
  tableValues: string[];
  latestQuery: string = "";
  shipType: string = "";
  shipTypeResult: number;
  shipTypeRequested: boolean = false;
  numOfFilteredRequested: boolean = false;
  numOfFilteredShips: number;
  motorPower: number;
  shipLength: number;

  constructor(private dataService: DataService) {}

  onClickIntersect() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/member/getOldAndMerchant`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;
        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onClickUnion() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/owner/getYoungOrPrivate`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;
        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onClickExcept() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/ship/getPrivateTaxfree`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;
        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onClickHaving() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/ship/getHasWorker`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;
        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onClickAggr() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/employee/getServantCount`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;
        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onClickView() {
    this.dataService
      .get<any>(`http://127.0.0.1:3000/owner/getPrivate`)
      .subscribe((response) => {
        this.tableHeaders = response.body.columns;
        const rows = response.body.rows;

        let elements = [];

        for (const el of rows) {
          elements.push(Object.values(el));
        }

        this.tableValues = elements;
      });
  }

  onChangeDropdown(str: string) {
    this.shipType = str;
  }

  onClickAvgOnType() {
    const params = new HttpParams().append("shipType", this.shipType);
    this.dataService
      .get<any>(`http://127.0.0.1:3000/ship/getAvgWorkerAge`, params)
      .subscribe((response) => {
        this.shipTypeResult = response.body.result;
        this.shipTypeRequested = true;
      });
  }
  336332353265;
  onClickMotorLengthFilter() {
    let params = new HttpParams().append("motorPower", this.motorPower);
    params = params.append("shipLength", this.shipLength);
    this.dataService
      .get<any>(`http://127.0.0.1:3000/ship/getPowerLengthFilter`, params)
      .subscribe((response) => {
        this.numOfFilteredShips = response.body.result;
        this.numOfFilteredRequested = true;
      });
  }

  private updateTable() {
    // this.dataService
    //   .get<any>(`http://127.0.0.1:5000/datasets/${this.selectedDataset}`)
    //   .subscribe((response) => {
    //     this.tableHeaders = response.tableHeaders;
    //     this.tableValues = response.tableValues;
    //   });
  }
}
