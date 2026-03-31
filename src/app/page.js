import Image from "next/image";
import Input from "../components/Input";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className="w-full h-screen bg-stone-100 flex justify-center items-center">
      <div className="w-[480px] h-[655px] bg-white">
        <div className="w-[416px] p-8 flex flex-col gap-2">
          <Image
            src="/source_Main.png"
            alt="Main image"
            height={60}
            width={60}
          />
          <h1 className="font-bold text-black text-[26px]">Join Us! 😎</h1>
          <p className="text-gray-400 text[16px]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col pl-8 gap-2">
          <Input
            label={"First name"}
            placeholder={"Placeholder"}
            error={"First name cannot special characters of numbers."}
          />
          <Input
            label={"Last name"}
            placeholder={"Placeholder"}
            error={"Last name cannot special characters of numbers."}
          />
          <Input
            label={"Full name"}
            placeholder={"Placeholder"}
            error={"This username is already taken. Please choose another one."}
          />
        </div>
        <div
          className="flex
        justify-center pt-40"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
