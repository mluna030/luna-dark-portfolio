import { Calendar, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const posts = [
    {
      title: "Post-Quantum Cryptography: A Practical Guide",
      excerpt: "Fundamentals of quantum-resistant algorithms and implementation challenges",
      date: "2024-05-15",
      category: "Cryptography",
      slug: "/blog/post-quantum-cryptography-guide"
    },
    {
      title: "Building Resilient Edge Computing Systems",
      excerpt: "Lessons from developing real-time anomaly detection for industrial IoT",
      date: "2024-04-22",
      category: "Edge Computing",
      slug: "/blog/resilient-edge-computing-systems"
    },
    {
      title: "Security for Embedded Systems in Space",
      excerpt: "Unique security challenges and solutions for space-based computing",
      date: "2024-03-18",
      category: "Space Tech",
      slug: "/blog/embedded-systems-space-security"
    }
  ];

  return (
    <section id="writing" className="section-space bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Writing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on cryptography, security, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="modern-card p-6 hover:border-primary/40 transition-all duration-300 cursor-pointer group fade-in visible"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(post.slug)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </div>

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200 leading-tight">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;