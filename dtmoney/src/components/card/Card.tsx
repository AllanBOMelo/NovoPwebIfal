import Image from "next/image";
import { PropsCard } from "@/types/PorpsCard";

const formatPrice = (amount: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

export function Card({ titulo, valor, total, imagem }: PropsCard) {
  return (
    <div
      className={`w-[25vw] max-w-[352px] min-w-[150px] h-[20vh] max-h-[136px] min-h-[85px] ${
        total ? "bg-[#33CC95]" : "bg-white"
      } rounded flex flex-wrap justify-between p-[calc(5px+0.5vw+0.5vh)]`}
    >
      <span
        className={`${
          total ? "text-white" : "text-title"
        } size-2 text-[calc(10px+0.5vw)]`}
      >
        {titulo}
      </span>
      <Image
        src={`/images/${imagem}`}
        alt="Imagem Entrada"
        width={32}
        height={32}
        className="w-[calc(1vw+2vh)] h-[calc(1vw+2vh)] max-w-[32px] max-h-[32px] min-w-[25px] min-h-[25px]"
      />
      <h2
        className={`w-[100%] ${
          total ? "text-white" : "text-title"
        }  text-[calc(10px+1.5vw)]`}
      >
        {formatPrice(valor)}
      </h2>
    </div>
  );
}
