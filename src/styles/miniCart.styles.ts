import { Modal } from "react-overlays"
import styled from "styled-components"


export const ModalMiniCart = styled(Modal)`
  position: fixed;
  width: 293px;
  //height: 645px;
  z-index: 1040;  
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 16px;
  top: 78px;
  left: 1050px;
`

export const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
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
text-transform: capitalize;
color: #1D1F22;
display: flex;
align-self: start;
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