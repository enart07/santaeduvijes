import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Página Oficial de Santa Eduvijes
        </h1>

        <Image
          className="dark:invert"
          src="/next.svg" // Puedes cambiar esto por tu propio logo si quieres
          alt="Santa Eduvijes Logo"
          width={180}
          height={38}
          priority
        />

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Bienvenidos a nuestro sitio oficial. Pronto encontrarás toda la información sobre Santa Eduvijes, eventos, noticias y más.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[200px]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conócenos
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[200px]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noticias
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Santa Eduvijes. Todos los derechos reservados.
      </footer>
    </div>
  );
}
