import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: number

  @Output() hereoIndex: EventEmitter<number>

  constructor(private router: Router) { 
    this.hereoIndex = new EventEmitter()
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index])
   //this.hereoIndex.emit(this.index) //Para usar el eventEmitter
  }

}
