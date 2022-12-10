export class ShipOwnerModel {
    constructor(
        public citizenId: number,
        public name: string,
        public surname: string,
        public age: number,
        public company: string,
    ) {}
}