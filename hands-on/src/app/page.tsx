import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FormLogin } from "@/components/Forms/FormLogin";
import { HeaderPrimary } from "@/components/Header/Header-primary";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/background.png')] bg-cover bg-no-repeat h-screen w-screen">
      <HeaderPrimary />
      <div className="flex items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-9 text-white">
          <h1
            className="text-[52px] font-bold"
          >
            Controle suas <b className="text-[#7978D9]">finanças</b>, sem planilha chata.
          </h1>
          <h2
            className="text-[28px] font-normal"
          >
            Organizar as suas finanças nunca foi tão fácil,
            com o DINDIN, você tem tudo num único lugar e
            em um clique de distância.
          </h2>
          <div className="w-72">
            <Link href='/registre'>
                <Button>
                   Cadastre-se
                </Button>
            </Link>
          </div>
        </div>

        <Card>
          <FormLogin />
        </Card>
      </div>
    </main>
  );

}
