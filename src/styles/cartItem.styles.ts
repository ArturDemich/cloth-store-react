import styled from "styled-components"



export const WrapperItemCart = styled.div`
border-top: 1px solid #E5E5E5;
border-bottom: 1px solid #E5E5E5;
margin: 3px;
justify-content: space-between;
height: auto;
display: flex;
`

export const ImageBloc = styled.div`

`

export const AtributeBloc = styled.div`
padding: 1rem;
`

export const Image = styled.image`
height: 288px;
width: 200px;
src: ${props => props.theme.url};
`