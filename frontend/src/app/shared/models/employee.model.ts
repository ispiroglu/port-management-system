export class EmployeeModel {
    constructor(
        public employeeId: number,
        public citizenId: number,
        public name: string,
        public surname: string,
        public position: string
    ) {}
}