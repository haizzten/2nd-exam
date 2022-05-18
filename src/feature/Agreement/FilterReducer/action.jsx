import { ADD, REMOVE } from "./constant";

const addFilter = (payload) => ({
    type: ADD,
    payload,
});
const removeFilter = (payload) => ({
    type: REMOVE,
    payload,
});
export { addFilter, removeFilter };
