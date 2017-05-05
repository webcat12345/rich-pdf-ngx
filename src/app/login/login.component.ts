import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  ngOnInit() {
  }

}
