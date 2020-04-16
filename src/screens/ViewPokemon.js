import React, { useEffect } from 'react'
import {useSelector, connect} from 'react-redux'
import {useParams} from 'react-router-dom'

import { get, isEmpty, map } from 'lodash'

import { getPokemonById, selectPokemon } from '../redux/actions'

import { MainWrapper, BackgroundImage} from '../components/PokemonsPageDetails'
import { Card, Wrapper, ImagesWrapper, Title, AbilitiesWrapper, Image, PokemonType, TypesWrapper } from '../styles/common'

import Background from '../assets/background.png';

const ViewPokemon = ({getPokemonById, selectPokemon}) => {
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
        return map(selectedPokemon.sprites, (sprite, key) => {
            if(sprite)
                return <Image src={sprite} key={key}/>
        })
    }

    const renderTypes = () => {
        return map(selectedPokemon.types, (type, key) => {
            if(type)
                return <PokemonType key={key}>{type.type.name}</PokemonType>
        })
    }

    const renderAbilities = () => {
        return map(selectedPokemon.abilities, (ability, key) => {
            if(ability)
                return <PokemonType key={key}>{ability.ability.name}</PokemonType>
        })
    }
    
    return (
        <MainWrapper>
            {selectedPokemon && 
            (<Card>
                <Wrapper>
                    <ImagesWrapper>{renderSprites()}</ImagesWrapper>
                    <Title>Hi, I'm {selectedPokemon.name}</Title>

                    <TypesWrapper><Title>Types:</Title>{renderTypes()}</TypesWrapper>
                    <Title>Height: {selectedPokemon.height}</Title>
                    <Title>Weight: {selectedPokemon.weight}</Title>

                    <AbilitiesWrapper>
                        <Title>My abilities are:</Title>
                        <TypesWrapper>{renderAbilities()}</TypesWrapper>
                    </AbilitiesWrapper>

                </Wrapper>
            </Card>)
}            <BackgroundImage image={Background}/>
        </MainWrapper>
    )
}    

function mapDispatchToProps(dispatch) {
    return({
        getPokemonById: (id) => {dispatch(getPokemonById(id))},
        selectPokemon: (pokemon) => {dispatch(selectPokemon(pokemon))}
    })
}

export default connect(null, mapDispatchToProps)(ViewPokemon)
