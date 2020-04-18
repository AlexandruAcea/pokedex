import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import { get, isEmpty, map } from 'lodash'
import { getPokemonById, selectPokemon } from '../redux/actions'
import { BackgroundImage, MainWrapper, Card, Wrapper, ImagesWrapper, Title, Image, PokemonType, TypesWrapper, ListItem, List } from '../styles/common'

import Background from '../assets/background.png';

const ViewPokemon = () => {
    let { id } = useParams();

    const pokemonList     = get(useSelector((state) => state.pokemons), 'pokemons')
    const selectedPokemon = get(useSelector((state) => state.pokemons), 'selectedPokemon')
    const dispatch = useDispatch();

    useEffect(() => {
        if(!selectedPokemon) {
            dispatch(getPokemonById(id))
        }
      }, []);

    if(!selectedPokemon && !isEmpty(pokemonList)) {
        dispatch(selectPokemon(pokemonList[0]))
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
                    <List>
                        <ListItem><Title>Height: {selectedPokemon.height}</Title></ListItem>
                        <ListItem><Title>Weight: {selectedPokemon.weight}</Title></ListItem>
                        <ListItem><Title>My abilities are:</Title></ListItem>
                        <ListItem>
                            <TypesWrapper>{renderAbilities()}</TypesWrapper>
                        </ListItem>
                    </List>
                </Wrapper>
            </Card>)
}            <BackgroundImage image={Background}/>
        </MainWrapper>
    )
}    

export default ViewPokemon
