import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry/entry-service/entry.service';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() title: String;
  @Input() content: String;
  @Input() ownerId: number;
  public loggedIn: number;
  public editing: boolean;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    if (localStorage['currentUser'] != null) {
      let userInfo = localStorage['currentUser'];
      let idStartIdx = userInfo.indexOf("id") + 4;
      let idEndIdx = userInfo.indexOf(",", idStartIdx);
      this.loggedIn = userInfo.substring(idStartIdx, idEndIdx);
    }
    console.log(this.title, this.content, this.ownerId, this.loggedIn);
  }

  toggleEditing(): void {
    this.editing = !this.editing;
  }

}
