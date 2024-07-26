import { Entradas } from "@/components/entradas/Entradas";
import { Header } from "@/components/header/Header";

export default function Home() {
  var titulos: Array<String> = ["Entradas", "Saídas", "Total"];
  var valores: Array<number> = [18500.2, 12000.0, 6500.2];
  var imagens: Array<string> = ["Entradas.png", "Saídas.png", "Total.png"];
  var total: Array<boolean> = [false, false, true];

  return (
    <main className="flex min-w-[600px] min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="w-[100%] h-[70vh] min-h-[400px] relative flex justify-center">
        <Entradas
          titulos={titulos}
          valores={valores}
          imagens={imagens}
          total={total}
        />
      </section>
    </main>
  );
}
