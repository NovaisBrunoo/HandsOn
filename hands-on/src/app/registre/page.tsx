import { Card } from "@/components/Card"
import { HeaderPrimary } from "@/components/Header-primary"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import Link from "next/link"


export default function Registre() {
  return (
    <main className="bg-[url('/background.png')] bg-cover bg-no-repeat h-screen w-screen overflow-auto">
      <HeaderPrimary />

      <div className="w-flu h-full flex items-center justify-center my-16">

        <Card>
          <form className="flex flex-col gap-8">

            <h1
              className="text-[28px] font-medium text-[#7978D9] text-center"
            >
              Cadastre-se
            </h1>

            <div className="flex flex-col gap-2">
              <Label
                labelHtmlFor="name"
                type="sm"
              >
                Nome
              </Label>
              <Input
                id="name"
              />
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
                Senha
              </Label>
              <Input
                id="password"
                type="password"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                labelHtmlFor="confirme"
                type="sm"
              >
                Confirmação de senha
              </Label>
              <Input
                id="confirme"
                type="password"
              />
            </div>

            <button className="bg-[#7978D9] rounded py-3 w-full text-white mt-10">
              Cadastre-se
            </button>

            <Link
              href='/'
              className="text-[#7978D9] text-center"
            >
              Já tem cadastro? Clique aqui!
            </Link>
          </form>
        </Card>

      </div>

    </main>
  )
}