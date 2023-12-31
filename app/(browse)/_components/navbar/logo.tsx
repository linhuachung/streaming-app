import React from 'react';
import {Poppins} from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

const Logo = ({}: {}) => {
    return (
        <Link href={'/'}>
            <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
                <div className='bg-white rounded-full p-1'>
                    <Image src={'/spooky.svg'} alt={'streaming-app'} height={32} width={32}/>
                </div>
                <div className={cn(font.className)}>
                    <p className={'text-xs text-muted-foreground'}>
                        Streaming App
                    </p>
                    <p>
                        Let&apos;s play
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default Logo;
