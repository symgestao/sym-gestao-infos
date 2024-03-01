import "./stfc1.css";

const imgPerson1 = require("../../assets/angry.png") as string;
const telefone = require("../../assets/telefone.png") as string;

export function Stfc1() {
  return (
    <div id="stfc-section" className="stfcMainContainer">
      <div className="stfcContainer">
        <div>
          <h2>Manual STFC</h2>
          <h3>Identificando o problema do cliente:</h3>
          <p className="pstfc1">
            Em situações de telefonia, onde a comunicação é vital,{" "}
            <b>
              problemas como uma ligação muda podem se tornar obstáculos
              irritantes
            </b>
            . Às vezes, a solução está na simplicidade, como verificar o cabo do
            gancho.
          </p>
          <p className="pstfc1">
            <b>Quando o indicador L1 pisca em vermelho</b>, um sinal claro de
            problemas na conexão, a solução pode estar a um passo simples.
            Certifique-se de verificar a conexão com a internet e garantir que o
            cabo esteja corretamente conectado na parte de trás.
          </p>
          <img className="telefone" src={telefone} alt="" />
        </div>
        <div className="imgPerson1Container">
          <img className="imgPerson1" src={imgPerson1} alt="" />
        </div>
      </div>
    </div>
  );
}
