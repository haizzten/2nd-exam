import { useContext } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import FieldsList from "./FieldsList";
import TableHeader from "./TableHeader";

function Agreements() {
    const [AgreementFields, dispatch] = useContext(AgreementContext);
    console.log("LOG at  agreement", AgreementFields);
    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="w-5/6 flex h-min overflow-x-scroll rounded-t-md">
                {AgreementFields.map((field, index) => {
                    console.log("field", field);
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
                <FieldsList></FieldsList>
            </div>
        </div>
    );
}
export default Agreements;
