import React,{useState, useEffect} from 'react';

import  { 
  Container,
  Paragrafo,
  BoxDia,
  BoxDia2,
  BoxMain,
  Informar,
  InformarDia,
  ProdutoReceber,
  AceitarTermos,
  ButtonAssinante,
  Main
 } from './Style'

import Global from './Global'

function App() {

  const [dias,setDias] = useState([])
  const [dias2,setDias2] = useState([])
  const [visibleDia,setVisibleDia] = useState(true)
  const [diaSelecionado,setDiaSelecionado] = useState(0)
  const [termoAceito,setTermoAceito] = useState(false)

  useEffect(() => {

    setDias([15,20,30,45,60]);
    setDias2([90,105,120]);

  },[])

  useEffect(() => {

    if(termoAceito) {
      document.getElementById("btnAssinante").style.cursor = "pointer";
    } else {
      document.getElementById("btnAssinante").style.cursor = "not-allowed";
    }

  },[termoAceito])

  useEffect(() => {

    dias.forEach(dia => {
      if(dia !== diaSelecionado) {
        document.getElementById(dia).style.background = "#fff";
      }
    })
    dias2.forEach(dia2 => {
      if(dia2 !== diaSelecionado) {
        document.getElementById(dia2).style.background = "#fff";
      }
    })

  },[diaSelecionado,dias2,dias])

  function selecionarDia(diaSelecionado) {
    setDiaSelecionado(diaSelecionado)
    document.getElementById(diaSelecionado).style.background = "blue";
  }

  return (
    <Main>
    <Container>
        <Paragrafo> Escolha o seu intervalo em dias </Paragrafo>

      <BoxMain visible={visibleDia}>
        { dias.map(dia => ( <BoxDia key={dia} id={dia} onClick={() => selecionarDia(dia)}> {dia} dias </BoxDia> )) }
        { dias2.map(dia => ( <BoxDia2 key={dia} id={dia} onClick={() => selecionarDia(dia)}> {dia} dias </BoxDia2> )) }
        </BoxMain>

      <InformarDia visible={!visibleDia}>
          <span>Digite o seu intervalo em dias</span>
          <input 
          type="number" 
          placeholder="Ex: 12"
          value={diaSelecionado}
          onChange={e => setDiaSelecionado(e.target.value)}
          />
      </InformarDia>

      <Informar onClick={() => setVisibleDia(!visibleDia)}> 
        { visibleDia ? "Informar outro intervalo" : "Informar intervalo comuns" }
      </Informar>

      <AceitarTermos> 
        <input type="checkbox" 
        checked={termoAceito}
        onChange={() => setTermoAceito(!termoAceito)}
        />
        Aceito os <u>termos e condições</u> 
      </AceitarTermos>

      <ProdutoReceber>
          Você receberá seus produtos a cada: { 
            diaSelecionado < 1 ? "0 dia" :
            `${diaSelecionado < 1 ? "0" : diaSelecionado } 
             ${diaSelecionado > 1 ? "dias" : "dia" } ` 
          }
      </ProdutoReceber>

      <ButtonAssinante visible={termoAceito} id="btnAssinante">
          Quero ser assinante
      </ButtonAssinante>

    </Container>
    <Global />
    </Main>
  );
}

export default App;
