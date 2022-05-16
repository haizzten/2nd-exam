import { AiOutlineCheckSquare } from "react-icons/ai";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import DataSeed from "../DataSeed";

function ColumnData({ fieldName, start, count, ...props }) {
    return (
        <>
            <div className={` flex-col w-full`}>
                {DataSeed.slice(start, count + start).map((field, index) => {
                    let data = field[fieldName];
                    let stripped = index % 2 == 0;

                    if (fieldName == "Status") {
                        let returnedSpan;
                        switch (data) {
                            case "Published":
                                returnedSpan = (
                                    <span
                                        className={`text-green-600 w-full flex items-center`}
                                    >
                                        {data}{" "}
                                        <AiOutlineCheckSquare className="mx-2" />
                                    </span>
                                );
                                break;
                            case "Invalid":
                                returnedSpan = (
                                    <span
                                        className={`text-rose-600 w-full flex items-center`}
                                    >
                                        {data}{" "}
                                        <BsFillExclamationDiamondFill className="mx-2" />
                                    </span>
                                );
                                break;
                            case "Pending":
                                returnedSpan = (
                                    <span
                                        className={`text-zinc-600 w-full flex items-center`}
                                    >
                                        {data}
                                        <HiOutlineDotsCircleHorizontal className="mx-2" />
                                    </span>
                                );
                                break;
                            default:
                                returnedSpan = <span>error</span>;
                                break;
                        }
                        data = returnedSpan;
                    }

                    if (fieldName == "Agreement Name") {
                        let returnedSpan = (
                            <span className="text-teal-500">{data}</span>
                        );
                        data = returnedSpan;
                    }

                    return (
                        <div
                            className={`${
                                stripped ? "bg-white" : "bg-slate-100"
                            } flex items-center justify-start px-4 py-3`}
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
