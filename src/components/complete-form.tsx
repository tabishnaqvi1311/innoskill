import FormFooter from "./form-footer";
import FormHeader from "./form-header";
import FormWrapper from "./form-wrapper";

export default function CompleteForm() {
    return (
        <main>
            <FormHeader />
            <div className="p-10 flex justify-center">
                <div className="p-10 flex flex-col items-center bg-gradient-to-tr from-blue-950 to-yellow-950 text-white rounded-xl md:w-1/2 shadow-2xl h-[30vh]">
                    <FormWrapper title="Submission recorded">
                        <div className="text-yellow-500">
                            Your submission has been successfully recorded, and we will review it shortly. If any further action is required, we will reach out to you.
                        </div>
                    </FormWrapper>
                </div>
            </div>
            <FormFooter/>
        </main>
    )
}