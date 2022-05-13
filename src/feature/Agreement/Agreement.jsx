import { useEffect, useReducer, useState } from "react";
import AgreementProvider from "../Contexts/AgreementProvider";
import FieldsList from "./FieldsList";
import { setFields } from "./Reducer/action";
import reducer from "./Reducer/reducer";
import TableHeader from "./TableHeader";
const initValue = [
    { name: "Status", inputType: "text", checked: true },
    { name: "Quote Number", inputType: "text", checked: true },
    { name: "Agreement Name", inputType: "text", checked: true },
    { name: "Agreement Type", inputType: "text", checked: true },
    { name: "Distributor Name", inputType: "text", checked: true },
    { name: "Effective Date", inputType: "date", checked: true },
    { name: "Expiration Date", inputType: "date", checked: true },
    { name: "Created Date", inputType: "date", checked: true },
    { name: "Days Until Expiration", inputType: "text", checked: true },
];

const fakeData = [
    {
        Status: "",
        "Quote Number": "",
        "Agreement Name": "",
        "Agreement Type": "",
        "Distributor Name": "",
        "Effective Date": "",
        "Expiration Date": "",
        "Created Date": "",
        "Days Until Expiration": "",
    },
];
const fieldsName = [
    "Status",
    "Quote Number",
    "Agreement Name",
    "Agreement Type",
    "Distributor Name",
    "Effective Date",
    "Expiration Date",
    "Created Date",
    "Days Until Expiration",
];
function Agreements() {
    const [AgreementFields, dispatch] = useReducer(reducer, initValue);

    console.log("agreement fields: ", AgreementFields);
    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="w-5/6 flex h-min overflow-x-scroll rounded-t-md">
                {AgreementFields.map((field, index) => {
                    return (
                        field.checked && (
                            <TableHeader
                                key={index}
                                name={field.name}
                                inputType={field.inputType}
                            ></TableHeader>
                        )
                    );
                })}
            </div>
            <div className="w-1/6 flex">
                <AgreementProvider data={[AgreementFields, dispatch]}>
                    <FieldsList></FieldsList>
                </AgreementProvider>
            </div>
        </div>
    );
}
export default Agreements;
