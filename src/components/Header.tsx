import { Button } from "@/components/ui/button";
import { Flame, Heart, Zap } from "lucide-react";
import owlMascot from "@/assets/owl-mascot.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={owlMascot} alt="Lingo" className="h-10 w-10" />
          <span className="text-2xl font-black text-primary">lingo</span>
        </div>

        {/* Stats */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-streak" />
            <span className="font-bold text-foreground">12</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-xp" />
            <span className="font-bold text-foreground">1,250</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-hearts" />
            <span className="font-bold text-foreground">5</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
