
import { Button } from '@/components/ui/button';
import { Download, Award, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about pushing the boundaries of secure computing and real-time systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Software Engineer with a deep focus on <span className="text-primary font-medium">post-quantum cryptography</span> and 
              <span className="text-primary font-medium"> edge computing systems</span>. My work spans from developing cryptographic solutions 
              for NASA's Artemis mission to creating real-time anomaly detection platforms.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With experience in embedded systems, AI/ML, and cutting-edge security protocols, I bridge the gap between 
              theoretical cryptography and practical implementation. I'm passionate about building systems that are not 
              only secure today but resilient against future quantum threats.
            </p>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  // This would trigger a download of the resume PDF
                  console.log('Download resume clicked');
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">NASA Artemis</h3>
              </div>
              <p className="text-muted-foreground">
                Developed post-quantum cryptographic embedded systems for the Kepler 452B project, 
                ensuring secure communications for future space missions.
              </p>
            </div>

            <div className="glass-card p-6 rounded-lg hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <Code className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Edge Computing</h3>
              </div>
              <p className="text-muted-foreground">
                Built real-time anomaly detection platforms using edge computing principles, 
                optimizing for low-latency and high-reliability environments.
              </p>
            </div>

            <div className="glass-card p-6 rounded-lg hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Research</h3>
              </div>
              <p className="text-muted-foreground">
                Published research on quantum-resistant algorithms and their practical 
                applications in mission-critical systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
