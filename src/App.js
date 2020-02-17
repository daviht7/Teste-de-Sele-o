import React,{useState, useEffect} from 'react';

import  { 
  Container,
  Paragrafo,
  BoxDia,
  BoxMain,
  Informar,
  InformarDia,
  ProdutoReceber,
  AceitarTermos,
  ButtonAssinante,
  Main
 } from './Style'

import Global from './Global'

export default function App() {

  const [dias,setDias] = useState([])
  const [visibleDia,setVisibleDia] = useState(true)
  const [diaSelecionado,setDiaSelecionado] = useState(0)
  const [termoAceito,setTermoAceito] = useState(false)

  useEffect(() => {
    setDias([15,20,30,45,60,90,105,120]);
  },[])

  return (
    <Main>
      <Container>
          <Paragrafo> Escolha o seu intervalo em dias </Paragrafo>

        <BoxMain visible={visibleDia}>
          { dias.map(dia => ( <BoxDia  className={dia===diaSelecionado ? "selected" : ""} key={dia} onClick={() => setDiaSelecionado(dia)}> {dia} dias </BoxDia> )) }
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

        <ButtonAssinante className={!termoAceito ? "pointernotallowed" : ""}>
            Quero ser assinante
        </ButtonAssinante>

      </Container>
      <Global />
    </Main>
  );
}
