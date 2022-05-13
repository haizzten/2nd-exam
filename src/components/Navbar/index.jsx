import { IoPricetagsOutline, IoHomeOutline } from "react-icons/io5";
import { IoMdOptions } from "react-icons/io";
import { IconContext } from "react-icons";
const Navbar = (props) => {
    return (
        <>
            <div
                className="w-full flex justify-between h-24 bg-slate-500 text-white"
                id="nav-bar"
            >
                <div className="flex items-center grow ml-3 p-4 h-full">
                    <div className="logo">
                        <object
                            type="image/svg+xml"
                            data="./asset/logo-tps.svg"
                            className="d-inline h-16"
                        >
                            TPS Logo
                        </object>
                    </div>
                    <a
                        href="#"
                        className="item flex ml-5 items-center font-semibold"
                    >
                        <IoHomeOutline className="text-item-icon mx-2 scale-110" />
                        Home
                    </a>
                    <a
                        href="#"
                        className="item flex ml-5 items-center font-semibold"
                    >
                        <IoPricetagsOutline className="text-item-icon mx-2 scale-110" />
                        Agreements
                    </a>
                </div>
                <div className="flex grow-0 mr-8 items-center">
                    <div className="flex flex-col mr-8">
                        <a
                            href="#"
                            id="user=name font-bold"
                            className="user-name font-bold"
                        >
                            Panduit
                        </a>
                        <label htmlFor="user-name">
                            Good after noon, Megan
                        </label>
                    </div>
                    <IconContext.Provider
                        value={{ className: "stroke-2 h-12" }}
                    >
                        <IoMdOptions className="rotate-90 " />
                    </IconContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Navbar;
