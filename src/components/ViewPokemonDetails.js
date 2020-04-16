import React, { useEffect } from 'react'
import {useSelector, connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

import { get, isEmpty, map } from 'lodash'

import { getPokemonById, selectPokemon } from '../redux/actions'

import { MainWrapper, BackgroundImage} from '../components/PokemonsPageDetails'
import { Image } from '../components/ListItem'

import Background from '../assets/background.png';

const ViewPokemonDetails = ({getPokemonById, selectPokemon}) => {
    let { id } = useParams();

    const pokemonList     = get(useSelector((state) => state.pokemons), 'pokemons')
    const selectedPokemon = get(useSelector((state) => state.pokemons), 'selectedPokemon')

    useEffect(() => {
        if(!selectedPokemon) {
            getPokemonById(id)
        }
      }, []);

    if(!selectedPokemon && !isEmpty(pokemonList)) {
        selectPokemon(pokemonList[0])
    }

    const renderSprites = () => {
        return map(selectedPokemon.sprites, (sprite) => {
            console.log(sprite)
            return <Image coverImage={sprite}></Image>
        })
    }
    
    return (
        <MainWrapper>
            {selectedPokemon && 
            (<Card>
                <Title>{selectedPokemon.name}</Title>
                {renderSprites()}
            </Card>)
}            <BackgroundImage image={Background}/>
        </MainWrapper>
    )
}    

export const Card = styled.section`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: papayawhip;
    border-radius: 10px;
    position: absolute;
    top: 50px;
    bottom: 50px;
`;

const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
`;


function mapDispatchToProps(dispatch) {
    return({
        getPokemonById: (id) => {dispatch(getPokemonById(id))},
        selectPokemon: (pokemon) => {dispatch(selectPokemon(pokemon))}
    })
}

export default connect(null, mapDispatchToProps)(ViewPokemonDetails)
