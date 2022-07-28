import styled from "styled-components"


export const Dropdown = styled.div`

`

export const DropdownButton = styled.div`
display: flex;
cursor: pointer;
`

export const LabelCurrencies = styled.div`
height: 30px;
width: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
`

export const Arrow = styled.div`
height: 5px;
width: 10px;
display: flex;
align-self: center;
background-size: contain;
background-image: ${(props) => `url(${props.theme.arrow})`};
`

export const DropdownContetn = styled.div`
width: 114px;
height: auto;
padding: 17px 0px;
background: #FFFFFF;
box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
margin-top: 10px;
position: absolute;

`

export const DropdownItem = styled.div`
height: 45px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 20%;
color: #1D1F22;
transition: all 0.2s;
cursor: pointer;
&:hover {
    background-color: #f4f4f4;
  }

`