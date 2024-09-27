import ServiceDescription from "./components/atoms/serviceDescription/ServiceDescription";
import BannerMain from "./components/molecules/banner/BannerMain";
import { descriptions } from "./data/data";

export default function Home() {
  // const [open, setOpen] = useState(false);

  // const handlClick = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <BannerMain
        title="Web'ibou"
        text="Solution </br> WEB </br> & </br>DESIGN"
        src="/images/logo-entreprise.webp"
        alt="photo de profil"
      />
      <section className="pt-24 flex flex-col gap-32 bg-gray-800">
        <h2
          id="a-propos"
          className="text-4xl text-white font-bold text-center md:text-6xl"
        >
          Ce que nous faisons
        </h2>
        <section className="flex flex-col gap-20 text-white text-lg text-justify font-semibold px-5 pb-20 lg:flex-row lg:gap-5 xl:px-20">
          {descriptions.map((description) => (
            <ServiceDescription key={description.id} title={description.title} text={description.text} />
          ))}
        </section>
      </section>
    </>
  );
}
