import LanguageCard from "./LanguageCard";

const languages = [
  { name: "Spanish", flag: "🇪🇸", learners: "34.2M" },
  { name: "French", flag: "🇫🇷", learners: "28.7M" },
  { name: "German", flag: "🇩🇪", learners: "18.3M" },
  { name: "Japanese", flag: "🇯🇵", learners: "22.1M" },
  { name: "Korean", flag: "🇰🇷", learners: "19.8M" },
  { name: "Italian", flag: "🇮🇹", learners: "12.4M" },
  { name: "Portuguese", flag: "🇧🇷", learners: "14.6M" },
  { name: "Chinese", flag: "🇨🇳", learners: "25.9M" },
];

const LanguagesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-black text-foreground md:text-4xl">
            Choose your language
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start learning any of these languages for free
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {languages.map((language) => (
            <LanguageCard
              key={language.name}
              name={language.name}
              flag={language.flag}
              learners={language.learners}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
