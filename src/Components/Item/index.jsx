import React from "react";
import styled from "styled-components";

const Item = styled.div`
display: flex;
flex-direction: column;

 .texto {
  font-weight: bold;
 }
`

export default ({type, from, value}) => {
  return(
    <Item>
      <span className="texto">{type}</span>
      
      <span>{from}</span>

      <span>{value}</span>
    </Item>
  )
}
