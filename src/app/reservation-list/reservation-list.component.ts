import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  getFromLocalStorage = localStorage.getItem('reservations') 
  currentReservations:any = this.getFromLocalStorage ? JSON.parse(this.getFromLocalStorage): []
}
