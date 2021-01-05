export class RookAction {
    constructor(public action: 'bid' | 'discard' | 'redeal', public payload: any){}
}
