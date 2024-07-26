"use Client";

import { Card } from "../card/Card";

interface Props {
  titulos: Array<String>;
  valores: Array<number>;
  imagens: Array<string>;
  total: Array<boolean>;
}

export function Entradas({ titulos, valores, imagens, total }: Props) {
  return (
    <div className="w-[80vw] min-w-[32em] absolute top-0 left-0 right-0 mx-auto transform translate-y-[-50%] flex justify-between">
      {titulos.map((titulo, index) => (
        <Card
          titulo={titulo}
          valor={valores[index]}
          total={total[index]}
          imagem={imagens[index]}
        />
      ))}
    </div>
  );
}
