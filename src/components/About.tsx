import { Shield, Cpu, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "NASA Artemis",
      description: "Developed post-quantum cryptographic systems for space missions"
    },
    {
      icon: Shield,
      title: "Security Research",
      description: "Published research on quantum-resistant algorithms"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Built real-time anomaly detection platforms"
    }
  ];

  return (
    <section id="about" className="section-space bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building secure, scalable systems for tomorrow's computing challenges
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-6 fade-in visible" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed">
              I'm a Software Engineer specializing in <span className="text-primary font-semibold">post-quantum cryptography</span> and 
              <span className="text-primary font-semibold"> edge computing systems</span>. My work spans from developing cryptographic solutions 
              for NASA's Artemis mission to creating real-time platforms.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With experience in embedded systems, AI/ML, and security protocols, I bridge the gap between 
              theoretical cryptography and practical implementation, building systems that are resilient against future quantum threats.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-4 fade-in visible" style={{ animationDelay: '0.4s' }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="modern-card p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;