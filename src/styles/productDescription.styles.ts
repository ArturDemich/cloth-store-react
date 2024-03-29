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
width: 80px;
height: 80px;
background-repeat: no-repeat;
background-position-x: center;
background-size: contain;
background-image: ${(props) => `url(${props.theme.gallery})`}
`
export const MainImage = styled.div`
margin-right: 8rem;
width: 610px;
height: 511px;
background-repeat: no-repeat;
background-position-x: center;
background-size: contain;
background-image: ${(props) => `url(${props.theme.gallery})`};
`

export const Action = styled.div`
width: 292px;
height: 595px;
left: 929px;
top: 160px;
`

export const BrandName = styled.div`
width: 292px;
height: 27px;
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

export const ProductName = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
text-transform: capitalize;
margin-top: 16px;
margin-bottom: 33px;
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
border-color: #5ECE7B;
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
margin-top: 8px;
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
background: ${props => props.theme.background};
color: ${props => props.theme.color};
text-transform: uppercase;
cursor: pointer;
`
ButtonSize.defaultProps = {    
    theme: {
        background: "#FFFFFF",
        color: "#1D1F22",
    }
}
export const buttonSize =  {    
        background: "#1D1F22", 
        color: "#FFFFFF"    
}


export const Color = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
`

export const ColorSquare = styled.button`
width: 32px;
height: 32px;
background: ${props => props.theme.main};
margin-top: 2px;
margin-right: 8px;
cursor: pointer;
border: ${props => props.theme.border};
`
ColorSquare.defaultProps = {
    theme:{
        border: "none"
    }
}
export const colorSquare =  {    
    border: "3px solid #5ECE7B"   
}

export const PriceWrap = styled.div`
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

export const AttributeSizeWrap = styled.div`
margin-bottom: 14px;
`

export const AttributeCopacityWrap = styled.div`
margin-bottom: 14px;
`

export const AttributeColorWrap = styled.div`
margin-bottom: 28px;
`