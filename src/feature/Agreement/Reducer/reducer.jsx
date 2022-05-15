import { TOGGLE } from "./constant";

const initValue = [
    { inputType: "text", checked: true, name: "Status" },
    { inputType: "text", checked: true, name: "Quote Number" },
    { inputType: "text", checked: true, name: "Agreement Name" },
    { inputType: "text", checked: true, name: "Agreement Type" },
    { inputType: "text", checked: true, name: "Distributor Name" },
    { inputType: "date", checked: true, name: "Effective Date" },
    { inputType: "date", checked: true, name: "Expiration Date" },
    { inputType: "date", checked: true, name: "Created Date" },
    { inputType: "text", checked: true, name: "Days Until Expiration" },
];

function reducer(fieldList, action) {
    console.log("LOG at  Reducer");
    switch (action.type) {
        case TOGGLE: {
            let index = action.payload;
            const newFieldList = [...fieldList];
            console.log(newFieldList);

            newFieldList[index].checked = !newFieldList[index].checked;
            return newFieldList;
            break;
        }
        default:
            console.log("DEFAULT", action);
    }
}
export default reducer;
export { initValue };
