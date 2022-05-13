import { useEffect, useState } from "react";
import FieldsList from "./FieldsList";
import TableHeader from "./TableHeader";
const initValue = [
    { name: "Status", inputType: "text" },
    { name: "Quote Number", inputType: "text" },
    { name: "Agreement Name", inputType: "text" },
    { name: "Agreement Type", inputType: "text" },
    { name: "Distributor Name", inputType: "text" },
    { name: "Effective Date", inputType: "date" },
    { name: "Expiration Date", inputType: "date" },
    { name: "Created Date", inputType: "date" },
    { name: "Days Until Expiration", inputType: "text" },
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
function Agreements() {
    const [AgreementFields, setAgreementFields] = useState([]);
    useEffect(() => {
        console.log("name:", AgreementFields);

        setAgreementFields(initValue);
        console.log("name:", AgreementFields);
    }, []);

    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="w-5/6 flex h-min overflow-x-scroll rounded-t-md">
                {AgreementFields.map((field, index) => {
                    return (
                        <TableHeader
                            key={index}
                            name={field.name}
                            inputType={field.inputType}
                        ></TableHeader>
                    );
                })}
            </div>
            <div className="w-1/6 flex">
                <div className="flex flex-col">
                    <FieldsList></FieldsList>
                </div>
            </div>
        </div>
    );
}
export default Agreements;
