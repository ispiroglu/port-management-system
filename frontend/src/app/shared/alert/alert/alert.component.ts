import { Component } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  fireError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error'
    })
  }

  fireConfirmation(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'info'
    })
  }
}
