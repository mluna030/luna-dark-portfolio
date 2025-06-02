
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: "Understanding Post-Quantum Cryptography: A Practical Guide",
      excerpt: "Exploring the fundamentals of quantum-resistant algorithms and their implementation challenges in real-world systems.",
      date: "2024-05-15",
      readTime: "8 min read",
      category: "Cryptography",
      slug: "post-quantum-cryptography-guide"
    },
    {
      title: "Building Resilient Edge Computing Systems",
      excerpt: "Lessons learned from developing real-time anomaly detection systems for industrial IoT environments.",
      date: "2024-04-22",
      readTime: "6 min read", 
      category: "Edge Computing",
      slug: "resilient-edge-computing-systems"
    },
    {
      title: "Security Considerations for Embedded Systems in Space",
      excerpt: "Deep dive into the unique security challenges and solutions for space-based computing systems.",
      date: "2024-03-18",
      readTime: "10 min read",
      category: "Space Technology",
      slug: "embedded-systems-space-security"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge on cryptography, security, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="glass-card rounded-xl p-6 hover-lift animate-fade-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => console.log(`Navigate to blog post: ${post.slug}`)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span className="px-2 py-1 bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => console.log('Navigate to full blog')}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
