import * as yup from 'yup'

export type TypeFormLogin = {
    email: string
    password: string
  }
  
export const schemaLogin = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória')
})