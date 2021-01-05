import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  bidForm: FormGroup

  constructor(private game: GamesService,private dialogRef: MatDialogRef<BidComponent>,@Inject(MAT_DIALOG_DATA) public data) { 
    console.log(data)
  }

  ngOnInit(): void {

    this.bidForm = new FormGroup({
      'bid': new FormControl(+this.data.bid+5, Validators.required)
    })
  }

  submitHandler(){
    console.log('submit')

    console.log(this.bidForm.value['bid'])

    if(this.bidForm.value['bid'] > this.data.bid && this.bidForm.value['bid'] % 5 == 0){
      this.dialogRef.close()
    }


  }

  pass(){
    this.game.bidding = false
    this,this.dialogRef.close()
  }


}
