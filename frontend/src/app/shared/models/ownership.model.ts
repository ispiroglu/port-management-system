export class OwnershipModel {
  constructor(
    public shipid: number,
    public citizenid: number,
    public licensedat: string,
    public licensedby: number
  ) {}
}
