import i18next from "i18next";
import {initReactI18next} from "react-i18next";

const kh = {
    home: 'ទំព័រដើម',
    homeDesc: "អ្នកជំនាញដែលធ្វើការជាមួយក្រុមអភិវឌ្ឍន៍កម្មវិធីដើម្បីបង្កើត និងថែទាំកម្មវិធីដែលដំណើរការលើវេទិកាពពក។",
    experience: "បទពិសោធន៍",
    project: "គម្រោង",
    about: "អំពីខ្ញុំ",
    greeting: 'Hallo Welt!',
    headline: 'សូមស្វាគមន៍មកកាន់ វេបសាយរបស់ខ្ញុំបាទ',
    messageCount: '{{count}} neue Nachricht',
    messageCount_plural: '{{count}} neue Nachrichten',
};

const en = {
    home: 'Home',
    homeDesc: "A DevOps Engineer who works with a team of experts to create and maintain software applications that run on the cloud.",
    experience: "Experience",
    project: "Project",
    about: "About",
    greeting: 'Hello world!',
    headline: "Welcome's to BEGOINGTO DEVOPS ENGINEER",
    messageCount: '{{count}} new message',
    messageCount_plural: '{{count}} new messages',
};

i18next.use(initReactI18next).init({
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: en,
        },
        kh: {
            translation: kh,
        },
    },
});

export default i18next;