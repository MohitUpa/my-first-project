import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {


  constructor( private route: ActivatedRoute, private router: Router, private userdatainfo: UserDataService, private regis: RegisService) { }


  ngOnInit(): void {
  }



}
