import { Flame, Zap, Heart, Trophy } from "lucide-react";

const stats = [
  {
    icon: Flame,
    value: "12",
    label: "Day Streak",
    color: "text-streak",
    bgColor: "bg-streak/10",
  },
  {
    icon: Zap,
    value: "1,250",
    label: "Total XP",
    color: "text-xp",
    bgColor: "bg-xp/10",
  },
  {
    icon: Heart,
    value: "5",
    label: "Hearts",
    color: "text-hearts",
    bgColor: "bg-hearts/10",
  },
  {
    icon: Trophy,
    value: "Gold",
    label: "League",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border-2 border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${stat.bgColor}`}
              >
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <span className="mt-4 text-3xl font-black text-foreground">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
