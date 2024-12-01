import Image from "next/image";

export default function Introduction() {
    return (
        <div 
        className="col-span-8 grid grid-cols-4 relative componentStyle overflow-hidden p-12 sm:p-14 md:text-nowrap shadow-boxShadow 
        md:col-span-5">

            <video
                src="/mechabg.mp4"
                autoPlay loop muted
                className="absolute inset-0 object-fit z-[-1] w-full h-full object-fill brightness-75"
            />


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
    )
}
