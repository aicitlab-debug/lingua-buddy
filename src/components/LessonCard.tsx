import { cn } from "@/lib/utils";
import { Lock, Star, Check } from "lucide-react";

interface LessonCardProps {
  title: string;
  icon: string;
  status: "completed" | "current" | "locked";
  progress?: number;
}

const LessonCard = ({ title, icon, status, progress = 0 }: LessonCardProps) => {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center",
        isLocked && "opacity-60"
      )}
    >
      {/* Lesson Circle */}
      <button
        disabled={isLocked}
        className={cn(
          "group relative flex h-24 w-24 items-center justify-center rounded-full border-4 transition-all duration-200",
          isCompleted && "border-primary bg-primary shadow-button",
          isCurrent && "border-primary bg-card shadow-lg hover:scale-105",
          isLocked && "border-border bg-secondary"
        )}
      >
        {isCompleted ? (
          <Check className="h-10 w-10 text-primary-foreground" strokeWidth={3} />
        ) : isLocked ? (
          <Lock className="h-8 w-8 text-muted-foreground" />
        ) : (
          <span className="text-4xl">{icon}</span>
        )}

        {/* Crown for completed lessons */}
        {isCompleted && (
          <div className="absolute -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold">
            <Star className="h-4 w-4 fill-gold-foreground text-gold-foreground" />
          </div>
        )}

        {/* Progress ring for current lesson */}
        {isCurrent && progress > 0 && (
          <svg className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeDasharray={`${progress * 3.14} 314`}
              className="progress-glow"
            />
          </svg>
        )}
      </button>

      {/* Title */}
      <span
        className={cn(
          "mt-3 text-center text-sm font-bold",
          isLocked ? "text-muted-foreground" : "text-foreground"
        )}
      >
        {title}
      </span>
    </div>
  );
};

export default LessonCard;
