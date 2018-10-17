import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url:string = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({ 'Authorization': 'Bearer BQCXuoSp3AxpB-VfdohqmBqjBJRWY8Y1Ag1JBJAInzTpJM3qclKMZv89E3iq5H1zGWL5_PSMpkVY9dzdFDI' })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items))
  }

  getArtirsts(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items))
  }
}
