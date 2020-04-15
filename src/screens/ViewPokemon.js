import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

import { getPokemonById, selectPokemon } from '../redux/actions'
import {get} from 'lodash'

import Background from '../assets/background.png';

const ViewPokemon = () => {
    let { id } = useParams();

    const dispatch = useDispatch()

    const selectedPokemon = useSelector((state) => state.pokemons.selectedPokemon)
    const pokemonList = useSelector((state) => state.pokemons.pokemons)

    if(!selectedPokemon) {
        dispatch(getPokemonById(id))
        dispatch(selectPokemon(pokemonList[0]))
    }

    return (
        <div>
            <BackgroundImage/>
        </div>
    )
}

const BackgroundImage = styled.section`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        z-index: -10;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    `;
    
export default ViewPokemon
