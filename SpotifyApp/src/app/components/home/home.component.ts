import { Component } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = []

  constructor(private Spotify: SpotifyService) {
    this.Spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data.albums.items
      })
  }

}
