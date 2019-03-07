import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'circular-menu';
  public loremIpsumDolor = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  public list$: Observable<any>;
  public isMinimized: boolean = false;
  public statusContainer: string = "";
  public state: string = 'default';

  private myObserver = {
    next: x => console.log('Observer got a next value: ' + JSON.stringify(x)),
    error: err => console.error('Observer got an error: ' + JSON.stringify(err)),
    complete: () => console.log('Observer got a complete notification'),
  };

  private infoStore: any = [
    { id: 'Title 1', info: this.loremIpsumDolor, image: '../../assets/img/image1.png', selected: false },
    { id: 'Title 2', info: this.loremIpsumDolor, image: '../../assets/img/image2.png', selected: false },
    { id: 'Title 3', info: this.loremIpsumDolor, image: '../../assets/img/image3.png', selected: false },
    { id: 'Title 4', info: this.loremIpsumDolor, image: '../../assets/img/image4.png', selected: false },
    { id: 'Title 5', info: this.loremIpsumDolor, image: '../../assets/img/image5.png', selected: false },
    { id: 'Title 6', info: this.loremIpsumDolor, image: '../../assets/img/image6.png', selected: false }];
  private infoTable;
  
  constructor() {
    this.infoTable = this.infoStore;
    this.list$ = new BehaviorSubject<any>(this.infoTable).asObservable();
    this.list$.subscribe(this.myObserver);
  }

  public setInterchangeableMinMaxClass(i: any) {
    this.isMinimized = !this.isMinimized;
    this.infoStore[i].selected = !this.infoStore[i].selected;
  }

}
