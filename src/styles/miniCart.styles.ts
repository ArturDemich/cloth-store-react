import { Modal } from "react-overlays"
import styled from "styled-components"


export const ModalMiniCart = styled(Modal)`
  position: fixed;
  width: 293px;
  z-index: 1040;  
  background-color: white;
  padding: 16px;
  top: 78px;
  margin-left: 1043px;
`

export const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 78px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(57, 55, 72, 0.22);
  opacity: 0.5;
`

export const Wrapper = styled.div`
background: #FFFFFF;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ScrollWrap = styled.div`
overflow-y: auto;
scroll-behavior: smooth;
min-height: auto;
max-height: 420px;
::-webkit-scrollbar {
  width: 4px;  
}
::-webkit-scrollbar-track {
  background: #FFFFFF;  
  border-radius: 4px;  
}
::-webkit-scrollbar-thumb {
  background: #9e9e9e;
  border-radius: 4px;  
}
`

export const Title = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 25.6px;
text-transform: capitalize;
color: #1D1F22;
display: flex;
align-self: start;
`

export const TextQuantity = styled.span`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 25.6px;
margin-left: 5px;
text-transform: none;
`

export const Button = styled.button`
display: flex;
justify-content: center;
padding: 15px 2px;
width: 140px;
height: 43px;
background: ${props => props.theme.background};
border: ${props => props.theme.border};
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 120%;
color: ${props => props.theme.color};
text-transform: uppercase;
cursor: pointer;
`
Button.defaultProps = {
  theme:{
    background: "#FFFFFF",
    color: "#1D1F22",
    border: "1px solid #1D1F22",
  }
}
export const theme = {
  background: "#5ECE7B;", 
  color: "#FFFFFF", 
  border: "0",
}


export const TextStrong = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
color: #1D1F22;
padding-top: 1rem;
text-transform: capitalize;
`


export const Infoblock = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 3px;
margin-bottom: 32px;
`
export const ButtonBlock = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 12px;
`

