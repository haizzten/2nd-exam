import { useContext, useEffect, useState } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import { addField, toggleField } from "./Reducer/action";

function FieldsList() {
    let [FieldList, dispatch] = useContext(AgreementContext);
    // useEffect(() => {
    //     const fieldsName = FieldList;
    // }, []);

    console.log("list-data", FieldList);

    function handleCheck(e) {
        // dispatch((prev) => {
        //     return prev.filter((fieldName) => fieldName !== label.innerText);
        // });
        dispatch(toggleField(e.target.id.substring(4)));
    }

    return (
        <div className="flex flex-col" >
            {FieldList.map((field, index) => {
                return (
                    <div className="flex items-center">
                        <input
                            key={index}
                            type={"checkbox"}
                            id={"item" + index}
                            checked={field.checked}
                            className="m-3 scale-200"
                            onChange={handleCheck}
                        />

                        <label className="shrink-0" htmlFor={"item" + index}>
                            {field.name}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
export default FieldsList;
