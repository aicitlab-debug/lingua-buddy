import owlMascot from "@/assets/owl-mascot.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={owlMascot} alt="Lingo" className="h-8 w-8" />
            <span className="text-xl font-black text-primary">lingo</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 Lingo. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
