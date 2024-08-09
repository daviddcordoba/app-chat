import {z} from 'zod'

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6,"Password must be at least 6 characters")
  })

export const registerFormSchema = z.object({
  photoURL: z.instanceof(File,{
    message:"Ingresa una imagen valida"
  })
  .refine(data => data.size < 2 * 1024*1024,{
    message:"La imagen debe ser menor a 2MB"
  }),
  displayName: z.string().min(1,"El nombre es requerido").max(50),
  email: z.string().email(),
  password:z.string().min(6,"La contrasena debe ser de al menos 6 caracteres"),
  confirmPassword:z.string().min(6,"La contrasena debe ser de al menos 6 caracteres")
}).refine( data => data.password == data.confirmPassword,{
  message:"Las contrasenas nos coinciden"
})

export const searchFormSchema = z.object({
  email: z.string().email("Ingresa un correo valido"),
})