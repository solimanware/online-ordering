import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { phone } from 'phone';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PhoneVerificationComponent {
  phoneNumber$ = this.userService.userPhoneNumber$;
  @Output() otp: EventEmitter<number> = new EventEmitter();

  isPhoneValid = new BehaviorSubject<boolean>(true);
  showError = false;

  constructor(private userService: UserService) {
    this.setupPhoneValidation();
  }

  private setupPhoneValidation() {
    this.phoneNumber$.pipe(debounceTime(1000)).subscribe((phoneNumber) => {
      if (phoneNumber) {
        const phoneNumberFormatted = phone(phoneNumber, { country: 'EG' });
        this.isPhoneValid.next(phoneNumberFormatted.isValid);
        this.showError = !phoneNumberFormatted.isValid;
        console.log(phoneNumberFormatted);
      }
    });
  }

  validatePhoneNumber(phoneNumber: string) {
    this.phoneNumber$.next(phoneNumber);
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
