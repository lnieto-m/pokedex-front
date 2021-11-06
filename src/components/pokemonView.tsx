import { useEffect, useState } from "react";
import { Pokemon, PokemonClient, PokemonSprites } from 'pokenode-ts';

export interface ViewProps {
    name: string;
} 

function PokemonView(props: ViewProps) {

    const [loading, setLoading] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

    const retrievePokemonData = async () => {
        const api = new PokemonClient();

        setLoading(true);
        const selectedPokemonData = await api.getPokemonByName(props.name);
        setSelectedPokemon(selectedPokemonData);
        console.log(selectedPokemon);
        setLoading(false);
    };

    useEffect(() => {
        console.log('update');
        retrievePokemonData();
    }, [props]);

    return (
        <div>
            {loading ? (
                <div> loadingue </div>
            ) : (
                <div> {selectedPokemon!.name} </div>
            )}
        </div>
    )
}

export default PokemonView;