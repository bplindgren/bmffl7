import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry/entry-service/entry.service';
import { User } from '../user';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  public loggedIn: number;
  public active: boolean = true;
  public editing: boolean = false;
  public showButtons: boolean = null;
  @ViewChild('entryForm') entryForm: ElementRef;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    if (localStorage['currentUser'] != null) {
      let userInfo = localStorage['currentUser'];
      let idStartIdx = userInfo.indexOf("id") + 4;
      let idEndIdx = userInfo.indexOf(",", idStartIdx);
      this.loggedIn = userInfo.substring(idStartIdx, idEndIdx);

      // Show Buttons
      this.showButtons = (this.loggedIn == this.entry.createdBy.id) ? true : false;
    }
  }

  toggleEditing(): void {
    this.editing = !this.editing;
  }

  editEntry(): void {
    delete this.entry.createdAt;
    delete this.entry.modifiedAt;
    delete this.entry.createdBy;
    this.entry['userId'] = +this.loggedIn;

    this.entryService.postEntry(this.entry).subscribe(res => {
      this.entry = res;
      console.log(this.loggedIn == this.entry.createdBy.id);
      this.toggleEditing();
    }, err => {
      console.log(err);
    })
  }

  deleteEntry(): void {
    console.log(this.entry.id);
    this.entryService.deleteEntry(this.entry.id).subscribe(res => {
      console.log("Entry deleted");
      this.active = false;
    }, err => {
      console.log(err);
    });
  }

}
