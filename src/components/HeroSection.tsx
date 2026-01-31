import { Button } from "@/components/ui/button";
import owlMascot from "@/assets/owl-mascot.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-6xl">
              The free, fun, and effective way to learn a language!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Learning with Lingo is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Get Started
              </Button>
              <Button variant="heroSecondary" size="xl">
                I Already Have an Account
              </Button>
            </div>
          </div>

          {/* Mascot */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
              <img
                src={owlMascot}
                alt="Lingo Owl Mascot"
                className="relative z-10 h-80 w-80 animate-float object-contain drop-shadow-2xl lg:h-96 lg:w-96"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
};

export default HeroSection;
