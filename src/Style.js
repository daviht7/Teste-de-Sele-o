import styled from "styled-components";
import { darken } from "polished";

export const Main = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .selected {
    background: blue;
  }

  .pointernotallowed {
    cursor:not-allowed
  }

`

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction:column;
  border:1px solid #000;
  width:350px;
  justify-content: center;
  align-content:center;
  padding:10px;
`;

export const Paragrafo  = styled.span`
  color: #120a8f;
  align-self: flex-start;
  margin-bottom:10px;
`;

export const BoxDia = styled.button`
  border: 1px solid #000;
  margin:5px;
  align-content:row;
  border-radius:5px;
  color:#000000;
  text-align:center;
  width:60px;
  font-size:10px;
  background:#ffffff;
  padding:10px;

  &:hover {
    background: ${darken(0.10, "#ffffff")};
  }


`

export const BoxMain = styled.div`
    display:${props => (props.visible ? "flex" : "none")};
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
`

export const Informar = styled.button`
  background-color:#fff;
  color:#000;
  border:0;
  text-decoration:underline;
  margin-top:15px;
  width:50%;
  align-self:center;
`

export const InformarDia = styled.div`

  display:${props => (props.visible ? "flex" : "none")};
  flex-direction:column;
  margin:10px;
  
  input {

    width:100%;
    height:30px;
    border-radius:4px;
    background-color:#fff;

  }

`

export const AceitarTermos = styled.div`

  margin:10px;

  u {
    color:blue;
  }

`

export const ProdutoReceber = styled.div`
  border:none;
  margin:10px;
  border-top:1px solid #000;
  border-bottom:1px solid #000;
  padding:6px;
  text-align:center;
`

export const ButtonAssinante = styled.button`

  background:#00ff00;
  height:30px;
  font-size:15px;
  border-radius:6px;
  border:0;
  disabled : false;
  text-align:center;

  &:hover {
    background: ${darken(0.10, "#00ff00")};
  }
  


`