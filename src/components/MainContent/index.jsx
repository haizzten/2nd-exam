import { IoPricetagsOutline, IoHomeOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { RiArticleLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";
import Button, { BorderButton } from "../Button";
let navHeight = document.querySelector("#nav-bar");
console.log(navHeight);
function MainContent() {
    return (
        <div className={`p-8 bg-back-page min-h-[100vh - ${navHeight}]`}>
            <div className="w-full flex relative flex-col h-full bg-white rounded-md p-4">
                <p className="font-semibold text-2xl border-b-2 border-b-cyan-700 text-label">
                    Welcome to Celerity Enterprises!
                </p>
                <p className="border-b-2 border-b-cyan-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, error. Fugit voluptatum, dignissimos tenetur
                    inventore facere autem aut omnis soluta.
                </p>
                <div className="flex">
                    <div className="flex flex-col lg:w-4/6 grow-0">
                        <div className="home-page-card">
                            <div className="flex">
                                <div className="shrink-0 flex justify-center items-center h-24 w-24">
                                    <IoPricetagsOutline className="scale-600 text-item-icon" />
                                </div>
                                <div className="pl-12 grow">
                                    <label htmlFor="">Agreements</label>
                                    <p className="mt-2 mr-5">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque voluptatum
                                        fuga voluptates minus odio veritatis.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                        <div className="home-page-card">
                            <div className="flex">
                                <div className="shrink-0 flex justify-center items-center h-24 w-24">
                                    <HiOutlineNewspaper className="scale-600 text-item-icon" />
                                </div>
                                <div className="pl-12 grow">
                                    <label htmlFor="">Claims</label>
                                    <p className="mt-2 mr-5">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque voluptatum
                                        fuga voluptates minus odio veritatis.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Button>Check Claims</Button>
                            </div>
                        </div>
                        <div className="home-page-card">
                            <div className="flex">
                                <div className="shrink-0 flex justify-center items-center h-24 w-24">
                                    <VscGraph className="scale-600 text-item-icon" />
                                </div>
                                <div className="pl-12 grow">
                                    <label htmlFor="">Reaports</label>
                                    <p className="mt-2 mr-5">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque voluptatum
                                        fuga voluptates minus odio veritatis.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Button>View Reports</Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col lg:w-2/6 grow-0 rounded-md bg-back-page mt-5 ml-5 h-min">
                        <div className="flex items-center justify-between w-full h-min p-5">
                            <span className="font-semibold text-2xl">
                                My workflow
                            </span>
                            <BorderButton></BorderButton>
                        </div>
                        <div className="task flex items-center justify-center p-3 mb-6 text-zinc-400">
                            There are no tasks asigned to you.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
