export class ShipModel {
    constructor(
      public shipid: number,
      public shiptype: ShipType,
      public shipname: string,
      public licenseplate: string,
      public shiplength: number,
      public motorpower: number,
      public taxrate: number
    ) {}
}

export enum ShipType {
    Private,
    Merchant
}