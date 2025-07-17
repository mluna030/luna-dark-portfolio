import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Cpu, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Post-Quantum Cryptographic System",
      subtitle: "NASA Artemis",
      description: "Quantum-resistant encryption protocols for secure space communications using lattice-based algorithms on embedded systems.",
      icon: Shield,
      tech: ["C/C++", "CRYSTALS-Kyber", "ARM Cortex", "Real-time OS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Edge Computing Platform",
      subtitle: "Industrial IoT",
      description: "Real-time anomaly detection system processing sensor data with 85% latency reduction compared to cloud solutions.",
      icon: Cpu,
      tech: ["Rust", "TensorFlow Lite", "Kubernetes", "MQTT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Quantum-Safe Protocol",
      subtitle: "Research Project",
      description: "Hybrid cryptographic protocol maintaining security against classical and quantum attacks while optimizing bandwidth.",
      icon: Zap,
      tech: ["Python", "OpenSSL", "Protocol Buffers", "Linux"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="work" className="section-space">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects in cryptography, edge computing, and system security
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="modern-card p-8 hover:border-primary/40 transition-all duration-500 fade-in visible"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-primary font-medium text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 lg:w-full hover:bg-secondary focus-ring"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 lg:w-full gradient-button focus-ring"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in visible" style={{ animationDelay: '0.3s' }}>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-secondary focus-ring px-8"
            onClick={() => window.open('https://github.com/mluna030', '_blank')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;