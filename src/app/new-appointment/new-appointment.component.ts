import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../Services/appointment.service';
@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent
{
  appointmentObj:any={
   name:"",
   mobileNo:"",
   city:"",
   age: 0,
   gender:"",
   appointmentTime:"",
   isFirstVisit:true,
   naration:"",
   appointmentDate:""
  }
  constructor(private appointment:AppointmentService){

  }
  bookappointment()
  {
    console.log(this.appointmentObj);
    this.appointment.createNew(this.appointmentObj).subscribe((res:any)=>{
     //code
    })
   // console.log('Your Appointment is successfull',this.appointmentObj)
  }//bookappointment
}
