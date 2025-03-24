import { z } from "zod";

export const userFormSchema = z.object({
    name: z.string().nonempty({ message: "Name cannot be empty" }),
    scOrUni: z.enum(["School", "University"]),
    intOrExt: z.enum(["Internal", "External"]),
    roll: z.string().nonempty({ message: "Roll number cannot be empty" }),
    feeType: z.enum(["Registration", "Accomodation"]),
    teamName: z.string()
        .nonempty({ message: "Team name cannot be empty" })
        .regex(/^(?=.*[a-zA-Z])[a-zA-Z0-9 _-]+$/, { message: "Team name must contain at least one letter" })
})