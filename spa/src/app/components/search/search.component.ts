import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = []
  query: string;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.query = params['query']
      this.heroes = this._heroesService.buscarHeroe(params['query'])
    })
  }

}
