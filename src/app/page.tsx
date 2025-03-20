"use client";

import ProgressBar from "@/components/progress-bar";
import { useMultiForm } from "@/hooks/useMultiForm";
import { FormData } from "@/types";
import { Roboto_Slab } from "next/font/google"
import Image from "next/image";
import { FormEvent, useState } from "react";
import mrlogo from "@/assets/mrlogo.png";
import UserForm from "@/components/user-form";
import EventForm from "@/components/event-form";
import { PaymentForm } from "@/components/payment-form";
import toast from "react-hot-toast";

const roboto = Roboto_Slab({ subsets: ["latin"] });

const initialData: FormData = {
    name: "",
    scOrUni: "School",
    intOrExt: "Internal",
    roll: "",
    feeType: "Registration",
    teamName: "",
    mode: "",
    transactionID: "",
    vertical1: [
        { eventName: "Theme Based Model Demo (Srijan)", members: null, price: 0, free: false },
        { eventName: "Best out of Waste (Nav Shrijan)", members: null, price: 0, free: false },
        { eventName: "Code Debugging", members: null, price: 0, free: false },
        { eventName: "LAN Gaming", members: null, price: 0, free: false },
        { eventName: "BioGenius", members: null, price: 0, free: false },
        { eventName: "Vista Vibes- Video Blog", members: null, price: 0, free: false },
        { eventName: "Technical Memes", members: null, price: 0, free: false },
        { eventName: "Build a Circuit", members: null, price: 0, free: false },
        { eventName: "Workshop on 3D Printing", members: null, price: 0, free: true },
        { eventName: "Workshop on Laser Cutting and Design", members: null, price: 0, free: true },
        { eventName: "Capture the Flag (CTF)", members: null, price: 0, free: false },
    ],
    vertical2: [
        { eventName: "Pro Launch Series 3", members: null, price: 0, free: false },
        { eventName: "Ideattrakt Series 4", members: null, price: 0, free: true },
        { eventName: "Poster Making Series 4", members: null, price: 0, free: false },
        { eventName: "Finance Ki Pathshala Series 2", members: null, price: 0, free: true },
    ],
    vertical3: [
        { eventName: "Workshop on Body Composition Analysis: Principles & Hands-on Training", members: null, price: 0, free: true },
        { eventName: "Food Waste to wonder challenge", members: null, price: 0, free: false },
        { eventName: "Oral Hygiene & Hand Hygiene", members: null, price: 0, free: false },
        { eventName: "Prototype development from farm to fork challege", members: null, price: 0, free: false },
        { eventName: "YuvaFit", members: null, price: 0, free: false },
        { eventName: "Basic Life Support", members: null, price: 0, free: true },
    ],
    vertical4: [
        { eventName: "Sustainathon ( Idea Pitching)", members: null, price: 0, free: false },
        { eventName: "Eco-reel", members: null, price: 0, free: false },
        { eventName: "My community My Ad", members: null, price: 0, free: false },
        { eventName: "Designing Eco-Corner ", members: null, price: 0, free: false },
        { eventName: "Waste Wizards ", members: null, price: 0, free: false },
    ],
    vertical5: [
        { eventName: "Ramen Cook Off Challenge", members: null, price: 0, free: true },
        { eventName: "Demonstartion on Tropical Mocktails ", members: null, price: 0, free: false },
    ],
    vertical6: [
        { eventName: "LexPrenuer- (the legal-tech start-up challenge)", members: null, price: 0, free: false },
        { eventName: "Trial-by-Fire- (speed moot)", members: null, price: 0, free: false },
        { eventName: "Law through Art (Legal awareness through poster and memes)", members: null, price: 0, free: false },
        { eventName: "Legally Bollywood (Mock trial of movie characters)", members: null, price: 0, free: false },
        { eventName: "WORKSHOP: Seeing is Deceiving: the power of AI generated content", members: null, price: 0, free: false },
    ],
    vertical7: [
        { eventName: "Techno- Vogue 'Technology Fashion Walk'", members: null, price: 0, free: false },
        { eventName: "Spell Bee Competition 'Who will be the Spell Bee Champion'", members: null, price: 0, free: false },
        { eventName: "Innovoice 'RJ Hunt'", members: null, price: 0, free: false },
        { eventName: "SnapFlickShowdown: 'Reel Making Competition'", members: null, price: 0, free: false },
    ],
    vertical8: [
        { eventName: "From Inside out - 'Elevate your style and persona'", members: null, price: 0, free: false },
        { eventName: "Claymation: Bringing Clay to Life Using a Smartphone", members: null, price: 0, free: false },
        { eventName: "Tekken 8 Tournament", members: null, price: 0, free: true },
        { eventName: "Recycled Artistry", members: null, price: 0, free: false },
        { eventName: "Think & Design - (Product Design Competition)", members: null, price: 0, free: false },
        { eventName: "AR Storytelling Challenge", members: null, price: 0, free: false },
        { eventName: "Miniature Marvel: Designing a lifestyle product", members: null, price: 0, free: false },
    ],
}

export default function Page() {

    const [data, setData] = useState<FormData>(initialData);
    const [prices, setPrices] = useState(0);
    const [fromUni, setFromUni] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateFields = (fields: any) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }

    const { currentStepIndex, step, FirstStep, LastStep, back, next } = useMultiForm([
        <UserForm
            {...data}
            updateFields={updateFields}
            setFromUni={setFromUni}
            key={1} />,
        <EventForm
            {...data}
            updateFields={updateFields}
            setPrices={setPrices}
            fromUni={fromUni}
            key={2}
        />,
        <PaymentForm
            {...data}
            updateFields={updateFields}
            prices={prices}
            fromUni={fromUni}
            key={3}
        />
    ])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!LastStep) return next();
        setIsSubmitting(true);
        try {
            const res = await fetch(`http://localhost:8080/send`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const json = await res.json();
            console.log(json);
            if (!res.ok) throw new Error(`request failed with status ${res.status}`);
            toast.success("Form submitted", {
                position: "top-right",
                style: {
                    "backgroundColor": "#1e2939",
                    "color": "white"
                }
            })
        } catch (e) {
            console.log(e);
            toast.error("An error occurred", {
                position: "top-right",
                style: {
                    "backgroundColor": "#1e2939",
                    "color": "white"
                }
            })
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main>
            <ProgressBar currentStepIdx={currentStepIndex} totalSteps={5} />
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
            <div className="p-10 flex justify-center">
                <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-blue-950 to-yellow-950 text-white  rounded-xl md:w-1/2 shadow-2xl" onSubmit={handleSubmit}>
                    {step}
                    <div className="p-3 rounded-xl">
                        {!FirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
                        <button type="button" className="navbutton" onClick={handleSubmit} disabled={isSubmitting}>
                            {!LastStep ? "Next"
                                : isSubmitting
                                    ? <span className="loading loading-spinner text-white" /> : "Submit"}
                        </button>
                    </div>
                </form>
            </div>

            {/* footer  */}
            <div className="flex justify-center py-7 px-2 text-center">
                <span className=" ">
                    Designed and Developed in&nbsp;
                    <a href="https://nextjs.org/" target="_blank" className="underline">NextJS</a>
                    &nbsp;by&nbsp;
                    <a href="https://tabishnaqvi.com/" className="underline" target="_blank">Tabish Naqvi</a>
                </span>
            </div>
        </main>
    )
}