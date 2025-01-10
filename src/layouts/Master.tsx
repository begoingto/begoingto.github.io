import {NavLink, Outlet} from "react-router";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useState} from "react";
import {useTranslation, withTranslation} from "react-i18next";


function Master() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { t, i18n } = useTranslation();
    //
    const changeLanguage = (lng: string) => {
        localStorage.setItem('lang', lng);
        i18n.changeLanguage(lng);
    }

    const navigation = [
        {name: t('home'), href: '/', color: 'text-pink-600'},
        {name: t('experience'), href: '#', color: 'text-green-600'},
        {name: t('project'), href: '#', color: 'text-blue-600'},
        {name: t('about'), href: '#', color: 'text-yellow-600'},
    ]

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global"
                     className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="lg:flex-1"></div>
                    <div className="absolute top-0">
                        <NavLink to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="/logo.png"
                                className="h-14 lg:h-20 w-auto rounded-2xl img-rotate-y"
                            />
                        </NavLink>
                    </div>
                    <div className="flex lg:hidden">
                        <div className={"mr-2"}>
                            <button onClick={() => changeLanguage('kh')} type="button"
                                    className={`border border-blue-600 rounded p-0.5 shadow-md ${i18n.language == 'kh' && 'hidden'}`}>
                                <img className={"w-8"} src="kh.jpg" alt="KH"/>
                            </button>
                            <button onClick={() => changeLanguage('en')} type="button"
                                    className={`border border-blue-600 rounded p-0.5 shadow-md ${i18n.language == 'en' && 'hidden'}`}>
                                <img className={"w-8"} src="en.jpg" alt="KH"/>
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <NavLink key={item.name} to={item.href}
                                     className={`font-extrabold leading-6 ${item.color} uppercase font-title2`}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button onClick={() => changeLanguage('kh')} type="button"
                                className={`border border-blue-600 rounded p-0.5 shadow-md ${i18n.language == 'kh' && 'hidden'}`}>
                            <img className={"w-10"} src="kh.jpg" alt="KH"/>
                        </button>
                        <button onClick={() => changeLanguage('en')} type="button"
                                className={`border border-blue-600 rounded p-0.5 shadow-md ${i18n.language == 'en' && 'hidden'}`}>
                            <img className={"w-10"} src="en.jpg" alt="KH"/>
                        </button>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavLink to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="/logo.png"
                                    className="h-8 w-auto rounded-lg"
                                />
                            </NavLink>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-red-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 font-extrabold leading-6 ${item.color} uppercase font-title2`}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default withTranslation()(Master);