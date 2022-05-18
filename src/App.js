import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Agreements from "./feature/Agreement/Agreement";
import AgreementProvider from "./feature/Contexts/AgreementProvider";
import ColumnDataProvider from "./feature/Contexts/ColumnDataProvider";
import FilterProvider from "./feature/Contexts/FilterProvider";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <AgreementProvider>
                <ColumnDataProvider>
                    {" "}
                    <FilterProvider>
                        <Agreements></Agreements>
                    </FilterProvider>
                </ColumnDataProvider>
            </AgreementProvider>
        </>
    );
}
