import React from 'react'
import {useDispatch} from 'react-redux'

import {selectPokemon} from '../redux/actions'
import {SmallerTitle, ListItemWrapper, ItemImage} from '../styles/common'

const ListItem = ({title, coverImage, ...pokemon}) => {

    const dispatch = useDispatch();

    const viewPokemon = () => {
        dispatch(selectPokemon(pokemon))
    }
    
    return (
        <ListItemWrapper onClick={() => viewPokemon()}>
            <ItemImage src={coverImage}></ItemImage>
            <SmallerTitle>
               {title}
            </SmallerTitle>
        </ListItemWrapper>
    )
}
  
export default ListItem
