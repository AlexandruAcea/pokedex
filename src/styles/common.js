import styled from 'styled-components'

export const Grid = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 800px;
        row-gap: 20px;
        column-gap: 20px;
        padding-top: 150px
`;

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
   margin-top: 10px;
`;

export const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListItemWrapper = styled.section`
        background: papayawhip;
        border-radius: 10px;
        padding-bottom: 15px;
        padding-left: 10px;
        padding-right: 10px;
    `;

export const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
`;

export const SmallerTitle = styled.h1`
    font-size: 1.5em;
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

export const ItemImage = styled.img`
    src: ${props => props.coverImage};
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

export const BackgroundImage = styled.section`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        z-index: -10;
        background-image: url(${props => props.image});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    `;

export const StyledInput = styled.input`
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

export const List = styled.ul`

`

export const ListItem = styled.li`
    list-style-type: none;
    margin: 5px 0 5px 0px;
`