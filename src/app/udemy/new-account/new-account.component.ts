import { Component, EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService]
})
export class NewAccountComponent {

  constructor(private logService: LogService, private accountService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccounts(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);
  }
}
