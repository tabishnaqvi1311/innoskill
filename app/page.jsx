"use client";

import React, { useEffect, useState } from "react"
import { useMultiForm } from "@/hooks/useMultiForm";
import { UserForm } from "@/components/UserForm";
import { EventForm } from "@/components/EventForm";
import { PaymentForm } from "@/components/PaymentForm";
import mrlogo from "@/assets/mrlogo.png";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment/moment";


const roboto = Roboto_Slab({ subsets: ["latin"] });

//data is set to this initially
const initalData = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  phone: "",
  option: "School",
  uniName: "",
  semester: "",
  rollNo: "",
  teamName: "",
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
  submittedAt: "",
  transactionID: ""
}

export default function Home() {

  const [data, setData] = useState(initalData)
  const [progress, setProgress] = useState(0);
  const [prices, setPrices] = useState(0);
  const [fromUni, setFromUni] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  //using our custom hook
  const { steps, currentStepIndex, step, FirstStep, back, next, LastStep, goTo } = useMultiForm([
    <UserForm {...data}
      updateFields={updateFields}
      prices={prices}
      setPrices={setPrices}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,

    <EventForm {...data}
      updateFields={updateFields}
      prices={prices}
      setPrices={setPrices}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,

    <PaymentForm {...data}
      updateFields={updateFields}
      prices={prices}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,
  ])

  //progress bar
  const getProgress = () => {
    switch (currentStepIndex + 1) {
      case 1:
        return "w-1/4";
      case 2:
        return "w-1/2";
      case 3:
        return "w-3/4";
    }
  }

  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
  }, [currentStepIndex])




  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, age, phone, option, uniName, semester, rollNo, teamName, transactionID } = data;

    if (!firstName || !lastName || !email || !age || !phone || !option || !uniName || !semester || !rollNo || !teamName) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (!LastStep) return next();
    if(!data.transactionID) {
      toast.error("Please enter transaction ID");
      return;
    }
    setIsSubmitting(() => true);
    const currentDate = moment().format("DD-MM-YYYY HH:mm");
    data.submittedAt = currentDate;
    console.log(data.transactionID)

    fetch(`/api/send`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status === 201) {
        // console.log(response);
        toast.success("Submission Recorded!", {
          position: "top-right",
        })
        setData(() => initalData);
        goTo(0);
      } else {
        // console.log(response)
        throw Error()
      }
    }).catch((error) => {
      // console.log(error);
      toast.error("An error occured", {
        position: "top-right"
      })
    }).finally(() => setIsSubmitting(() => false));
    // .finally(() => setData(() => initalData));

  }

  return (
    <main>
      <div className={`fixed top-0 border-4 border-yellow-500 ${progress} transition-all duration-150`} />
      <div className="flex flex-col justify-center items-center">
        <Image src={mrlogo} alt="MRIIRS Logo" width={500} />
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
              {LastStep ? "Submit" : "Next"}
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
          <a href="https://tabishnaqvi.vercel.app/" className="underline" target="_blank">Tabish Naqvi</a>&nbsp;and&nbsp;
          <a href="https://github.com/Haider-Abdi/" className="underline" target="_blank">Haider Abdi</a>
        </span>
      </div>
      <ToastContainer />
    </main>
  )
}