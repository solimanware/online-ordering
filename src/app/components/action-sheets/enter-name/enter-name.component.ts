import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class EnterNameComponent implements OnInit {
  name$ = this.userService.userName$;
  @Output() nameChange = new EventEmitter<string>();
  constructor(private userService: UserService) {}

  ngOnInit() {}
  continue() {
    this.userService.userName$.next(this.name$.value);
    this.nameChange.emit(this.name$.value);
  }
}
