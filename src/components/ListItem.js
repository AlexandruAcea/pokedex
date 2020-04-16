import React from 'react'
import {useDispatch} from 'react-redux'

import {selectPokemon} from '../redux/actions'

import styled from 'styled-components'

const ListItem = ({title, coverImage, ...pokemon}) => {

    const dispatch = useDispatch();

    const viewPokemon = () => {
        dispatch(selectPokemon(pokemon))
    }
    
    return (
        <Wrapper onClick={() => viewPokemon()}>
            <Image src={coverImage}></Image>
            <Title>
               {title}
            </Title>
        </Wrapper>
    )
}

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;
  
    const Image = styled.img`
        src: ${props => props.coverImage};
    `;
  
    const Wrapper = styled.section`
        background: papayawhip;
        border-radius: 10px;
        padding-bottom: 15px;
        padding-left: 10px;
        padding-right: 10px;
    `;

export default ListItem
