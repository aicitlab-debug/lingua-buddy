import { Gamepad2, Brain, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description:
      "Earn points, unlock achievements, and compete with friends to stay motivated.",
  },
  {
    icon: Brain,
    title: "Science-Based",
    description:
      "Our methods are backed by research and proven to help you learn effectively.",
  },
  {
    icon: Clock,
    title: "Just 5 Minutes a Day",
    description:
      "Short, bite-sized lessons fit into any schedule. Learn anywhere, anytime.",
  },
  {
    icon: Users,
    title: "Join Millions",
    description:
      "Be part of a global community of learners supporting each other.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-black text-foreground md:text-4xl">
            Why learn with us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The most effective way to learn a new language
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border-2 border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
