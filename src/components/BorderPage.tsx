import Image from "next/image";

export default function BorderPage() {
    return (
        <div>
            
      <Image
        src="/border-left-top.svg"
        alt="Border Top Page Left"
        width={164}
        height={164}
        className="
          2xl:flex 2xl:absolute 2xl:left-0 2xl:top-0
          xl:flex xl:absolute xl:left-0 xl:top-0 
          lg:flex lg:absolute lg:left-0 lg:top-0 
          md:hidden 
          sm:hidden
          max-[640px]:hidden"
        />
      <Image
        src="/border-right-top.svg"
        alt="Border Bottom Page Right"
        width={164}
        height={164}
        className="
          2xl:flex 2xl:absolute 2xl:right-0 2xl:top-0
          xl:flex xl:absolute xl:right-0 xl:top-0 
          lg:flex lg:absolute lg:right-0 lg:top-0 
          md:hidden 
          sm:hidden
          max-[640px]:hidden"
      />
      <Image
        src="/border-left-bottom.svg"
        alt="Border Bottom Page Left"
        width={164}
        height={164}
        className="
          2xl:flex 2xl:absolute 2xl:left-0 2xl:bottom-0
          xl:flex xl:absolute xl:left-0 xl:bottom-0 
          lg:flex lg:absolute lg:left-0 lg:bottom-0 
          md:hidden 
          sm:hidden
          max-[640px]:hidden"
      />
      <Image
        src="/border-right-bottom.svg"
        alt="Border Bottom Page Right"
        width={164}
        height={164}
        className="
          2xl:flex 2xl:absolute 2xl:right-0 2xl:bottom-0
          xl:flex xl:absolute xl:right-0 xl:bottom-0 
          lg:flex lg:absolute lg:right-0 lg:bottom-0 
          md:hidden 
          sm:hidden
          max-[640px]:hidden"
      />
        </div>

    )
}