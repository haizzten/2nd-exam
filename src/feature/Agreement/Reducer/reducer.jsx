import { SET, ADD, REMOVE, TOGGLE } from "./constant";
function reducer(fieldList, action) {
    switch (action.type) {
        // case SET: {
        //     console.log("payload: ", fieldList, action.payload);
        //     break;
        // }
        // case ADD: {
        //     console.log("ADD -> payload: ", fieldList, action.payload);
        //     break;
        // }
        // case REMOVE: {
        //     console.log("REMOVE -> payload: ", fieldList, action.payload);
        //     return fieldList.filter(
        //         (field, index) => field.name !== action.payload
        //     );
        //     break;
        // }
        case TOGGLE: {
            let index = action.payload;
            console.log(fieldList[index].checked);
            // fieldList[index].checked = !fieldList[index].checked;
            return fieldList;
            break;
        }
        default:
            console.log("DEFAULT", action);
        // throw new Error("no such the action");
    }
}
export default reducer;
