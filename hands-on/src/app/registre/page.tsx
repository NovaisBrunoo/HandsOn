import { Card } from "@/components/Card"
import { FormRegistre } from "@/components/Forms/FormRegistre"
import { HeaderPrimary } from "@/components/Header-primary"


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