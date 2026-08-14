"use client"

export default function Background() {
    return(
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <div className="absolute inset-0 bg-[F7F7F5]" />

                <div className="
                absolute left-1/2 top-[20%]   
                h-[900px]
                w-[900px]
                -translate-x-1/2
                rounded-full
                bg-neutral-300/20
                blur-[180px]" />


            <div
                className="
                absolute
                bottom-[-30%]
                right-[-10%]
                h-[700px]
                w-[700px]
                rounded-full
                bg-neutral-400/15
                blur-[220px]
                "
            />
        </div>
    );
}