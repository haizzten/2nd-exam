import DataSeed from "../../DataSeed";
import sub from "date-fns/sub";
import { FILTER, ORDER, RESET } from "./constant";

export default function columnDataReducer(state, action) {
    switch (action.type) {
        case FILTER:
            const filters = action.payload;
            let tmp = DataSeed;
            if (!filters.length) return [...tmp];
            filters.forEach((filter) => {
                const inputType = filter.inputType;
                const fieldName = filter.fieldName;
                const valueToFilter = filter.valueToFilter;

                switch (inputType) {
                    case "text":
                        const filteredData = tmp.filter((field) =>
                            field[fieldName].includes(valueToFilter)
                        );
                        console.log("filteredData: ", filteredData);
                        tmp = [...filteredData];
                        console.log("tpm <-> filteredData: ", tmp);
                        break;
                    case "date":
                        tmp = tmp.filter(
                            (field) =>
                                new Date(field[filter.fieldName]) -
                                    sub(new Date(valueToFilter), {
                                        hours: 7,
                                    }) ==
                                0
                        );
                        break;
                }
            });
            return tmp;
        case ORDER:
            break;
        case RESET:
            return DataSeed;
        default:
    }
}
