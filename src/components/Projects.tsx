
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Cpu, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Post-Quantum Cryptographic Embedded System",
      subtitle: "NASA Artemis - Kepler 452B",
      description: "Developed quantum-resistant cryptographic protocols for NASA's Artemis mission, implementing lattice-based encryption algorithms on resource-constrained embedded systems for secure space communications.",
      icon: Shield,
      tech: ["C/C++", "CRYSTALS-Kyber", "ARM Cortex", "Real-time OS", "Cryptography"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Edge Computing Platform for Real-Time Anomaly Detection",
      subtitle: "Industrial IoT Systems",
      description: "Built a distributed edge computing platform that processes sensor data in real-time to detect anomalies in industrial environments, reducing latency by 85% compared to cloud-based solutions.",
      icon: Cpu,
      tech: ["Rust", "TensorFlow Lite", "Kubernetes", "MQTT", "Time Series DB"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Quantum-Safe Communication Protocol",
      subtitle: "Research & Development",
      description: "Designed and implemented a hybrid classical-quantum cryptographic protocol that maintains security against both classical and quantum attacks while optimizing for bandwidth efficiency.",
      icon: Zap,
      tech: ["Python", "OpenSSL", "Protocol Buffers", "Linux Kernel", "Network Security"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in cryptography, edge computing, and system security
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-8 hover-lift animate-fade-in-up ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/mluna030', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
