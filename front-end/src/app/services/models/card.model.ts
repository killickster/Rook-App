import {Color} from './color.model'

export class Card{
    constructor(public color: Color, public value: number, public points: number, public power: number, public state: 'face' | 'flipped', public exchange: boolean, public kitty: boolean){
    }
}