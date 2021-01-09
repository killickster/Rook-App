export class RookAction {
    constructor(public action: 'bid' | 'discard' | 'redeal' | 'choose_partner' |'round_info', public payload: any){}
}
