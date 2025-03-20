import { UserFormData } from "@/types";
import FormWrapper from "./form-wrapper";
import { ChevronDown } from "lucide-react";

type UserFormDataProps = UserFormData & {
    setFromUni: React.Dispatch<React.SetStateAction<boolean>>
    updateFields: any
}

export default function UserForm({
    name,
    scOrUni,
    intOrExt,
    roll,
    feeType,
    teamName,
    setFromUni,
    updateFields
}: UserFormDataProps) {
    return (
        <FormWrapper
            title="Enter Your Details"
            subtitle="Please Fill Your Personal Details To Proceed"
        >
            <div className="flex flex-col">
                <div className="userFormContainer">
                    <label className="userFormLabel">Name</label>
                    <input
                        autoFocus
                        required
                        type="text"
                        className="userFormInput"
                        value={name}
                        onChange={e => updateFields({ name: e.target.value })} />
                </div>
                <div className="userFormContainer">
                    <label className="userFormLabel">Where do you study</label>
                    <div className="dropdown dropdown-hover w-full my-4">
                        <label tabIndex={0} className="btn w-full text-primary flex justify-between bg-gray-600 hover:bg-gray-500 text-base border-none shadow-none">
                            {scOrUni}
                            <ChevronDown />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-lg w-full shadow-md">
                            {["School", "University"].map((option) => (
                                <li key={option}>
                                    <p onClick={() => {
                                        setFromUni(() => scOrUni === "University")
                                        updateFields({ scOrUni: option })
                                    }
                                    } className="w-full px-4 py-2 hover:bg-base-200 hover:text-primary text-gray-500 text-base">
                                        {option}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="userFormContainer">
                    <label className="userFormLabel">Internal or External</label>
                    <div className="dropdown dropdown-hover w-full my-4">
                        <label tabIndex={0} className="btn w-full text-primary flex justify-between bg-gray-600 hover:bg-gray-500 text-base border-none shadow-none">
                            {intOrExt}
                            <ChevronDown />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-lg w-full shadow-md">
                            {["Internal", "External"].map((option) => (
                                <li key={option}>
                                    <p onClick={() => updateFields({ intOrExt: option })} className="w-full px-4 py-2 hover:bg-base-200 hover:text-primary text-gray-500 text-base">
                                        {option}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="userFormContainer">
                    <label className="userFormLabel">Roll Number</label>
                    <input
                        autoFocus
                        required
                        type="text"
                        className="userFormInput"
                        value={roll}
                        onChange={e => updateFields({ roll: e.target.value })} />
                </div>
                <div className="userFormContainer">
                    <label className="userFormLabel">Fee type</label>
                    <div className="dropdown dropdown-hover w-full my-4">
                        <label tabIndex={0} className="btn w-full text-primary flex justify-between bg-gray-600 hover:bg-gray-500 text-base border-none shadow-none">
                            {feeType}
                            <ChevronDown />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-lg w-full shadow-md">
                            {["Registration", "Accomodation"].map((option) => (
                                <li key={option}>
                                    <p onClick={() => updateFields({ feeType: option })} className="w-full px-4 py-2 hover:bg-base-200 hover:text-primary text-gray-500 text-base">
                                        {option}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="userFormContainer">
                    <label className="userFormLabel">Team Name</label>
                    <input
                        autoFocus
                        required
                        type="text"
                        className="userFormInput"
                        value={teamName}
                        onChange={e => updateFields({ teamName: e.target.value })} />
                </div>
            </div>
        </FormWrapper>
    )
}