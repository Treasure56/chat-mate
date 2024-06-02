import { FaArrowRight } from "react-icons/fa6";
import HomeForm from "./HomeForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-light dark:bg-dark h-screen pt-10 overflow-hidden">
      <div className="gap-6 app-container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col gap-7 text-dark dark:text-light justify-center">
          <h1 className=" text-7xl font-semi-bold max-w-[500px] max-md:text-5xl max-md:pt-20">
            Get Smart Answers. Ask Now.
          </h1>
          <p className="max-w-[600px] opacity-70 text-xl font-medium">
            ChatMate is your intelligent AI assistant, providing seamless
            conversations, instant support, and insightful interactions powered
            by advanced language models
          </p>
        </div>

        <div className="relative h-full">
          <Image
            src="/images/herobg1.jpg"
            alt="hero bg"
            width={500}
            height={500}
            className=" rounded-2xl relative w-full md:mt-[20vh]"
          />
          <HomeForm />
        </div>
      </div>
    </section>
  );
}
