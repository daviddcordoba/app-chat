import { z } from "zod"
import { registerFormSchema as formSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const Register = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password:"",
          displayName:"",
          photoURL:undefined,
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <div className="p-5">
        <Card className="bg-white">
            <CardHeader>
                <CardTitle>Registro</CardTitle>
                <CardDescription>
                    Rellene el siguiente formulario
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="user@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="password123" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="password123" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="photoURL"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                        <Input
                        {...fieldProps}
                        placeholder="Picture"
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={(event) =>
                            onChange(event.target.files && event.target.files[0])
                        }
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Register</Button>
            </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}

export default Register

