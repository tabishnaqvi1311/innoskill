"use client";

import FormWrapper from "./FormWrapper";
import UPI from "@/assets/UPI.png"
import Image from "next/image";

export function PaymentForm({
    prices,
    fromUni={fromUni},
    setFromUni={setFromUni}
}) {
    return (
        <FormWrapper title="Pay your registration fee here">
            <div className="">
                <h3 className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold">
                    Bank Name: IndusInd Bank<br />
                    Account Name:  MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST<br />
                    Account No:  201004119068<br />
                    IFSC Code:  INDB0000702
                </h3>
                <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                    Price:₹ {prices}
                </div>
                <div className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold flex flex-col gap-7 items-center">
                    <h3 className="">Or Pay Via UPI</h3>
                    {/* <div>
                        <h1 className="font-bold text-yellow-500">MRIS:</h1>
                        <a href="https://paytm.me/eGr-RrE" target="_blank" className="underline">https://paytm.me/eGr-RrE</a>
                    </div>
                    <div>

                        <h1 className="font-bold text-yellow-500">MRIIRS & MRU:</h1>
                        <a href="https://paytm.me/wjd8-6X" target="_blank" className="underline">https://paytm.me/wjd8-6X</a>

                    </div> */}
                    <Image src={UPI} alt="" width={400} height={400}/>
                </div>
                <div className="bg-white text-gray-700 font-semibold p-7 rounded-xl flex flex-col text-center gap-5">
                    <label htmlFor="">Once Payed, please upload your payment receipt in the Google Drive Link Below.</label>
                    <p>YOUR FILE MUST BR NAMED: {`<TEAM_NAME>_<LEADER_NAME>`}</p>
                    <a href="https://drive.google.com/drive/folders/1zhClN3LQX6dasnMWOwLVoxFK-Nt2bB1Z?usp=sharing" target="_blank" className="text-yellow-500 underline">DRIVE LINK</a>
                </div>
            </div>
        </FormWrapper>
    )
}