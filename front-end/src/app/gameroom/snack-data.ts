export class SnackData {
    constructor(public message: string, public action: 'bid' | 'discard' | 'redeal' | 'choose_partner'| 'round_info', public payload: any){}
}
