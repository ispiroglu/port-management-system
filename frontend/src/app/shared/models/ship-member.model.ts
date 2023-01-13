export class ShipMemberModel {
  constructor(
    public citizenid: number,
    public fname: string,
    public lname: string,
    public age: number,
    public has_license: boolean
  ) {}
}
