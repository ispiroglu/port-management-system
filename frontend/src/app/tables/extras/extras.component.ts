import { Component } from "@angular/core";
import { DataService } from "../../shared/service/http/data.service";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.css"],
})
export class ExtrasComponent {
  tableHeaders: string[];
  tableValues: string[];
  latestQuery: string = "";
  constructor(private dataService: DataService) {}

  onClickIntersect() {}

  onClickUnion() {}

  onClickExcept() {}

  onClickHaving() {}

  onClickAggr() {}

  private updateTable() {
    // this.dataService
    //   .get<any>(`http://127.0.0.1:5000/datasets/${this.selectedDataset}`)
    //   .subscribe((response) => {
    //     this.tableHeaders = response.tableHeaders;
    //     this.tableValues = response.tableValues;
    //   });
  }
}
