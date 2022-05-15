import { SmallButton } from "../../components/Button";
import {
    CgPushChevronLeft,
    CgChevronLeft,
    CgChevronRight,
    CgPushChevronRight,
} from "react-icons/cg";

function Paging({ ...props }) {
    return (
        <div className="flex justify-end bg-white p-2">
            <div className="flex justify-between">
                <SmallButton>
                    <CgPushChevronLeft />
                </SmallButton>
                <SmallButton>
                    <CgChevronLeft />
                </SmallButton>
                <span>dfdfd</span>
                <SmallButton>
                    <CgChevronRight />
                </SmallButton>
                <SmallButton>
                    <CgPushChevronRight />
                </SmallButton>
            </div>
        </div>
    );
}

export default Paging;
