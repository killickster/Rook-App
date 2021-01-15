export class RookAction {
    constructor(public action: 'bid' | 'discard' | 'redeal' | 'choose_partner' |'round_info' | 'leave_room', public payload: any){}
}
