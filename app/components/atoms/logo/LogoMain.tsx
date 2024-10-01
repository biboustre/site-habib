import Link from "next/link";

export default function LogoMain() {
  return (
    <section>
      <Link href="/">
        <h1 className="text-5xl font-bold transition-transform duration-300 ease-in-out hover:scale-110 text-white">WEB&apos;ibou</h1>
      </Link>
    </section>
  );
}
