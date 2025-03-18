type Vertical = {
    eventName: string,
    members: string | null,
    price: number,
    free: boolean
}

export type UserFormData = {
    name: string,
    scOrUni: "School" | "University",
    intOrExt: "Internal" | "External",
    roll: string,
    feeType: string,
    teamName: string,
}

export type VerticalData = {
    vertical1: Vertical[]
    vertical2: Vertical[]
    vertical3: Vertical[]
    vertical4: Vertical[]
    vertical5: Vertical[]
    vertical6: Vertical[]
    vertical7: Vertical[]
    vertical8: Vertical[]
}

export type FormData = UserFormData & {
    mode: string,
    transactionID: string,
} & VerticalData

export type ProgressBarProps = {
    currentStepIdx: number;
    totalSteps: number;
}