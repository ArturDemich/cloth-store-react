import styled from "styled-components"

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
`


export const Button = styled.button`
  text-decoration: none;
  position: relative;
  display: block;
  padding: 16px 0;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  margin-right: 1rem;
  background-color: #FFFFFF;
  border: #FFFFFF; 
  text-transform: uppercase;
  transition: color 0.1s, background-color 0.1s;
  color: #000;
  padding-top: 0;

:hover {
  color: #5ECE7B;
}
:focus, a:active {
  color: #5ECE7B;
}
::before {
  content: '';
  display: block;
  position: absolute;
  top: 130%;
  height: 2px;
  width: 110%;
  background-color: #5ECE7B;
  -webkit-transform-origin: center top;
          transform-origin: center top;
  -webkit-transform: scale(0, 1);
          transform: scale(0, 1);
  transition: color 0.1s, -webkit-transform 0.2s ease-out;
  transition: color 0.1s, transform 0.2s ease-out;
  transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}
:active::before {
  background-color: #5ECE7B;
}
:hover::before,
:focus::before {
  -webkit-transform-origin: center top;
          transform-origin: center top;
  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
}
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
width: 20px;
height: 20px;
background-size: cover;
background-image: ${(props) => `url(${props.theme.gallery})`};
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
top: 29px;
margin-left: 14px;
`