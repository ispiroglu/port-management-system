export class EmployeeModel {
  constructor(
    public employeeid: number,
    public citizenid: number,
    public fname: string,
    public lname: string,
    public position: string
  ) {}
}
