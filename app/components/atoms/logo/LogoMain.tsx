import Link from "next/link";

export default function LogoMain() {
  return (
    <section className="">
      <Link href="#top">
        <h1 className="text-4xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-110 md:text-5xl">
          WEB&apos;ibou
        </h1>
      </Link>
    </section>
  );
}
