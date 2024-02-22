'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { TypeFormRegistre, schemaRegistre } from "@/utils/schema/shema.form-registre";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormRegistre = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaRegistre)
  })
  const router = useRouter()
  const onSubmit: SubmitHandler<TypeFormRegistre> = async (data) => {
    console.log(data.name)
    try {
      const response = await axios.post('https://fakestoreapi.com/users', {
        username: data.name,
        email: data.email,
        password: data.password,
        name: {
          firstname: data.name,
        }
      })
      console.log('objeto enviado', response)
      reset()
      router.push('/')

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <h1
        className="text-[28px] font-medium text-[#7978D9] text-center"
      >
        Cadastre-se
      </h1>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="name" type="sm">
          Nome
        </Label>
        <Input id="name" {...register('name')} />
        {errors.name && <span className="text-red-500 text-[0.5rem]">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="email" type="sm">
          E-mail
        </Label>
        <Input id="email" {...register('email')} />
        {errors.email && <span className="text-red-500 text-[0.5rem]">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="password" type="sm">
          Senha
        </Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && <span className="text-red-500 text-[0.5rem]">{errors.password.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="confirmPassword" type="sm">
          Confirmação de senha
        </Label>
        <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span className="text-red-500 text-[0.5rem]">{errors.confirmPassword.message}</span>}
      </div>

      <Button>
        Cadastrar
      </Button>

      <Link
        href='/'
        className="text-[#7978D9] text-center"
      >
        Já tem cadastro? Clique aqui!
      </Link>
    </form>
  )
}