import styled from "styled-components"

export const link =  {
  textDecorationLine: "none",
  marginRight: "1rem",
  color: "#000",
  fontWeight: "400",
  padding: "0px 7px",
}

export const Header = styled.div`
display: flex;
background-color: #FFFFFF;
height: 80px;
margin-bottom: 1rem;
justify-content: space-between;
width: auto;
align-items: center;
padding-left: 100px;
padding-right: 100px;
`

export const NavigationBar = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
height: 56px;
.active{
  color: #5ECE7B !important;
  border-bottom: 3px solid #5ECE7B;
  font-weight: 600 !important;
  
}
`


export const Button = styled.button`  
  position: relative;
  display: block;
  padding: 16px 0;
  font-family: 'Raleway';
  font-weight: inherit;
  font-size: 16px;
  background-color: #FFFFFF;
  border: #FFFFFF; 
  text-transform: uppercase;
  color: inherit;
  padding-top: 20px;
  cursor: pointer;

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
`

export const ImageCart = styled.div`
display: flex;
align-content: center;
width: 21px;
height: 20px;
background-repeat: no-repeat;
background-size: 20px;
background-image: ${(props) => `url(${props.theme.gallery})`};
cursor: pointer;
`
export const BadgeCart = styled.div`
background: #1D1F22;
border-radius: 60px;
width: 20px;
height: 20px;
color: #FFFFFF;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
display: flex;
justify-content: center;
text-transform: uppercase;
position: absolute;
top: 20px;
margin-left: 14px;
`

