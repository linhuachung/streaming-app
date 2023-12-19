import {UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <p className="text-red-500 font-bold">
            Hello world
            <UserButton afterSignOutUrl={'/'}/>
        </p>
    )
}
