import Image from 'next/image'

export default function Socials() {
    return (
        <div className="fixed flex flex-col gap-2 right-6 bottom-32">
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover">
                <Image
                src="/whatsapp-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                className=""
                />
            </div>
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover">
                <Image
                src="/instagram-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                className=""
                />
            </div>
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover">
                <Image
                src="/mail-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                className=""
                />
            </div>
        </div>
    )
}