export class SnackData {
    constructor(public message: string, public action: 'bid' | 'discard', public payload: any){}
}
