import React from 'react'
import styled from 'styled-components'

import { map, isEmpty } from 'lodash'

import ListItem from '../components/ListItem'

import Background from '../assets/background.png';

const PokemonsPageDetails = ({ pokemonList }) => {

    const renderList = () => {
        if(isEmpty(pokemonList)) {
            return
        }

        return map(pokemonList,(pokemon, key) => {
            return <ListItem key={key} title={pokemon.name} coverImage={pokemon.sprites.front_default} {...pokemon}></ListItem>
        })
    }

    return (
        <div>
            <Grid>
                {renderList()}
            </Grid>
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

const Grid = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    `;

export default (PokemonsPageDetails)
