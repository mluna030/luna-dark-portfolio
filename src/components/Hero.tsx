import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-space">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4 fade-in visible">
          <p className="text-primary font-medium tracking-wide text-sm uppercase">
            Software Engineer
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Michael Luna
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing in <span className="text-primary font-semibold">Post-Quantum Cryptography</span> and{' '}
            <span className="text-primary font-semibold">Edge Computing</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 fade-in visible" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            className="gradient-button px-8 focus-ring"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary focus-ring px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8 fade-in visible" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://github.com/mluna030"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-lg p-2"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-luna6262/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-lg p-2"
          >
            <Linkedin className="h-5 w-5" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 fade-in visible" style={{ animationDelay: '0.6s' }}>
          <div className="animate-bounce">
            <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;