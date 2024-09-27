import ServiceDescription from "./components/atoms/serviceDescription/ServiceDescription";
import BannerMain from "./components/molecules/banner/BannerMain";
import { descriptions } from "./data/data";

export default function Home() {

  return (
    <>
      <BannerMain
        title="Web'ibou"
        text="Solution </br> WEB </br> & </br>DESIGN"
        src="/images/logo-entreprise.webp"
        alt="photo de profil"
      />
      <section className="pt-16 flex flex-col gap-20 bg-gray-800">
        <h2
          id="a-propos"
          className="text-4xl text-white font-bold text-center "
        >
          Ce que nous faisons
        </h2>
        <section className=" text-white text-lg text-justify font-semibold space-y-20 px-5 pb-20 md:flex md:space-y-0">
          {descriptions.map((description) => (
            <ServiceDescription key={description.id} text={description.text} />
            
          ))}
        </section>
      </section>
    </>
  );
}
