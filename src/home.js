import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemonData: [] };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                let pokemons = data.results.map( pokemon => {
                    return (
                        <div key={pokemon.name}>
                            <a href={pokemon.url}>
                                {pokemon.name}
                            </a>
                        </div>
                    )
                })
                this.setState({ pokemonData: pokemons })
                console.log(data.results) // Prints result from `response.json()` in getRequest
            })
            .catch(error => console.error(error))
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {this.state.pokemonData}
            </div>
        );
    }
}

export default Home;