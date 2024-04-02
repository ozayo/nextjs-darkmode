import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-28">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="dark:bg-gray-900 dark:text-gray-100 text-4xl font-bold" >Dark mode in the Next JS</h1>
        <p className="text-lg font-medium  text-gray-900 dark:text-white">
        Add Dark mode in the Next JS App Router using Tailwind CSS
        </p>
      </div>
      <button className=" text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to- 
        [#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4">
        Get Started
      </button>
    </div>
  );
}