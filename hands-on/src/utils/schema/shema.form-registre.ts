import * as yup from 'yup'

export type TypeFormRegistre = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const schemaRegistre = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas precisam ser iguais').required('Confirmação de senha é obrigatória')
})