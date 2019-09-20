import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry/entry-service/entry.service';

@Component({
  selector: 'smackboard',
  templateUrl: './smackboard.component.html',
  styleUrls: ['./smackboard.component.css']
})
export class SmackboardComponent implements OnInit {
  public entries: Entry[];
  public loggedIn: number;
  public newEntry: Entry = new Entry;
  @ViewChild('inputTitle') inputTitle: ElementRef;
  @ViewChild('inputContent') inputContent: ElementRef;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.updateLoggedIn();
    this.getEntries();
  }

  updateLoggedIn(): void {
    if (localStorage['currentUser'] != null) {
      let userInfo = localStorage['currentUser'];
      let idStartIdx = userInfo.indexOf("id") + 4;
      let idEndIdx = userInfo.indexOf(",", idStartIdx);
      this.loggedIn = userInfo.substring(idStartIdx, idEndIdx);
    } else {
      this.loggedIn = null;
    }
  }

  getEntries(): void {
    this.entryService.getAllEntries().subscribe(res => {
      this.entries = res.sort((a,b) =>
        (a['id'] < b['id']) ? 1 : ((b['id'] < a['id']) ? -1 : 0));
      console.log(this.entries);
    })
  }

  onSubmit(): void {
    this.newEntry['userId'] = +this.loggedIn;
    this.entryService.createEntry(this.newEntry).subscribe(res => {
      this.inputTitle.nativeElement.value = '';
      this.inputContent.nativeElement.value = '';
      this.getEntries();
    }, err => {
      console.log(err);
    })
  }

}
