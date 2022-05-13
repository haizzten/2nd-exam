import { useState } from "react";

function FieldsList() {
    const initList = [
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
    const [list, setList] = useState(initList);
    return list.map((field, index) => {
        return (
            <div className="flex items-center">
                <input
                    type={"checkbox"}
                    id={"item" + index}
                    className="m-3 scale-200"
                />

                <label className="shrink-0" htmlFor={"item" + index}>
                    {field}
                </label>
            </div>
        );
    });
}
export default FieldsList;
