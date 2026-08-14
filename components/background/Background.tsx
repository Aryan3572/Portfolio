"use client"

export default function Background() {
    return(
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <div className="absolute inset-0 bg-[#F7F7F5]" />

            <div 
                className="
                    absolute left-1/2 top-[20%]   
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                "
                style={{
                    background: "radial-gradient(circle, rgba(212,212,212,0.5) 0%, rgba(247,247,245,0) 70%)"
                }}
            />

            <div
                className="
                    absolute
                    bottom-[-30%]
                    right-[-10%]
                    h-[700px]
                    w-[700px]
                    rounded-full
                "
                style={{
                    background: "radial-gradient(circle, rgba(163,163,163,0.4) 0%, rgba(247,247,245,0) 70%)"
                }}
            />
        </div>
    );
}