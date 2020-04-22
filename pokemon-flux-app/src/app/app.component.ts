import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon-flux-app';
  listaPoken: Pokemon[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    var url = 'http://localhost:8080/pokemons'
    this.httpClient.get<object[]>(url).subscribe(
      data => {
        data.forEach(pk => {
          let obj = Object.assign(new Pokemon(), pk)
          this.listaPoken.push(obj)
        })
      }
    )

  }
}




