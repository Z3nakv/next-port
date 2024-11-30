import Image from "next/image";


export default function Introduction() {
    return (
        <div className="flex justify-center items-center relative componentStyle overflow-hidden col-span-8 text-nowrap p-10">

            <video
                src="/mechabg.mp4"
                autoPlay loop muted
                className="absolute inset-0 object-fit z-[-1] w-full h-full object-fill"
            />

            <div className="flex justify-center items-center gap-0 text-white">
                <div className="relative h-28 w-28 grid place-content-center">
                    <Image
                        src='/mechaPixel.gif'
                        alt='mecha-pixel-robot'
                        fill
                        sizes="30vw"
                        className="object-contain w-auto h-auto"
                        priority
                    />
                </div>
                <div className="text-xl flex flex-col items-center gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[28px]">{'<'}Hi There, Im Adrian {'/>'}</p>
                    </div>
                    <div>
                        <p className="text-[20px]">FrontEnd Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
