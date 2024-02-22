'use client'
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeFormLogin, schemaLogin } from "@/utils/schema/shema.form-login";

export const FormLogin = () =>{
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit: SubmitHandler<TypeFormLogin> = async (data) => {
    console.log(data)
  }

  return(
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
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
              {...register('email')}
            />
            {
              errors.email && 
              <span className="text-red-500 text-[0.5rem]">
                {errors.email.message}
              </span>
            }
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
              {...register('password')}
            />
            {
              errors.password && 
              <span className="text-red-500 text-[0.5rem]">
                {errors.password.message}
              </span>
            }
          </div>

          <Button>
            Entrar
          </Button>
        </form>
  )
}