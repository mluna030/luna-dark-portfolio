
const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Michael Luna. Built with care.
          </p>
          <p className="text-xs text-muted-foreground">
            Focused on security, simplicity, and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
