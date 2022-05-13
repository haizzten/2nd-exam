import { ADD, REMOVE, SET, TOGGLE } from "./constant";
function setFields(payload) {
    return {type: SET, payload}
}
function addField(payload) {
    return {type: ADD,  payload}
}
function removeField(payload) {
    return {type: REMOVE,  payload}
}
function toggleField(payload) {
    return {type: TOGGLE, payload}
}

export {setFields, addField, removeField, toggleField}
