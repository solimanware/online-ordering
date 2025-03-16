import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { phone } from 'phone';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PhoneVerificationComponent implements OnInit {
  phoneNumber$ = this.userService.userPhoneNumber$;
  @Output() otp: EventEmitter<number> = new EventEmitter();

  isPhoneValid = new BehaviorSubject<boolean>(true);
  showError = false;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  validatePhoneNumber(phoneNumber: string) {
    const phoneNumberFormatted = phone(phoneNumber, { country: 'EG' });
    this.isPhoneValid.next(phoneNumberFormatted.isValid);
    this.showError = !phoneNumberFormatted.isValid;
    console.log(phoneNumberFormatted);
  }

  sendWhatsAppOTP(phoneNumber: string) {
    const phoneNumberFormatted = phone(phoneNumber, { country: 'EG' });

    if (phoneNumberFormatted.isValid) {
      this.showError = false;
      this.phoneNumber$.next(phoneNumberFormatted.phoneNumber);
      this.userService
        .sendWhatsAppOTP(phoneNumberFormatted.phoneNumber)
        .subscribe({
          next: async (res) => {
            const data = await res.json();
            const otp = data.message;
            console.log(otp);
            this.otp.emit(otp);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.showError = true;
    }
  }
}
