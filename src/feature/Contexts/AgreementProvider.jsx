import { useContext } from "react";
import AgreementContext from "./AgreementContext";
function AgreementProvider({ children , ...props}) {
    return (
        <AgreementContext.Provider value={props.data}>
            {children}
        </AgreementContext.Provider>
    );
}

export default AgreementProvider;
