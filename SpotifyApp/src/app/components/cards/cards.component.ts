import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = []

  constructor(private router: Router) { }

  showArtist(item: any) {
    let artistId: string = item.id

    if (item.type === 'artist')
      artistId = item.id
    else
      artistId = item.artists[0].id

    this.router.navigate(['/artist', artistId])
  }
}
