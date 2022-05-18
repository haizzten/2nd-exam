import { ADD, REMOVE } from "./constant";
const initVal = [];

function filterReducer(filters, action) {
    const fieldName = action.payload.fieldName;
    switch (action.type) {
        case ADD: {
            const arr = filters.filter((ele) => ele.fieldName !== fieldName);
            console.log("filters in FilterReducer", filters);

            return [...arr, action.payload];
        }
        case REMOVE:
            console.log("REMOVE filter Reducer");
            return filters.filter(
                (ele) => ele.fieldName !== action.payload.fieldName
            );
        default:
            console.log("no such action");
    }
}
export { initVal };
export default filterReducer;
