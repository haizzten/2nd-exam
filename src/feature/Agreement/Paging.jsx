import { SmallButton } from "../../components/Button";
import ColumnDataContext from "../Contexts/ColumnDataContext";

import {
    CgPushChevronLeft,
    CgChevronLeft,
    CgChevronRight,
    CgPushChevronRight,
} from "react-icons/cg";
import { useContext } from "react";

function Paging({ start, setStart, count, setCount, ...props }) {
    const [ColumnData, dispatchColumnData] = useContext(ColumnDataContext);

    const total = ColumnData.length;

    if (start > total) setStart(0);
    let canNext = start + count < total;
    let canPrev = start >= count;
    let currentPage = 1 + start / count;
    let totalPages = Math.ceil(total / count);
    function goPrev() {
        if (canPrev) setStart((start) => (start -= count));
    }
    function goNext() {
        if (canNext) setStart((start) => (start += count));
    }
    function goFirst() {
        if (canPrev) setStart(0);
    }
    function goLast() {
        if (canNext) setStart((Math.ceil(total / count) - 1) * count);
    }
    return (
        <div className="flex justify-end bg-white p-2">
            <div className="flex justify-between">
                <SmallButton disable={!canPrev} onClick={goFirst}>
                    <CgPushChevronLeft className={`${canPrev ? "" : ""}`} />
                </SmallButton>
                <SmallButton disable={!canPrev} onClick={goPrev}>
                    <CgChevronLeft className={`${canPrev ? "" : ""}`} />
                </SmallButton>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <SmallButton disable={!canNext} onClick={goNext}>
                    <CgChevronRight className={`${canNext ? "" : ""}`} />
                </SmallButton>
                <SmallButton disable={!canNext} onClick={goLast}>
                    <CgPushChevronRight className={`${canNext ? "" : ""}`} />
                </SmallButton>
            </div>
        </div>
    );
}

export default Paging;
