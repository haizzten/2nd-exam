import DataSeed from "../DataSeed";

function ColumnData({ fieldName, start, count, ...props }) {
    // let fieldNames = [];
    // for (const [key, value] of Object.entries(DataSeed[0])) {
    //     fieldNames.push(key);
    // }
    // console.log("LOG at Table body :", fieldNames);
    return (
        <>
            {/* {fieldNames.map((fieldName, index) => {
                return ( */}
            <div className={` flex-col w-full`}>
                {DataSeed.slice(start, count + start).map((field, index) => {
                    let data = field[fieldName];
                    let stripped = index % 2 == 0;
                    return (
                        <div
                            className={`${
                                stripped ? "bg-white" : "bg-slate-100"
                            } ${
                                fieldName == "Status"
                                    ? data == "Invalid"
                                        ? "text-rose-600"
                                        : data == "Published"
                                        ? "text-green-600"
                                        : "text-zinc-400"
                                    : ""
                            } w-full px-4 py-2 `}
                        >
                            {data}
                        </div>
                    );
                })}
            </div>
            {/* );
            })} */}
        </>
    );
}

export default ColumnData;
