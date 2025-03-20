import mrlogo from "@/assets/mrlogo.png";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function FormHeader(){
    return (
        <div className="flex flex-col justify-center items-center">
        <Image src={mrlogo} alt="MRIIRS Logo" width={500} className="select-none" />
        <div className="text-center my-5">
            <h1 className="font-bold text-4xl text-gray-700">8th Edition</h1>
            <span className={roboto.className}>
                <h1 className="font-extrabold text-6xl bg-gradient-to-r from-red-700 to bg-yellow-500 bg-clip-text text-transparent outline-8 uppercase">InnoSkill 2025</h1>
            </span>
            <h1 className="font-bold text-4xl text-gray-700">3rd-4th April</h1>
        </div>
    </div>
    )
}