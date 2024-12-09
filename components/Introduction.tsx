
import Head from "next/head";
import Image from "next/image";

export default function Introduction() {
    
    return (
        <>

            <Head>
                <link rel="preload" href="/mechabg.mp4" as="video" />
                <link rel="preload" href="/mechaPixel.gif" as="image" />
            </Head>
            <div
                className="col-span-8 grid grid-cols-4 relative componentStyle overflow-hidden p-12 sm:p-14 md:text-nowrap shadow-boxShadow
            md:col-span-5">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 object-fill z-[-1] w-full h-full brightness-50"
            >
                <source src="/mechabg.mp4" type="video/mp4" />
            </video>
                <div className="col-span-1 md:row-start-1 row-end-3 mb-5 relative h-full grid place-content-center">
                    <Image
                        src='/mechaPixel.gif'
                        alt='mecha-pixel-robot'
                        fill
                        sizes="30vw"
                        className="object-contain w-full h-full"
                    // unoptimized
                    />
                </div>
                <div className="col-span-4 row-start-1 place-items-center place-content-end sm:place-content-start">
                    <p className="text-title">{'<'}Hi There, Im Adrian {'/>'}</p>
                </div>
                <div className="col-span-3 place-content-center text-wrap text-center mb-5">
                    <p className="text-subtitle">FrontEnd Software Developer</p>
                </div>
            </div>
        </>
    )
}
