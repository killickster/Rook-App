import {Pipe, PipeTransform} from '@angular/core'
import {Color} from '../services/models/color.model'


@Pipe({
    name: 'tableColor'
})


export class TableColorPipe implements PipeTransform{
    

    transform(value: any){
        console.log(value)
        switch(value){
        case Color.BLACK:
            return 'black'
            break
        case Color.RED:
            return 'red'
            break;
        case Color.YELLOW:
            return 'blue'
            break;
        case Color.GREEN:
            return 'green'
            break;
        case Color.UNDETERMINED:
            return 'transparent'
            break;
        }
    }
}
