import { Component, OnInit } from "@angular/core";
import { OwnershipModel } from "../../shared/models/ownership.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../shared/service/http/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ownership-table",
  templateUrl: "./ownership-table.component.html",
  styleUrls: ["./ownership-table.component.css"],
})
export class OwnershipTableComponent implements OnInit {
  domain: string = "ownership";
  selectedOwnership: OwnershipModel;
  ownershipList: OwnershipModel[] = [
    new OwnershipModel(1, 11111111111, "2022-15-2", 1),
  ];
  queryForm: FormGroup;
  latestQuery: string;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initTable();
    this.initForm();
  }

  onSubmit() {
    this.dataService.getFiltered(this.domain, this.queryForm.value).subscribe(
      (response) => {
        console.log(response);
        this.ownershipList = response.body.rows;
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

    this.toastr.info("Shift hours checker function has been triggered. ");
    this.initTable();
  }

  onClickUpdate() {
    this.dataService
      .updateOnDomain(this.domain, this.queryForm.value, {
        shipid: this.selectedOwnership.shipid,
        citizenid: this.selectedOwnership.citizenid,
      })
      .subscribe(
        (response) => {},
        (error) => {
          console.log(error);
          this.toastr.error(error.error.detail);
        }
      );
    this.toastr.info("Shift hours checker function has been triggered. ");
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

  onClickItem(ownership: OwnershipModel) {
    this.selectedOwnership = ownership;
    this.queryForm.patchValue(ownership);
  }

  private initForm() {
    this.queryForm = new FormGroup({
      shipid: new FormControl(null, [Validators.required]),
      citizenid: new FormControl(null, [Validators.required]),
      licensedat: new FormControl(null, [Validators.required]),
      licensedby: new FormControl(null, [Validators.required]),
    });
  }

  private initTable() {
    this.dataService
      .get<any>("http://localhost:3000/ownership/getAll")
      .subscribe(
        (response) => {
          console.log(response.body);
          this.ownershipList = response.body.rows;
          this.latestQuery = response.body.query;
        },
        (error) => {
          this.toastr.error(error.error.detail);
        }
      );
  }
}
