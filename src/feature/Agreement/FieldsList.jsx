import { useContext, useEffect, useState } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import { toggleField } from "./Reducer/action";

function FieldsList() {
    let [FieldList, dispatch] = useContext(AgreementContext);

    console.log("LOG at  Field List", FieldList);

    function handleCheck(e) {
        dispatch(toggleField(e.target.id.substring(4)));
    }

    return (
        <>
            {FieldList.map((field, index) => {
                return (
                    <div className="flex items-center">
                        <input
                            key={index}
                            type={"checkbox"}
                            id={"item" + index}
                            checked={field.checked}
                            className="m-3 scale-150 cursor-pointer"
                            onChange={handleCheck}
                        />

                        <label
                            className="shrink-0 text-sm"
                            htmlFor={"item" + index}
                        >
                            {field.name}
                        </label>
                    </div>
                );
            })}
        </>
    );
}
export default FieldsList;
