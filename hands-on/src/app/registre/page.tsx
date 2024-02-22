import { Card } from "@/components/Card"
import { FormRegistre } from "@/components/Froms/FormRegistre"
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
          <FormRegistre />
        </Card>
      </div>

    </main>
  )
}