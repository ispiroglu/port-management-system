export class OwnershipModel {
    constructor(
        public shipId: number,
        public citizenId: number,
        public licensedAt: string,
        public licensedBy: number,
    ) {}
}