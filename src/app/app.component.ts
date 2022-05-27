import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  title = "pokemon-app";
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemoId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemoId
    );
    const index: number = +pokemoId;
    if (pokemon) {
      console.log(`Vous avez selectionné le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log("pokemon demandé n'existe pas.");
      this.pokemonSelected = pokemon;
    }
  }
}
