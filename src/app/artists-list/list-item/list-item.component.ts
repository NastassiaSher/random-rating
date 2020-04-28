import {AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItem} from '../../models/list-item.model';
import {ListItemOutput} from '../../models/list-item-output.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, AfterViewInit, DoCheck {

  @Input()
  listItem: ListItem;
  @Input()
  itemIndex: number;
  @Output() rateToEmit = new EventEmitter<ListItemOutput>();

  starsArr = [];
  previousRating: number;

  constructor() { }

  ngOnInit(): void {
    this.populateStars();
  }

  ngAfterViewInit(): void {
    this.applyIndividualColour();
  }

  ngDoCheck() {
    if (this.previousRating !== this.listItem.rating) {
      this.populateStars();
    }
  }

  populateStars(): void {
    this.starsArr = [];
    for (let i = 0; i < 10; i++) {
      if (i < this.listItem.rating) {
        this.starsArr.push('star');
      } else {
        this.starsArr.push('star_border');
      }
    }

  }

  private applyIndividualColour(): void {
    const nameText = document.getElementById('itemName' + this.itemIndex);
    const itemInfo = document.getElementById('itemInfo' + this.itemIndex);
    const itemStars = document.getElementById('itemStars' + this.itemIndex);
    nameText.style.color = this.listItem.color;
    itemInfo.style.borderRight = '9px solid ' + this.listItem.color;
    itemStars.style.color = this.listItem.color;
  }

  rateAnArtist(ind) {
    this.rateToEmit.emit({rating: ind + 1, artistIndex: this.itemIndex});
  }

}
