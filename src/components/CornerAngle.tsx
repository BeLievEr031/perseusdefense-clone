import clsx from "clsx";
import React from "react";

interface Iprop {
    className?: string;
    imgSrc: string;
}

function CornerAngle({ className = "hidden md:inline", imgSrc }: Iprop) {
    return (
        <React.Fragment>
            <img
                src={imgSrc}
                alt=""
                className={clsx("transition group-hover:translate-x-1 group-hover:translate-y-1 absolute top-0 left-0 z-[9999]", className)}
            />
            {/* Bottom Left */}
            <img
                src={imgSrc}
                alt=""
                className={clsx("transition group-hover:translate-x-1 group-hover:-translate-y-1 absolute bottom-0 left-0 -rotate-90", className)}
            />
            {/* Top Right */}
            <img
                src={imgSrc}
                alt=""
                className={clsx("transition group-hover:-translate-x-1 group-hover:translate-y-1 absolute top-0 right-0 rotate-90", className)}
            />
            {/* Bottom Right */}
            <img
                src={imgSrc}
                alt=""
                className={clsx("transition group-hover:-translate-x-1 group-hover:-translate-y-1 absolute bottom-0 right-0 -rotate-180", className)}
            />
        </React.Fragment>
    )
}

export default CornerAngle