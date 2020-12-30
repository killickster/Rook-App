

export class Card {


    constructor(public color: string, public value: number, public points: number | null, public power: number, public state: 'face' | 'flipped', public exchange: boolean, public kitty: boolean ){
    }


}