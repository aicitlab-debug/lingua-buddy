import { cn } from "@/lib/utils";

interface LanguageCardProps {
  name: string;
  flag: string;
  learners: string;
  onClick?: () => void;
  className?: string;
}

const LanguageCard = ({ name, flag, learners, onClick, className }: LanguageCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-2xl border-2 border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-2 hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
    >
      <span className="text-5xl transition-transform duration-200 group-hover:scale-110">
        {flag}
      </span>
      <span className="text-lg font-bold text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{learners} learners</span>
    </button>
  );
};

export default LanguageCard;
