import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'display'
})


export class DisplayPipe implements PipeTransform{
    

    transform(value: any){
        if(value === 0){
            return 'This room is full'
        }else if(value === 1){
            return `This room needs 1 player`
        }else{
            return `This room needs ${value} player`
        }
    }
}
