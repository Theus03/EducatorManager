import Image from 'next/image'

export default function Socials() {
    return (
        <div className="fixed flex flex-col gap-2 right-6 bottom-16 max-[570px]:bottom-48">
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover max-[680px]:w-14">
                <Image
                src="whatsapp-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                />
            </div>
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover max-[680px]:w-14">
                <Image
                src="instagram-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                />
            </div>
            <div className="p-4 bg-brown rounded-lg cursor-pointer social-hover max-[680px]:w-14">
                <Image
                src="mail-fill.svg"
                alt="Border Top Page Left"
                width={36}
                height={36}
                />
            </div>
        </div>
    )
}