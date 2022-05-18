import { useContext, useEffect, useRef, useState } from "react";
import FieldsCheckList from "./FieldsList";
import Paging from "./Paging";
import Button from "../../components/Button";
import AgreementTable from "./AgreementTable";
function Agreements({ ...props }) {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(20);
    const [isOverflow, setIsOverFlow] = useState();
    const [showList, setShowList] = useState(true);
    const myTable = useRef();

    useEffect(() => {
        setIsOverFlow(isOverflowing(myTable.current));
        // console.log("overflow?", isOverflow, myTable.current.scrollWidth);
    }, [showList]);

    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="flex-col w-full">
                <div
                    className="flex relative justify-start overflow-hidden "
                    ref={myTable}
                >
                    <div
                        className={`transition-all duration-500 h-min rounded-t-md flex overflow-x-auto
                        ${
                            showList
                                ? isOverflow
                                    ? "w-agreement-table"
                                    : "w-full"
                                : "w-full"
                        } `}
                    >
                        <AgreementTable
                            start={start}
                            count={count}
                        ></AgreementTable>
                    </div>
                    <div
                        className={`basis-52 shrink-0 grow-0 flex-col px-3 transition-all duration-100 ${
                            showList ? "" : "translate-x-full"
                        } `}
                    >
                        <FieldsCheckList></FieldsCheckList>
                    </div>
                </div>
                <Paging
                    start={start}
                    setStart={setStart}
                    count={count}
                    setCount={setCount}
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
function isOverflowing(element) {
    return element.scrollWidth > element.offsetWidth;
}
export default Agreements;
