import { FILTER, ORDER, RESET } from "./constant";
function filter(payload) {
    return { type: FILTER, payload: payload };
}
function order(payload) {
    return { type: ORDER, payload: payload };
}
function reset() {
    return { type: RESET };
}
export { filter, order, reset };
