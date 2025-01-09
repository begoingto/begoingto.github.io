import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        document.title = 'About - BEGOINGTO DEVOPS ENGINEER';
    }, []);
    return (
        <section className={"mx-auto max-w-7xl mt-20"}>
            <h1>About</h1>
        </section>
    )
}
