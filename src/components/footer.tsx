import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./icon";

export default function Footer(){
    return (
        <>
        <div className="px-6 py-4 md:px-12 md:py-8 border-t border-t-zinc-500">
           <div className="mb-2">
                <div className="mb-2">
                    <h3 className="text-2xl font-bold">Edducator</h3>
                </div>
                <div>
                    <div className="w-60">
                        <h3 className="text-xs font-bold">Corporate & Communication Address:</h3>
                        <span className="text-xs font-light">New Market, Bhagwanpur, Roorkee, Haridwar, Uttarakhand, 247661</span>
                    </div>
                </div>
           </div>
           <div className="flex gap-x-2">
            <Link href={'#'}><LinkedinIcon height={"40px"} width={"40px"} /></Link>
            <Link href={'#'}><InstagramIcon height={"40px"} width={"40px"} /></Link>
            <Link href={'#'}><TwitterIcon height={"40px"} width={"40px"} /></Link>
            <Link href={'#'}><FacebookIcon height={"40px"} width={"40px"} /></Link>
            <Link href={'#'}><YoutubeIcon height={"40px"} width={"40px"} /></Link>
           </div>
        </div>
        </>
    )
}