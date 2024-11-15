import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, 
    private reservationService: ReservationService,
    private router: Router){

  }
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required],
      guestName:['', Validators.required],
      guestEmail:['', [Validators.required, Validators.email]],
      roomNumber:['', Validators.required],
    })
    console.log('load')
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm.value)
      let reservation: Reservation = this.reservationForm.value
      this.reservationService.addReservation(reservation)
      console.log('valid')
      this.router.navigate(['/list'])

    }
  }
  onDelete(id: number){
    this.reservationService.deleteReservation(id)
    console.log(id)
  }
  

}
