import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  showTable: boolean = true;
  id: number = 0;
  name: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach(result => {
        this.dataService
          .getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
  }

  showPokemon(id: number, name: string) {
    this.showTable = false;
    this.id = id;
    this.name = name;
  }
}
