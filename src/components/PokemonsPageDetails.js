import React from 'react'

import { map, isEmpty } from 'lodash'
import ListItem from '../components/ListItem'
import Background from '../assets/background.png';
import { MainWrapper, BackgroundImage, Grid } from '../styles/common'

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
        <MainWrapper>
            <Grid>
                {renderList()}
            </Grid>
            <BackgroundImage image={Background}/>
        </MainWrapper>
    )
}

export default (PokemonsPageDetails)
