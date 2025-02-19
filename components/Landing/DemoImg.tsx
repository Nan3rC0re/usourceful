import Image from "next/image";

const DemoImg = () => {
  return (
    <div className="demo-section-bg">
      <div className="relative size-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Landing/demo.png"
            alt="demoImg"
            width={1208}
            height={902}
            className="demo-img "
          />
        </div>
      </div>
    </div>
  );
};

export default DemoImg;
