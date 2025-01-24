'use client'

import { SignOutButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null
      }else {
        console.log(user);
    }

    return (
        <div className="">
            <p>hello {user.firstName}</p>
            <SignOutButton/>
        </div>
    )
}