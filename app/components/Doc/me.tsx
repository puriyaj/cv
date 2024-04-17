import Image from "next/image";
import Form from "../Form";

const Me = async () => {
  return (
    <>
      <div className=" [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[36px] text-center tracking-[12.60px] leading-[normal]">
        Hi, I‘m Pouria
        <br />
        Frontend Developer
      </div>

      <div
        id="Up"
        className="relative   pt-10 rounded-lg flex flex-col items-center  "
      >
        <div className="flex relative gap-10 ">
          <div className="md:flex flex-col gap-10 pt-10 hidden">
            <h1 className="text-2xl text-bold">&lt;Designer /&gt;</h1>

            <p className="text-start w-[10rem]">
            designer specialising in U!| design and design systems.
            </p>
          </div>
          <Image
            src="/images/me.PNG"
            width="500"
            height="400"
            className=" pb-1 pt-10 "
            alt="profile photo"
            priority
          />

          <div className="md:flex flex-col gap-10 hidden">
            <h1 className="flex justify-center text-2xl text-bold pt-10">
              &lt;Coder /&gt;
            </h1>

            <p className="text-end w-[10rem]">
              Front end developer who writes clean, elegant and efficient code.
            </p>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
};
export default Me;
