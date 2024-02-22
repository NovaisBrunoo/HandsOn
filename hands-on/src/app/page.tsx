import { HeaderPrimary } from "@/components/Header-primary";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
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
              <Link href='/registre'>
                <div className="w-72">
                  <button className="bg-[#7978D9] rounded py-3 w-full">
                    Cadastre-se
                  </button>
                </div>
              </Link>
        </div>

        <div 
          className="bg-white px-8 py-11 flex flex-col w-[513px]"
        >
          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-full">
              <h1 
                className="text-[28px] font-medium text-[#7978D9]"
              >
                Login
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <Label
              labelHtmlFor="email"
              type="sm"
              >
                E-mail
              </Label>
              <Input 
                id="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
              labelHtmlFor="password"
              type="sm"
              >
                Password
              </Label>
              <Input 
                id="password"
                type="password"
              />
            </div>

            <button className="bg-[#7978D9] rounded py-3 w-full text-white mt-10">
                    Entrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );

}
