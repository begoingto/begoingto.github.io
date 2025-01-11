import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./langs/en.json";
import kh from "./langs/kh.json";

/************ Config Object ************
const kh = {
    home: 'ទំព័រដើម',
    homeDesc: "ខ្ញុំពេញចិត្តនឹងការអភិវឌ្ឍន៍គេហទំព័រ និងការបង្កើនប្រសិទ្ធភាពដំណើរការចែកចាយកម្មវិធី ដែលធ្វើអោយប្រសើរឡើងនូវប្រសិទ្ធភាពប្រតិបត្តិការ ការងារស្វ័យប្រវត្តិ ការអនុវត្តវិធានការសុវត្ថិភាពដ៏រឹងមាំ និងធានាការរួមបញ្ចូលយ៉ាងរលូនរវាងការអភិវឌ្ឍន៍ និងបរិស្ថានផលិតកម្ម។",
    experience: "បទពិសោធន៍",
    project: "គម្រោង",
    about: "អំពីខ្ញុំ",
    mySocial: 'បណ្តាញសង្គមរបស់ខ្ញុំ',
    headline: 'សូមស្វាគមន៍មកកាន់ វេបសាយរបស់ខ្ញុំបាទ',
    messageCount: '{{count}} neue Nachricht',
    messageCount_plural: '{{count}} neue Nachrichten',
};

const en = {
    home: 'Home',
    homeDesc: "I am passionate about web development and optimizing software delivery processes that improving operational efficiency, automating tasks, implementing robust security measures, and ensuring seamless integration between development and production environments.",
    experience: "Experience",
    project: "Project",
    about: "About",
    mySocial: 'My Social Media',
    headline: "Welcome's to <span class='bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text'>BEGOINGTO DevOps EngineeR</span>",
    messageCount: '{{count}} new message',
    messageCount_plural: '{{count}} new messages',
};
*/

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