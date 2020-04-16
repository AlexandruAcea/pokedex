import React from 'react'
import styled from 'styled-components'

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

const StyledInput = styled.input`
  width: 45%;
  height: 30px;
  font-size: 14px;
  padding: 6px 8px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 29px -6px rgba(0,0,0,0.5);
  position: fixed;
  margin: 0 auto;
  left:0;
  right:0;
  margin-top: 60px;
`

export default SearchBar
