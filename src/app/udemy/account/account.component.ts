import { Component, EventEmitter, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private logService: LogService, private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.logService.logStatusChange(status);
  }
}
