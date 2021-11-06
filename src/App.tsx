import { APIResource, NamedAPIResource, NamedAPIResourceList, Pokemon, PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import './App.css';
import PokedexView from './components/pokedexView';

function App() {

	let loadingList: NamedAPIResource[] | APIResource[] = [];
	const [pokemonList, setPokemonList] = useState(loadingList);
	const [loading, setLoading] = useState(true);
	
	const getPokemonList = async () => {
		const api = new PokemonClient();

		const pokemonListData = await api.listPokemons(0, 151);
		loadingList = pokemonListData.results;
		setPokemonList(loadingList);
		setLoading(false);
	}

	useEffect(() => {
		getPokemonList();
	}, [])

	return (
		<div className="App">
			<div>
				{loading ? (
					<div> loading... </div>
				) : (
					<PokedexView pokemonList={pokemonList}/>
				)}
			</div>
		</div>
	);
}

export default App;
