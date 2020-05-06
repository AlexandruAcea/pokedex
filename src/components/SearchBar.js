import React from 'react'
import {StyledInput} from '../styles/common'

const SearchBar = ({onChange, value}) => {
    return (
        <StyledInput 
            type="text" 
            name="name" 
            placeholder="Search for pokemons"
            value={value}
            onChange={onChange}/>
    )
}

export default SearchBar
