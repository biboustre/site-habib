import BannerMain from "./components/molecules/banner/BannerMain";

export default function Home() {
  return (
    <main>
      <BannerMain 
        classNameTitle="text-8xl font-bold"
        title="Hello, world!"
        classNameText="text-5xl font-semibold"
        text="Bienvenue sur mon site web<br />Je suis un développeur web <br />et je suis passionné par le développement web." 
        src="/images/logo-entreprise.webp" 
        alt="photo de profil" 
      />
    </main>
  );
}
