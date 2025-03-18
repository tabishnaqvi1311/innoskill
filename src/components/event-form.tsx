import { VerticalData } from "@/types";
import FormWrapper from "./form-wrapper";
import { useEffect, useState } from "react";

type EventFormProps = VerticalData & {
    updateFields: any,
    fromUni: boolean,
    setPrices: React.Dispatch<React.SetStateAction<number>>
}

type VerticalKey = "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8"

function getOriginalVerticalKey(shortKey: VerticalKey) {
    const keyMap = {
        v1: "vertical1",
        v2: "vertical2",
        v3: "vertical3",
        v4: "vertical4",
        v5: "vertical5",
        v6: "vertical6",
        v7: "vertical7",
        v8: "vertical8"
    };
    return keyMap[shortKey];
};

const verticalTitles = {
    v1: "Innoskill Engineering Drift and Design",
    v2: "Innoskill Business and Management Conundrum",
    v3: "Innoskill Healthcare Mystery",
    v4: "Innoskill Sustainathon",
    v5: "Innoskill Culinary and Hospitality",
    v6: "Innoskill Law Knot",
    v7: "Innoskill Media and Literary Stumper",
    v8: "Innoskill Design Ignite"
};


export default function EventForm({
    vertical1,
    vertical2,
    vertical3,
    vertical4,
    vertical5,
    vertical6,
    vertical7,
    vertical8,
    updateFields,
    fromUni,
    setPrices
}: EventFormProps) {

    const [price, setPrice] = useState(0);

    const [verticals, setVerticals] = useState({
        v1: vertical1,
        v2: vertical2,
        v3: vertical3,
        v4: vertical4,
        v5: vertical5,
        v6: vertical6,
        v7: vertical7,
        v8: vertical8
    });

    const calculatePriceForEvent = (members: string) => {
        const memberCount = parseInt(members);

        if (!fromUni) {
            if (memberCount === 1) return 100;
            if (memberCount === 2) return 150;
            return 200;
        } else {
            if (memberCount === 1) return 250;
            if (memberCount === 2) return 400;
            return 500;
        }
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        Object.values(verticals).forEach(vertical => {
            vertical.forEach(event => {
                if (event.members !== null && !event.free) {
                    totalPrice += calculatePriceForEvent(event.members);
                }
            });
        });

        setPrices(totalPrice);
        return totalPrice;
    };

    const handleTeamSizeChange = (verticalKey: VerticalKey, index: number, value: string) => {
        const updatedVerticals = { ...verticals };
        const updatedData = [...updatedVerticals[verticalKey]];

        updatedData[index].members = value;
        updatedData[index].price = updatedData[index].free ? 0 : calculatePriceForEvent(value);

        updatedVerticals[verticalKey] = updatedData;
        setVerticals(updatedVerticals);

        // Update parent component state
        updateFields({ [getOriginalVerticalKey(verticalKey)]: updatedData });
    };


    const handleCheckboxChange = (verticalKey: VerticalKey, index: number) => {
        const updatedVerticals = { ...verticals };
        const updatedData = [...updatedVerticals[verticalKey]];

        if (updatedData[index].members === null) {
            updatedData[index].members = "1";
            updatedData[index].price = updatedData[index].free ? 0 : calculatePriceForEvent("1");
        } else {
            updatedData[index].members = null;
            updatedData[index].price = 0;
        }

        updatedVerticals[verticalKey] = updatedData;
        setVerticals(updatedVerticals);

        // Update parent component state
        updateFields({ [getOriginalVerticalKey(verticalKey)]: updatedData });
    };

    useEffect(() => {
        const total = calculateTotalPrice();
        setPrice(total); // local
        setPrices(total); // parent
    }, [verticals, fromUni]);

    useEffect(() => {
        setVerticals({
          v1: vertical1,
          v2: vertical2,
          v3: vertical3,
          v4: vertical4,
          v5: vertical5,
          v6: vertical6,
          v7: vertical7,
          v8: vertical8,
        });
      }, [vertical1, vertical2, vertical3, vertical4, vertical5, vertical6, vertical7, vertical8]);

    const EventSection = ({
        verticalKey,
        title
    }: {
        verticalKey: VerticalKey,
        title: string
    }) => (
        <div className="container-event">
            <h1 className="verticalHead">{title}</h1>
            <div className="events">
                {verticals[verticalKey].map((data, index) => (
                    <div className="event-item" key={data.eventName}>
                        <div className="event-item-label-input">
                            <label>{data.eventName}</label>
                            <input
                                type="checkbox"
                                checked={data.members !== null}
                                onChange={() => handleCheckboxChange(verticalKey, index)}
                                className="checkBox"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                }}
                            />
                        </div>
                        <div>
                            {data.members !== null &&
                                // Special case for v7 index 0 which doesn't show the select
                                !(verticalKey === 'v7' && index === 0) && (
                                    <select
                                        value={data.members}
                                        onChange={(e) => handleTeamSizeChange(verticalKey, index, e.target.value)}
                                        className="rounded-lg"
                                    >
                                        <option value={0} disabled={true}>Select Team Size</option>
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                        <option value={"4"}>4</option>
                                        <option value={"5"}>5</option>
                                    </select>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


    return (
        <FormWrapper title="Events">
            {Object.keys(verticalTitles).map(key => (
                <EventSection
                    key={key}
                    verticalKey={key as VerticalKey}
                    title={verticalTitles[key as VerticalKey]}
                />
            ))}

            <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                Price:₹ {price}
            </div>
        </FormWrapper>
    )
}