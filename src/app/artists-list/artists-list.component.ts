import {Component, OnInit} from '@angular/core';
import {RatingListService} from '../services/rating-list.service';
import {BehaviorSubject} from 'rxjs';
import {ListItem} from '../models/list-item.model';
import {ListItemOutput} from '../models/list-item-output.model';
import {keyframes, query, stagger, style, transition, trigger, animate} from '@angular/animations';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss'],
  animations: [

    trigger('listAnimation', [

      transition('false <=> true', [

        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1})
          ]))
        ]), { optional: true })

      ])

    ])

  ]
})
export class ArtistsListComponent implements OnInit {

  artistsList: BehaviorSubject<Array<ListItem>> = new BehaviorSubject([]);
  rateInProgress = false;
  randomRatingInterval: any;
  animationTrigger = false;
  btnText: string;

  constructor(private ratingListService: RatingListService) { }

  ngOnInit(): void {
    this.btnText = 'Start Rate';
    this.ratingListService.getArtistsList().subscribe(res => {
      this.artistsList.next(this.sortListByRating(res.body));
      this.setAnimationTrigger();
      if (this.artistsList.value.length > 0) {
        this.applyBackgroundColor(0);
      }
    });
  }

  sortListByRating(list: ListItem[]): ListItem[] {
    return list.sort((i1, i2) => (i2.rating - i1.rating));
  }

  applyBackgroundColor(index: number): void {
    const element = document.getElementById('artistsList');
    element.style.backgroundColor = this.hex2rgba(this.artistsList.value[index].color, 0.35);
  }

  private hex2rgba(hex, alpha = 1): string {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }

  getRating(rating: ListItemOutput): void {
    const list = this.artistsList.value;
    list[rating.artistIndex].rating = rating.rating;
    this.artistsList.next(this.sortListByRating(list));
    this.setAnimationTrigger();
  }

  toggleRandomRating(): void {
    if (this.rateInProgress) {
      this.rateInProgress = false;
      clearInterval(this.randomRatingInterval);
      this.btnText = 'Start Rate';
    } else {
      this.rateInProgress = true;
      this.randomRatingInterval = setInterval(() => {
        this.getRandomRating();
      }, 3000);
      this.btnText = 'Stop Rate';
    }
  }

  getRandomRating(): void {
    const list = this.artistsList.value;
    list.forEach((item) =>  {
      item.rating = this.getRandomIntInclusive();
    });
    this.artistsList.next(this.sortListByRating(list));
    this.setAnimationTrigger();
  }

  getRandomIntInclusive(): number {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setAnimationTrigger(): void {
    this.animationTrigger = !this.animationTrigger;
  }

}
