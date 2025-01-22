import LoginForm from "@/components/LoginForm"
import { SignIn, SignUp } from '@clerk/nextjs'

export default function Page(){
    return (
        <div className=" h-screen flex items-center justify-center">
                <SignIn/>
            </div>
    )
}