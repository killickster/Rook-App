export class User{
    constructor(
        public name: string,
        public id: string,
        public token: string,
        public expiration: Date
    ){}
}