import { url } from "inspector"
import styled from "styled-components"



export const WrapperItemCart = styled.div`
margin: 3px;
justify-content: space-between;
width: 293px;
height: 190px;
display: flex;
`
export const AtributeBloc = styled.div`
padding: 1rem;
`

export const ImageBloc = styled.div`
display: flex;
align-items: center;
padding-top: 24px;
padding-bottom: 24px;
`

export const ItemActions = styled.div`
display: flex;
flex-direction: column;
margin-right: 24px;
`
export const QuantityProduct = styled.div`
height: 142px;
display: flex;
align-items: center;
justify-content: center;
font-size: 22px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 160%;
color: #1D1F22;
`
export const ButtonQuantity = styled.button`
width: 24px;
height: 24px;
background: #FFFFFF;
font-size: 24px;
color: #1D1F22;
cursor: pointer;
`
export const Images = styled.div`
display: flex;
align-content: center;
width: 121px;
height: 190px;
background-size: cover;
background-image: ${(props) => `url(${props.theme.gallery})`};
`

export const Title = styled.div`
width: 136px;
height: 52px;
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 160%;
display: flex;
align-items: center;
color: #1D1F22;
text-transform: capitalize;
`

export const Price = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #1D1F22;
`

export const Text = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #1D1F22;
padding-top: 10px;
text-transform: uppercase;
`

export const Size = styled.div`
display: flex;
flex-direction: row;
text-transform: uppercase;
`

export const ButtonSize = styled.button`
width: 24px;
height: 24px;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;
margin-right: 8px;
display: flex;
justify-content: center;
align-items: center;
background: #FFFFFF;
text-transform: uppercase;
cursor: pointer;
`

export const Color = styled.div`
display: flex;
flex-direction: row;
`

export const ColorSquare = styled.button`
width: 16px;
height: 16px;
background: ${props => props.theme.main};
margin-left: 8px;
cursor: pointer;
`

