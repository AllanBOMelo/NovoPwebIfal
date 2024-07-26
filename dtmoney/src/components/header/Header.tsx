import Image from "next/image";

export function Header() {
  return (
    <header className="bg-header w-full h-[30vh] min-h-[150px] max-h-[212px]">
      <div className="mx-auto w-[85vw] min-w-[500px] max-w-[1120px] flex justify-between pt-8">
        <Image
          src="/images/logo.png"
          alt="Main Logo"
          width={172}
          height={40}
          className="h-10"
        />
        {/* Com o uso do componente Image do next, é possivel realizar um cast da imagem. 
        Com a imagem dentro do diretorio Public, é possivel invocar a imagem diretamente pelo src */}
        <button className="bg-button w-[calc(3vh+13vw)] max-w-[195px] min-w-[150px] h-[8vh] min-h-9 max-h-[48px] text-white text-[calc(max(0.8vw,6px)+max(0.5vh,6px))] rounded-md hover:opacity-90 flex items-center justify-center">
          Nova transação
        </button>
      </div>
    </header>
  );
}
