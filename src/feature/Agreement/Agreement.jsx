import { useContext, useRef, useState } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import FieldsList from "./FieldsList";
import ColumnData from "./ColumnData";
import TableHeader from "./TableHeader";
import Paging from "./Paging";
import Button from "../../components/Button";
import DataSeed from "../DataSeed";
function Agreements({ ...props }) {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(22);
    const total = DataSeed.length;
    const [showList, setShowList] = useState(true);

    const [AgreementFields, dispatch] = useContext(AgreementContext);
    // console.log("LOG at agreement", AgreementFields);

    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="flex-col w-full">
                {/* <div className="flex relative justify-start "> */}
                <div className="flex relative justify-start overflow-hidden ">
                    <div
                        className={`transition-all duration-500 h-min rounded-t-md basis-96
                        ${showList ? "w-agreement-table" : "w-full"} `}
                    >
                        <div className="flex overflow-x-auto">
                            {AgreementFields.map((field, index) => {
                                return (
                                    <>
                                        {field.checked && (
                                            <div className="flex-col">
                                                <TableHeader
                                                    key={index}
                                                    name={field.name}
                                                    inputType={field.inputType}
                                                ></TableHeader>
                                                <div className="flex">
                                                    <ColumnData
                                                        start={start}
                                                        count={count}
                                                        fieldName={field.name}
                                                    ></ColumnData>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className={`basis-52 shrink-0 grow-0 flex-col px-3 transition-all duration-100 ${
                            showList ? "" : "translate-x-full"
                        } `}
                    >
                        <FieldsList></FieldsList>
                    </div>
                </div>

                <Paging
                    start={start}
                    setStart={setStart}
                    count={count}
                    setCount={setCount}
                    total={total}
                ></Paging>
                <Button
                    onClick={() => {
                        setShowList((prev) => !prev);
                    }}
                >
                    show/hide
                </Button>
            </div>
        </div>
    );
}
export default Agreements;
