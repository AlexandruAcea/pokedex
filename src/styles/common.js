import styled from 'styled-components'

export const Card = styled.section`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: papayawhip;
    border-radius: 10px;
    position: absolute;
    top: 50px;
    bottom: 50px;
`;

export const Wrapper = styled.section``;

export const ImagesWrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   row-gap: 10px;
   column-gap: 10px;
   width: 100%;
   margin-bottom: 30px;
`;

export const TypesWrapper = styled.section`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
   margin-top: 30px;
`;

export const AbilitiesWrapper = styled.section`
   margin-top: 30px;
`;

export const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
`;

export const Image = styled.img`
    object-fit: contain;
    transform: scale(1.2);
    margin-left: 5px;
    margin-right: 5px;
    justify-self: center;
`;

export const PokemonType = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    background: palevioletred;
    padding: 5px 10px 5px 10px;
    margin: 0 5px 0 5px;
    border-radius: 5px;
`;