import Image from "next/image";

const DemoImg = () => {
  return (
    <div className="rounded-2xl md:rounded-3xl aspect-[16/9] w-full overflow-hidden lg:ps-20 lg:pt-20 md:ps-12 md:pt-12 pt-4 ps-4 bg-[#f8f8f8] border">
      <div className="relative size-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Landing/demo.png"
            alt="demoImg"
            width={1208}
            height={902}
            className="size-full select-none max-lg:rounded-tl-xl lg:rounded-tl-3xl object-cover object-left-top "
          />
        </div>
      </div>
    </div>
  );
};

export default DemoImg;
