import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({ 'Authorization': 'Bearer BQD-paV0eqCTn3JFAmFKlugIiLzhv3MnEJ226eC7Zy043zrS8oU7sxnvJX6v-oygIcH_dhriY1r8BWfYKFE' })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items))
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items))
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map(data => data['tracks']))
  }
}
