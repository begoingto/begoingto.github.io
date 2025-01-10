import {useTranslation} from "react-i18next";
import {TypeAnimation} from "react-type-animation";
import BParticles from "./BParticles.tsx";
import ImgTilt from "./ImgTilt.tsx";

function HeroSection() {

    const {t, i18n} = useTranslation();

    return (
        <section className="relative isolate">
            <img src="/kbach.png" className={"w-20 absolute top-0 left-0"} alt="kbach"/>
            <img src="/kbach.png" className={"w-20 absolute top-0 right-0"} alt="kbach"/>
            <BParticles/>
            <svg
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-blue-900 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-900">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%"
                      strokeWidth={0}/>
            </svg>
            <div
                aria-hidden="true"
                className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                    }}
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="relative w-full max-w-2xl lg:shrink-0 xl:max-w-3xl z-[2]">
                            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl font-title sm:leading-[1.5] text-center bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                                {i18n.language == 'en' ? (
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        sequence={[
                                            500,
                                            'Welcome', // initially rendered starting point
                                            1000,
                                            'Welcome\'s to',
                                            1000,
                                            'Welcome\'s to BEGOINGTO ',
                                            1000,
                                            'Welcome\'s to BEGOINGTO DevOps EngineeR',
                                            500,
                                        ]}
                                        speed={30}
                                        repeat={Infinity}
                                    />
                                ) : (
                                    <span>
                                        <TypeAnimation
                                            preRenderFirstString={true}
                                            sequence={[
                                                500,
                                                'សូមស្វាគមន៍', // initially rendered starting point
                                                1000,
                                                'សូមស្វាគមន៍មកកាន់ ',
                                                1000,
                                                'សូមស្វាគមន៍មកកាន់ BEGOINGTO',
                                                1000,
                                                'សូមស្វាគមន៍មកកាន់ BEGOINGTO DevOps EngineeR',
                                                500,
                                            ]}
                                            speed={30}
                                            repeat={Infinity}
                                        />
                                    </span>
                                )}
                                {/*<Trans i18nKey="homeDesc" components={{ span: <span /> }}></Trans>*/}
                            </h1>
                            <p className="mt-6 text-base lg:text-2xl text-slate-300 sm:max-w-md lg:max-w-none font-base leading-[1.6]">
                                {t('homeDesc')}
                            </p>
                            <div className="mt-10 flex justify-center items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md font-base bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                                    Live demo <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div
                                className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div className="relative">
                                    <ImgTilt src={"/me/3.jpg"} className={"bg-gradient-to-b img-rotate-y"} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div className="relative">
                                    <ImgTilt src={"/me-with-laptop.jpg"} className={"object-right"} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="relative">
                                    <ImgTilt src={"/me/2.jpg"} className={"img-rotate-x"} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div className="relative">
                                    <ImgTilt src={"/me/4.jpg"} className={"img-rotate-x"} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="relative">
                                    <ImgTilt src={"/me/1.jpg"} className={"img-rotate-y"} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;