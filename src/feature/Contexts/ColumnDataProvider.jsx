import { useReducer } from "react";
import columnDataReducer from "../Agreement/ColumnDataReducer/reducer";
import DataSeed from "../DataSeed";
import ColumnDataContext from "./ColumnDataContext";

function ColumnDataProvider({ children }) {
    const [columnData, dispatchColumnData] = useReducer(
        columnDataReducer,
        DataSeed
    );
    console.log("2222");
    return (
        <ColumnDataContext.Provider value={[columnData, dispatchColumnData]}>
            {children}
        </ColumnDataContext.Provider>
    );
}
export default ColumnDataProvider;
