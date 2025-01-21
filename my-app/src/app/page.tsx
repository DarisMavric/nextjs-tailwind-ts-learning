import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="block">
      <div className="flex justify-between items-center p-5">
          <img src="https://expense-tracker-tubeguruji.vercel.app/logo.svg" alt="" width={160} height={100} />
          <div className="flex gap-3 items-center">
            <Button className="text-black bg-white p-5 hover:bg-accent"><Link href={'/dashboard'}>Dashboard</Link></Button>
            <Button className="text-white bg-indigo-700 p-5 hover:bg-primary/90"><Link href={'/sign-in'}>Get Started</Link></Button>
          </div>
      </div>
    </div>
  );
}
