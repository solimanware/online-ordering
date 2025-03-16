import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CodeInputModule } from 'angular-code-input';
import { BehaviorSubject } from 'rxjs';
import { UserResponse, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  standalone: true,
  imports: [CodeInputModule],
})
export class OtpComponent implements OnInit {
  phoneNumber$ = this.userService.userPhoneNumber$;
  otp$ = new BehaviorSubject<string>('');
  @Output() result: EventEmitter<UserResponse> = new EventEmitter();
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onCodeChanged(code: string) {
    this.otp$.next(code);
  }

  onCodeCompleted(code: string) {
    this.verifyOTP(this.phoneNumber$.value, code);
  }

  verifyOTP(phoneNumber: string, otp: string) {
    console.log(phoneNumber, otp);
    this.userService.verifyOTP(phoneNumber, otp).subscribe({
      next: (res) => {
        console.log(res);
        this.result.emit(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
