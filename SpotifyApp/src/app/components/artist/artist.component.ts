import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {}
  loadingArtist: boolean
  topTracks: any[]

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true
    this.router.params.subscribe(params => {
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])
    })
  }

  getArtist(id: string) {

    this.spotify.getArtist(id)
      .subscribe((data: any) => {
        this.loadingArtist = false
        this.artist = data
      })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((topTracks: any) => {
        this.topTracks = topTracks
      })
  }
}
