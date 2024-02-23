'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { api } from "@/lib/api";
import { getItemObject, setItemObject } from "@/utils/localStorageUtils";
import { TypeFormRegistre, schemaRegistre } from "@/utils/schema/shema.form-registre";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormEditUser = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaRegistre)
  })
  let user = getItemObject('user')
  

  const onSubmit: SubmitHandler<TypeFormRegistre> = async (dataUser) => {
    try {
      const objUser = {
        name: dataUser.name,
        email: dataUser.email,
        password: dataUser.password
      }
      
      const {status, data} = await api.patch(`/users/${user.id}`, objUser)

      if(status === 200){
        alert('user editado!')
        setItemObject('user',data)

      } else {
        alert('erro no servidor!')
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="name" type="lg">
          Nome
        </Label>
        <Input 
          id="name" 
          {...register('name')}
          defaultValue={user.name === undefined ? '' : user.name}
        />
        {errors.name && <span className="text-red-500 text-[0.5rem]">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="email" type="lg">
          E-mail
        </Label>
        <Input 
          id="email" 
          {...register('email')}
          defaultValue={user.email === undefined ? '' : user.email} 
        />
        {errors.email && <span className="text-red-500 text-[0.5rem]">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label labelHtmlFor="password" type="lg">
          Senha
        </Label>
        <Input 
          id="password" 
          type="password" 
          {...register('password')} 
          defaultValue={user.password === undefined ? '' : user.password}
        />
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