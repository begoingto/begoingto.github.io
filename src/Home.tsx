import HeroSection from "./components/HeroSection.tsx";
import {useEffect} from "react";

function Home() {

    useEffect(() => {
        document.title = 'Begoingto DevOps Engineer';
    }, []);

    return (
        <>
            <HeroSection />
        </>
    );
}

export default Home;