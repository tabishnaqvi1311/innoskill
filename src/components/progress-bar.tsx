import { ProgressBarProps } from "@/types";

export default function ProgressBar({
    currentStepIdx,
    totalSteps
}: ProgressBarProps
) {
    const progress = ((currentStepIdx + 1) / totalSteps) * 100;

    return (
        <div
            className={`fixed top-0 left-0 border-2 border-yellow-500 transition-all duration-150`}
            style={{ width: `${progress}%` }}
        />
    )
}