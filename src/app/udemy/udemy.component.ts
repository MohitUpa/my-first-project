import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css'],
  providers: [AccountService]
})
export class UdemyComponent implements OnInit {



  // Derver Example
  username = '';
  log = [];

  showScreate = false;
  onToggleDetail() {
    this.showScreate = !this.showScreate;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  serverElements = [{
    type: 'server',
    name: 'TestServer',
    content: 'Test is best for development'
  }];


  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


  // Directives
  numbers = [1, 2, 3, 4, 5];
  evenNo = [2, 4];
  oddNo = [1, 3, 5];
  onlyOdd = false;
  value = 10;

  // services
  accounts : {name:string, status: string}[] = [];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
