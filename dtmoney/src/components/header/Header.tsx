"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="bg-header w-full h-[212px]">
      <div className="mx-auto max-w-[1120px] flex justify-between pt-8">
        <Image src="/images/logo.png" alt="Main Logo" width={172} height={40} />
        {/* Com o uso do componente Image do next, é possivel realizar um cast da imagem. 
                                Com a imagem dentro do diretorio Public, é possivel invocar a imagem diretamente pelo src */}
        <button className="bg-button w-[195px] h-[48px] text-white size-4 rounded-md hover:opacity-90 flex items-center justify-center">
          Nova transação
        </button>
      </div>
    </header>
  );
}
