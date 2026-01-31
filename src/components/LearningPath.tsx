import LessonCard from "./LessonCard";

const lessons = [
  { title: "Basics 1", icon: "🏠", status: "completed" as const },
  { title: "Greetings", icon: "👋", status: "completed" as const },
  { title: "Food", icon: "🍎", status: "current" as const, progress: 60 },
  { title: "Animals", icon: "🐕", status: "locked" as const },
  { title: "Colors", icon: "🎨", status: "locked" as const },
];

const LearningPath = () => {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-black text-foreground md:text-4xl">
            Your Learning Path
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete lessons to unlock new content and earn XP
          </p>
        </div>

        {/* Path visualization */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-12 h-[calc(100%-6rem)] w-1 -translate-x-1/2 bg-border md:left-0 md:right-0 md:top-12 md:h-1 md:w-full md:translate-x-0" />

          {/* Lessons */}
          <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.title}
                className="animate-scale-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LessonCard
                  title={lesson.title}
                  icon={lesson.icon}
                  status={lesson.status}
                  progress={lesson.progress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
