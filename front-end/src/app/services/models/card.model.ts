var {Color} = require('./color.model')


export class Card{
    constructor(public color: typeof Color, public value: number, public points: number, public power: number){
    }
}