import Login from "@/components/auth/login";
import Register from "@/components/auth/register";

const AuthLayout = () => {
  return (
    <main className="bg-indigo-200">
                    <div className="min-h-screen grid md:grid-cols-2 md:place-items-center place-content-center container "> 
                        <Login/> 
                        <Register/>
                    </div>
                </main>
  )
}

export default AuthLayout