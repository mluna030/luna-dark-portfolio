
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PostQuantumCryptographyGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-primary">
              <span className="px-2 py-1 bg-primary/10 rounded-full">
                Cryptography
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground">
              Understanding Post-Quantum Cryptography: A Practical Guide
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>May 15, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-foreground">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Exploring the fundamentals of quantum-resistant algorithms and their implementation challenges in real-world systems.
            </p>

            <h2>The Quantum Threat</h2>
            <p>
              As quantum computing advances, traditional cryptographic methods face unprecedented challenges. 
              RSA, ECC, and other widely-used algorithms that secure our digital infrastructure today will 
              become vulnerable to quantum attacks using Shor's algorithm.
            </p>

            <h2>Post-Quantum Cryptographic Algorithms</h2>
            <p>
              The National Institute of Standards and Technology (NIST) has been working to standardize 
              quantum-resistant cryptographic algorithms. The selected algorithms fall into several categories:
            </p>
            
            <ul>
              <li><strong>Lattice-based cryptography</strong> - Including CRYSTALS-Kyber for key encapsulation</li>
              <li><strong>Hash-based signatures</strong> - Such as SPHINCS+ for digital signatures</li>
              <li><strong>Code-based cryptography</strong> - Offering alternative approaches to encryption</li>
              <li><strong>Multivariate cryptography</strong> - Providing additional signature schemes</li>
            </ul>

            <h2>Implementation Challenges</h2>
            <p>
              Transitioning to post-quantum cryptography presents several technical challenges:
            </p>
            
            <h3>Key Size Considerations</h3>
            <p>
              Post-quantum algorithms typically require larger key sizes compared to their classical counterparts. 
              This impacts memory usage, storage requirements, and transmission overhead, particularly in 
              resource-constrained environments like embedded systems.
            </p>

            <h3>Performance Implications</h3>
            <p>
              The computational overhead of post-quantum algorithms varies significantly. While some operations 
              may be faster, others require more processing power, affecting overall system performance.
            </p>

            <h2>Real-World Applications</h2>
            <p>
              In my work on the NASA Artemis project (Kepler 452B), we've been implementing post-quantum 
              cryptographic solutions for space-based systems. The unique constraints of space environments 
              - radiation hardening, power limitations, and communication delays - require careful 
              consideration of algorithm selection and optimization.
            </p>

            <h2>Migration Strategy</h2>
            <p>
              Organizations should begin planning their transition to post-quantum cryptography now:
            </p>
            
            <ol>
              <li><strong>Inventory current cryptographic assets</strong></li>
              <li><strong>Assess risk and prioritize critical systems</strong></li>
              <li><strong>Develop hybrid approaches</strong> during the transition period</li>
              <li><strong>Test and validate</strong> new implementations thoroughly</li>
              <li><strong>Train teams</strong> on new cryptographic concepts and tools</li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              The transition to post-quantum cryptography is not just a technical upgrade—it's a fundamental 
              shift in how we approach digital security. By understanding the challenges and starting 
              preparation early, organizations can ensure they're ready for the quantum era.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostQuantumCryptographyGuide;
