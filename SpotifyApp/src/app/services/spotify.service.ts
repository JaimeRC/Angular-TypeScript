import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACXB9RRH5IICWgXL-y-muolI6eHUNH6wWQFVRoDWGXE8qpQL0sMVWXGN0JuoorHc80pZ-oGf31fIee2_s'
    })

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })

  }
}
