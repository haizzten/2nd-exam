import { useReducer } from "react";
import checkListReducer, {
    initValue,
} from "../Agreement/CheckListReducer/reducer";
import AgreementContext from "./AgreementContext";

function AgreementProvider({ children }) {
    const [AgreementFields, dispatch] = useReducer(checkListReducer, initValue);
    return (
        <AgreementContext.Provider value={[AgreementFields, dispatch]}>
            {children}
        </AgreementContext.Provider>
    );
}

export default AgreementProvider;
