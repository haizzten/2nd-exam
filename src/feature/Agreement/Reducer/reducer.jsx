import { TOGGLE } from "./constant";

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
