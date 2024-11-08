import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

reservations: Reservation[]=[];

//  CRUD
constructor(){ //loaded before ngOnInt hook 
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations): []
}

getReservations(): Reservation[]{
  return this.reservations
}

getReservation(id: number): Reservation | undefined {
  return this.reservations.find(res => res.id === id)
}
addReservation(reservation: Reservation) : void {
  let generateID = Date.now()
  reservation.id = generateID
  this.reservations.push(reservation);
  localStorage.setItem('reservations', JSON.stringify(this.reservations))
}
deleteReservation(id:number): void{
  let index = this.reservations.findIndex(res => res.id === id)
  this.reservations.splice(index, 1)
  localStorage.setItem('reservations', JSON.stringify(this.reservations))
}
updateReservation(updatedReservation: Reservation) : void {
  let index = this.reservations.findIndex(res => res.id === updatedReservation.id)
  this.reservations[index] = updatedReservation
  localStorage.setItem('reservations', JSON.stringify(this.reservations))
}

}
