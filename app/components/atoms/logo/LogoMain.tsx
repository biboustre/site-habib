import Link from "next/link";

export default function LogoMain() {
  return (
    <section className="">
      <Link href="/">
        <h1 className="animate-pulse text-3xl font-extrabold text-white transition-transform duration-300 ease-in-out hover:scale-110 md:text-4xl">
          WEB&apos;ibou
        </h1>
      </Link>
    </section>
  );
}
