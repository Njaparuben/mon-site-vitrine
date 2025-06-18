
import Link from "next/link";
import "tailwindcss";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
      <header className="flex flex-col gap-[24px] row-start-1 items-center sm:items-start h-[50px]">
         <>
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Profiles</h1>
        
        <p className="text-gray-600">Explore the profiles of our team members</p>
        
        </>
       
      </header>
      <main className="row-start-2 flex  gap-[32px] flex-wrap items-center justify-center">
        <Link href="/profile_ruben/accueil" className="flex flex-col items-center gap-[8px] border border-gray-200  border-solid rounded-[8px] p-[8px] w-[200px] h-[250px] mt-8 align-items-center justify-center shadow-lg hover:border-blue-500 cursor-pointer">
          <img src="" alt="Ruben profile" />
          <p>Ruben</p>
        </Link>
        <Link href="/profile_dave" className="flex flex-col items-center gap-[8px] border border-gray-200  border-solid rounded-[8px] p-[8px] w-[200px] h-[250px] mt-8 align-items-center justify-center shadow-lg hover:border-green-500 cursor-pointer">
          <img src="" alt="Dave profile" />
          <p>Dave</p>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
