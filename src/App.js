import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Agreements from "./feature/Agreement/Agreement";
import AgreementProvider from "./feature/Contexts/AgreementProvider";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <AgreementProvider>
                <Agreements></Agreements>
            </AgreementProvider>
        </>
    );
}
