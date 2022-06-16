import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
background-color: #FFFFFF;
height: 80px;
margin-bottom: 1rem;
justify-content: space-between;
width: auto;
align-items: center;
`

export const Navigation = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
height: 56px;
padding-left: 4rem;
`

export const Button = styled.button`
text-transform: uppercase;
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
margin-right: 1rem;
background-color: #FFFFFF;
border: #FFFFFF;
`

export const Actions = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 22px;

width: 204px;
height: 40px;
right: 101px;
top: 23px;
padding-right: 5rem;
`