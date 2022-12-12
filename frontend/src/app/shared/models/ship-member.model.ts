export class ShipMemberModel {
    constructor(
        public citizenId: number,
        public name: string,
        public surname: string,
        public age: number,
        public hasLicense: boolean
    ) {}
}