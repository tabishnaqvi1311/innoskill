"use client";

import FormWrapper from "./form-wrapper";

type PaymentFormProps = {
    transactionID: string,
    prices: number,
    fromUni: boolean,
    updateFields: any
}

export function PaymentForm({
    transactionID,
    prices,
    fromUni,
    updateFields
}: PaymentFormProps) {
    return (
        <FormWrapper title="Pay your registration fee here">
            <div className="">
                <h3 className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold">
                    Bank Name: Axis Bank<br />
                    Account Name:  MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST<br />
                    Account No:  924020046485383<br />
                    IFSC Code:  UTIB0002693
                </h3>
                <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                    Price:₹ {prices}
                </div>
                <div className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold flex flex-col gap-7 items-center">
                    <h3 className="">Or Pay Via UPI</h3>
                    {
                        fromUni ?
                            <div>
                                <a href=" https://paytm.me/PYTMPS/dGSFjpP" target="_blank" className="underline font-bold text-yellow-500">UPI Payment Link</a>
                            </div>
                            :
                            <div>
                                <a href="https://secure.paytmpayments.com/link/paymentForm/46694/LL_759455946" target="_blank" className="underline font-bold text-yellow-500">UPI Payment Link</a>
                            </div>

                    }
                </div>
                <div className="bg-white text-gray-700 font-semibold p-7 rounded-xl flex flex-col text-center gap-5">
                    <label htmlFor="">Once Payed, please enter Transaction ID below</label>
                    <input type="text" placeholder="Enter Transaction ID..." className="bg-gray-200 rounded-xl p-3" value={transactionID} onChange={(e) => updateFields({ transactionID: e.target.value })} />
                </div>
            </div>
        </FormWrapper>
    )
}