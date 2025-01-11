import Tilt from "react-parallax-tilt";
import {twMerge} from "tailwind-merge";
import {Cloudinary} from "@cloudinary/url-gen";
import React from "react";
import {AdvancedImage} from "@cloudinary/react";

function ImgTilt(props: { src?: string, imgName?: string, className?: string }) {

    return React.createElement(
        Tilt,
        null,
        props.imgName && React.createElement(ImgCloudinary, {
            imgName: props.imgName,
            className: props.className
        }),
        props.src && React.createElement('img', {
            alt: '',
            src: props.src,
            className: twMerge(
                'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 p-1',
                props.className
            )
        })
    );
}

export default ImgTilt;

const ImgCloudinary = (props: { imgName?: string, className?: string }) => {
    const cld = new Cloudinary({cloud: {cloudName: 'dbiyupfpr'}});
    const img = cld
        .image(props.imgName);

    return React.createElement(
        AdvancedImage,
        {
            cldImg: img,
            alt: '',
            className: twMerge(
                'aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 p-1',
                props.className
            )
        }
    );
}