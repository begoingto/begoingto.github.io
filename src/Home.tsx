import {createElement} from "react";
import {IconType} from "react-icons";
import {
    FaGithub,
    FaGitlab,
    FaLinkedin,
    FaSquareFacebook,
    FaSquareXTwitter,
    FaTelegram,
    FaYoutube
} from "react-icons/fa6";
import HeroSection from "./components/HeroSection.tsx";

function Home() {
    return (
        <>
            <HeroSection />
            <section className="bg-gray-800 text-white h-screen flex justify-center items-center">
                <div className="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16 lg:px-12">
                    <a
                        href="#"
                        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 rounded-full bg-gray-200  dark:bg-gray-800 dark:text-gray-200"
                        role="alert"
                    >
                          <span className="text-xs bg-cyan-600 rounded-full text-white px-4 py-1.5 mr-3">
                            New
                          </span>
                        <span className="text-sm font-medium">
                            Begoingto is out! See what's new
                          </span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <h1 className="text-5xl p-4 text-center font-bold text-cyan-600">
                        BEGOINGTO DevOps Engineer
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        professional who works with software development teams to create and maintain applications that run
                        on cloud platforms.
                    </p>
                    <div
                        className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a
                            href="#personal"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 -ml-1 w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.8385 2H8.16146C7.63436 1.99999 7.17952 1.99997 6.80498 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698C5.07355 2.6146 4.6146 3.07355 4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80498C3.99997 5.17953 3.99998 5.63429 4 6.1614V19C4 20.6569 5.34315 22 7 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H7C6.96549 20 6.93138 19.9983 6.89776 19.9948C6.3935 19.9436 6 19.5178 6 19C6 18.931 6.007 18.8636 6.02032 18.7985C6.11357 18.3428 6.51675 18 7 18L19.002 18C19.5534 17.9989 20 17.5516 20 17V6.16146C20 5.63437 20 5.17951 19.9694 4.80498C19.9371 4.40963 19.8658 4.01641 19.673 3.63803C19.3854 3.07355 18.9265 2.6146 18.362 2.32698C17.9836 2.13419 17.5904 2.06287 17.195 2.03057C16.8205 1.99997 16.3657 1.99999 15.8385 2Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.99967 7.5C9.99967 6.39543 10.8951 5.5 11.9997 5.5C13.1042 5.5 13.9997 6.39543 13.9997 7.5C13.9997 8.60457 13.1042 9.5 11.9997 9.5C10.8951 9.5 9.99967 8.60457 9.99967 7.5Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M11.9997 10.5C10.5975 10.5 9.36381 11.2215 8.64964 12.3136C8.46706 12.5927 8.37577 12.7323 8.39775 13.0658C8.41276 13.2934 8.61206 13.6619 8.79439 13.7991C9.06142 14 9.32182 14 9.8426 14H14.1569C14.6777 14 14.9381 14 15.2051 13.7991C15.3874 13.6619 15.5867 13.2934 15.6017 13.0658C15.6237 12.7323 15.5324 12.5927 15.3498 12.3136C14.6357 11.2215 13.402 10.5 11.9997 10.5Z"
                                    fill="black"
                                />
                                <path
                                    d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44771 20 7 20H18V18H7Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Details
                        </a>
                        <a
                            href="#experience"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Experience
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span className="font-semibold text-gray-400 uppercase">Follow Me</span>
                        <div
                            className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between"
                        >
                            <FollowMeItem
                                href={"https://github.com/begoingto"}
                                icon={FaGithub}
                                text={"Github"}
                            />
                            <FollowMeItem
                                href={"https://gitlab.com/michdevops"}
                                icon={FaGitlab}
                                iconColor={"text-orange-600"}
                                text={"Gitlab"}
                            />
                            <FollowMeItem
                                href={"https://www.youtube.com/@begoingto2485"}
                                icon={FaYoutube}
                                iconColor={"text-red-500"}
                                text={"Youtube"}
                            />
                            <FollowMeItem
                                href={"https://twitter.com/begoingtoMe"}
                                icon={FaSquareXTwitter}
                                iconColor={"text-gray-500"}
                                text={"Twitter"}
                            />
                            <FollowMeItem
                                href={"https://www.facebook.com/begoingto.me"}
                                icon={FaSquareFacebook}
                                iconColor={"text-blue-500"}
                                text={"Facebook"}
                            />
                            <FollowMeItem
                                href={"https://t.me/mich_neuy"}
                                icon={FaTelegram}
                                iconColor={"text-cyan-600"}
                                text={"Telegram"}
                            />
                            <FollowMeItem
                                href={"https://www.linkedin.com/in/mich-n-933b041aa"}
                                icon={FaLinkedin}
                                iconColor={"text-blue-600"}
                                text={"Linkedin"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

const FollowMeItem = ({href, icon, text, iconColor}: { href: string, icon?: IconType, text: string, iconColor?: string }) => {
    const Icon = icon ? createElement(icon, {className: "w-16 h-16 "+iconColor}) : null;
    return (
        <a
            href={href}
            target={"_blank"}
            className="mr-5 mb-5 flex flex-col items-center lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
        >
            {Icon} <span className={"text-lg"}>{text}</span>
        </a>
    )
}