import { TOGGLE } from "./constant";

function toggleField(payload) {
    return { type: TOGGLE, payload };
}

export { toggleField };
