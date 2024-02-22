'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { TypeFormRegistre, schemaRegistre } from "@/utils/schema/shema.form-registre";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormEditUser = () => {
  const [user, setUser] = useState({})
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaRegistre)
  })

  async function handelGetUser() {
    try {
      const response = await axios.get('https://fakestoreapi.com/users/1')
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    handelGetUser()
  }, [])

  const onSubmit: SubmitHandler<TypeFormRegistre> = async (data) => {
    console.log(data)
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="name" type="lg">
          Nome
        </Label>
        <Input id="name" {...register('name')} value={user.username} />
        {errors.name && <span className="text-red-500 text-[0.5rem]">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="email" type="lg">
          E-mail
        </Label>
        <Input id="email" {...register('email')} value={user.email} />
        {errors.email && <span className="text-red-500 text-[0.5rem]">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="password" type="lg">
          Senha
        </Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && <span className="text-red-500 text-[0.5rem]">{errors.password.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="confirmPassword" type="lg">
          Confirmação de senha
        </Label>
        <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span className="text-red-500 text-[0.5rem]">{errors.confirmPassword.message}</span>}
      </div>

      <Button>
        Cadastrar
      </Button>
    </form>
  )
}