import { APIResource, NamedAPIResource } from "pokenode-ts";
import { useState } from "react";
import PokemonView from "./pokemonView";

interface PokedexProps {
    pokemonList: NamedAPIResource[] | APIResource[];
}

function PokedexView(props: PokedexProps) {

    const [searchValue, setSearchValue] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState("");

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div>
                {(props.pokemonList as NamedAPIResource[]).filter(value => value.name.includes(searchValue)).map((filteredValue, index) => (
                    <button key={index} onClick={(e) => {
                            setSelectedPokemon(filteredValue.name)
                            console.log(filteredValue, selectedPokemon);
                        }}>
                        {filteredValue.name}
                    </button>
                ))}
            </div>
            {selectedPokemon !== "" &&
                <PokemonView name={selectedPokemon}/>
            }
        </div>
    )
}

export default PokedexView;