import { ExampleWithModalButton } from "./UniversalModal";

const HeroSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"> 
     {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-6xl font-bold text-black mb-6 animate-fade-in-up">
          Built for App Growth.<br/> Powered by AI.<br/><span className="pb-4 gradient-text animate-shimmer">Focused on Results.</span></h1>
        {/* Subheadline */}<br/><br/>
        <p className="font-bold text-2xl md:text-1xl text-black mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          USER ACQUISITION • RETARGETING • BRANDING
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col mt-6 sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="md:flex items-center gap-4">
            <ExampleWithModalButton />
          </div>
        </div>
       
        {/* Trust Indicators */}
        <div className="mt-6 pb-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
  <p className="text-black mb-6">Trusted by leading app publishers worldwide</p>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {/* Each logo: grayscale, colored on hover */}
    <img
      src="/amazon.png"
      alt="Amazon"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Ecommerce - Amazon"
    />
    <img
      src="/888.png"
      alt="888"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Betting - 888"
    />
    <img
      src="/spotify.png"
      alt="Spotify"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Entertainment - Spotify"
    />
    <img
      src="/swiggy.png"
      alt="Swiggy"
      className="h-12 w-24 object-contain bg-white rounded shadow transition duration-300"
      title="Delivery - Swiggy"
    />
  </div>
</div>

</div>
    </section>
  </>
  );
};

export default HeroSection;