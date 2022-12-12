export class ShipModel {
    constructor(
      public id: number,
      public shipType: ShipType,
      public name: string,
      public licensePlate: string,
      public length: number,
      public motorPower: number,
      public taxRate: number
    ) {}
}

export enum ShipType {
    Private,
    Cargo
}