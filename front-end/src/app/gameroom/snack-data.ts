export class SnackData {
    constructor(public message: string, public action: 'bid' | 'discard' | 'redeal', public payload: any){}
}
