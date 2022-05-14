import { useReducer } from "react";
import reducer, { initValue } from "../Agreement/Reducer/reducer";
import AgreementContext from "./AgreementContext";

function AgreementProvider({ children }) {
    console.log("LOG at  Agreement Provider");
    const [AgreementFields, dispatch] = useReducer(reducer, initValue);
    return (
        <AgreementContext.Provider value={[AgreementFields, dispatch]}>
            {children}
        </AgreementContext.Provider>
    );
}

export default AgreementProvider;
