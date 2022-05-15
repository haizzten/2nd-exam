import DataSeed from "../DataSeed";

function ColumnData({ fieldName, start, count, ...props }) {

    return (
        <>
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
        </>
    );
}

export default ColumnData;
