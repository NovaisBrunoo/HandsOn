import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"

export const FormLogin = () =>{
    return(
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

            <Button>
              Entrar
            </Button>
          </form>
    )
}