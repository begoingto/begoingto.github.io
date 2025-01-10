import Tilt from "react-parallax-tilt";
import {twMerge} from "tailwind-merge";

function ImgTilt(props: { src: string, className?: string }) {
    return (
        <Tilt>
            <img
                alt=""
                src={props.src}
                className={twMerge("aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 p-1", props.className)}
            />
        </Tilt>
    );
}

export default ImgTilt;