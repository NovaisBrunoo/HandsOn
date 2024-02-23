'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { api } from "@/lib/api";
import { TypeFormRegistre, schemaRegistre } from "@/utils/schema/shema.form-registre";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormRegistre = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaRegistre)
  })
  const {push} = useRouter()

  const onSubmit: SubmitHandler<TypeFormRegistre> = async (data) => {
    try {
      const objUser = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      
      const  {status} = await api.post('/users', objUser)

      if(status === 201){
        alert('usuario criado!!')
        return push('/')
      } else {
        alert('Erro ao tentar criar!!')
      }
      
    } catch (error) {
      console.error(error)
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