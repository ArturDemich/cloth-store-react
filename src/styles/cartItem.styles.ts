import { url } from "inspector"
import styled from "styled-components"



export const WrapperItemCart = styled.div`
border-bottom: 1px solid #E5E5E5;
margin: 3px;
justify-content: space-between;
height: auto;
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
height: 198px;
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
width: 45px;
height: 45px;
background: #FFFFFF;
font-size: 24px;
color: #1D1F22;
cursor: pointer;
`




export const Images = styled.div`
display: flex;
align-content: center;
width: 200px;
height: 288px;
background-size: cover;
background-image: ${(props) => `url(${props.theme.gallery})`};
`

export const LeftArrow = styled.div`
width: 24px;
height: 24px;
background: rgba(0, 0, 0, 0.73);
cursor: pointer;
align-self: end;
margin-left: 128px;
margin-bottom: 16px;
color: #FFFFFF;
text-align: center;
font-size: 20px;
`

export const RightArrow = styled.div`
width: 24px;
height: 24px;
background: rgba(0, 0, 0, 0.73);
cursor: pointer;
align-self: end;
margin-left: 8px;
margin-bottom: 16px;
color: #FFFFFF;
text-align: center;
font-size: 20px;

`