import styled from "styled-components"
import circleCart from "../styles/icon/circleCart.svg"


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 16px;
width: 386px;
height: 444px;
background: #FFFFFF;
margin-top: 3rem;
box-shadow: ${props => props.theme.main} ;

`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 354px;
height: 58px;
padding-top: 24px;
`
export const Title = styled.div`
width: 354px;
height: 29px;
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 160%;
display: flex;
align-items: center;
color: #1D1F22;
text-transform: capitalize;
`

export const Price = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 58px;
height: 29px;
color: #1D1F22;
`

export const ImageCard = styled.div`
display: flex;
align-content: center;
width: 356px;
height: 338px;
background-size: cover;
background-image: ${(props) => `url(${props.theme.gallery})`};
`

export const StockOut = styled.div`
width: 386px;
height: 444px;
opacity: 0.5;
color: #8D8F9A;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 160%;
text-transform: uppercase;
background: #FFFFFF;
`
export const CartIcon = styled.div`
background-image: url(${circleCart});
width: 52px;
height: 52px;
align-self: end;
position: absolute;
margin-bottom: 58px;
margin-right: 35px;

`