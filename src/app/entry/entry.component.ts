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
  public editing: boolean;
  public active: boolean = true;
  @ViewChild('entryForm') entryForm: ElementRef;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    if (localStorage['currentUser'] != null) {
      let userInfo = localStorage['currentUser'];
      let idStartIdx = userInfo.indexOf("id") + 4;
      let idEndIdx = userInfo.indexOf(",", idStartIdx);
      this.loggedIn = userInfo.substring(idStartIdx, idEndIdx);
    }
  }

  toggleEditing(): void {
    this.editing = !this.editing;
  }

  saveEdits(): void {
    this.toggleEditing();
  }

  deleteEntry(): void {
    console.log(this.entry.id);
    this.entryService.deleteEntry(this.entry.id).subscribe(res => {
      console.log(res);
      console.log(this.entryForm.nativeElement)
      this.active = false;
    }, err => {
      console.log(err);
    });
  }

}
