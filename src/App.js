import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Agreements from "./feature/Agreement/Agreement";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <Agreements></Agreements>
        </>
    );
}
