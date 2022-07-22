import styled from "styled-components"



export const Wrapper = styled.div`
font-family: 'Raleway';
font-style: normal;
display: flex;
flex-direction: row;
padding-left: 4rem;
padding-top: 2rem;
`
export const Images = styled.div`
flex-basis: 80px;
margin-right: 3rem;
`
export const Img = styled.div`
margin-bottom: 2rem;
cursor: pointer;

`
export const MainImage = styled.div`
margin-right: 8rem;
width: 610px;
height: 511px;
`

export const Action = styled.div`
width: 292px;
height: 595px;
left: 929px;
top: 160px;
`

export const Title = styled.div`
width: 292px;
height: 27px;
left: 929px;
top: 160px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;
display: flex;
align-items: center;
color: #1D1F22;
text-transform: capitalize;
`

export const TextStrong = styled.div`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
color: #1D1F22;
padding-top: 10px;
text-transform: uppercase;
`

export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 32px;
width: 292px;
height: 52px;
left: 929px;
top: 560px;
background: #5ECE7B;
border: 0;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
color: #FFFFFF;
text-transform: uppercase;
margin-top: 2rem;
cursor: pointer;
`

export const Size = styled.div`
display: flex;
flex-direction: row;
text-transform: uppercase;
`

export const ButtonSize = styled.button`
width: 63px;
height: 45px;
border: 1px solid #1D1F22;
box-sizing: border-box;
margin-right: 1rem;
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
width: 32px;
height: 32px;
background: ${props => props.theme.main};
margin: 2px;
cursor: pointer;
`

export const Price = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 18px;
color: #1D1F22;
`

export const Description = styled.div`
width: 292px;
height: 103px;
left: calc(50% - 292px/2 + 355px);
bottom: 178px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.96%;
color: #1D1F22;
margin-top: 2rem;
`

