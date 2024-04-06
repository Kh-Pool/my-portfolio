import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{background: "url(/main-bg.webp)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 x-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">Welcome to the website
            <span className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Web Development</span>
          </h1>
          <p className="text-gray-200 hidden md:block z-[10]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, commodi in. Ab dicta earum tenetur odit officia adipisci omnis itaque vitae mollitia, soluta dolorem laudantium. Neque obcaecati pariatur officia saepe?
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 z-[10]">
            <Link href="/projects" className="rounded-[200px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Projects
            </Link>
            <Link href="/skills" className="rounded-[200px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Skills
            </Link>
            <Link href="/certificates" className="rounded-[200px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Certificates
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/projects" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Projects
        </Link>
        <Link href="/skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Skills
        </Link>
        <Link href="/certificates" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Certificates
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-55 top-40"></Image>
        <Image src="/cliff.webp" alt="cliff" width={480} height={480}></Image>
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full"></Image>
      </div>
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10]"></Image>
    </main>
  );
}
