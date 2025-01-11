import HeroSection from "./components/HeroSection.tsx";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";


function Home() {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('home')}-BEGOINGTO DevOps Engineer</title>
            </Helmet>
            <HeroSection/>
            <div className="h-[50rem]"></div>
        </>
    );
}

export default Home;