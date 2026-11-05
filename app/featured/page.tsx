import { Metadata } from 'next'
import { Award, Sparkles, BookOpen, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Featured - Mohamed Elhadad',
  description: 'Featured achievements and certifications, including AI Fluency Framework from Anthropic',
}

export default function Featured() {
  const features = [
    {
      title: 'AI Fluency Framework & Foundations',
      issuer: 'Anthropic',
      issuedBy: 'Creators of Claude AI',
      period: '2026',
      description:
        'A comprehensive certification program in AI fundamentals and best practices. This certification validates my understanding of large language models, prompt engineering, responsible AI development, and practical applications of Claude AI. Issued by Anthropic, the company behind one of the most advanced AI assistants.',
      skills: [
        'LLM Architecture',
        'Prompt Engineering',
        'Claude API',
        'Responsible AI',
        'AI Safety',
        'Practical Applications',
      ],
      highlights: [
        'Comprehensive understanding of LLM capabilities and limitations',
        'Advanced prompt engineering techniques',
        'Practical experience with Claude AI integration',
        'Knowledge of responsible AI deployment',
      ],
      icon: '🧠',
      featured: true,
    },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <span className="text-accent font-semibold">Featured Achievement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            AI Fluency Framework & Foundations
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive certification in AI fundamentals, LLM understanding, and practical Claude AI applications. 
            Issued by Anthropic, the creators of Claude AI.
          </p>
        </div>

        {/* Main Feature Card */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-primary/20 p-12">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">🧠</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-bold text-foreground">AI Fluency Framework</h2>
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-xl text-primary font-semibold">By Anthropic</p>
                </div>
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed max-w-3xl">
                A comprehensive certification program designed to develop deep expertise in artificial intelligence, 
                large language models, and the practical applications of Claude AI. This framework validates my understanding 
                of modern AI systems and my ability to leverage them effectively in real-world applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: 'Comprehensive Learning',
                    description: 'Deep dive into AI fundamentals, LLM architecture, and capabilities',
                  },
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: 'Practical Application',
                    description: 'Hands-on experience with Claude AI integration and prompt engineering',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Issued by Anthropic, creators of Claude AI — 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Framework Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'LLM Fundamentals',
                description: 'Understanding how large language models work, their architecture, training process, and core capabilities.',
                icon: '🏗️',
              },
              {
                title: 'Claude AI Mastery',
                description: 'Deep expertise in Claude AI features, capabilities, latest models, and API integration patterns.',
                icon: '🤖',
              },
              {
                title: 'Prompt Engineering',
                description: 'Advanced techniques for crafting effective prompts, few-shot learning, and optimizing AI outputs.',
                icon: '✍️',
              },
              {
                title: 'Responsible AI',
                description: 'Ethics, safety considerations, bias mitigation, and responsible deployment of AI systems.',
                icon: '⚖️',
              },
              {
                title: 'Practical Applications',
                description: 'Real-world use cases, integration strategies, and building production AI-powered applications.',
                icon: '🚀',
              },
              {
                title: 'Advanced Techniques',
                description: 'RAG systems, function calling, vision capabilities, and cutting-edge Claude AI features.',
                icon: '🔬',
              },
            ].map((area, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-200 group">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Competencies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Competencies Achieved</h2>
          <div className="space-y-4">
            {[
              'Deep understanding of LLM architecture and how transformer models work',
              'Expert-level knowledge of Claude AI capabilities, strengths, and limitations',
              'Advanced prompt engineering and optimization techniques',
              'Integration of AI models into production applications and workflows',
              'Responsible AI development and ethical considerations',
              'Understanding of AI safety, alignment, and bias mitigation',
              'Real-world application development with Claude AI and other LLMs',
              'Knowledge of emerging AI trends and future developments',
            ].map((competency, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-200">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5">
                  ✓
                </div>
                <p className="text-foreground">{competency}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Anthropic */}
        <section className="mb-20">
          <div className="p-8 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Anthropic?</h2>
            <p className="text-foreground leading-relaxed max-w-3xl">
              Anthropic is the research company behind Claude AI, one of the most advanced large language models in the world. 
              Founded by former members of OpenAI, Anthropic is committed to developing safe, beneficial AI systems. 
              Their certification program provides industry-leading education in modern AI, directly from the experts creating the technology. 
              This framework represents cutting-edge knowledge in the rapidly evolving field of artificial intelligence.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Interested in AI Integration?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            With deep expertise in Claude AI and modern language models, I can help build intelligent solutions for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Let&apos;s Build Something Amazing
          </a>
        </div>
      </div>
    </div>
  )
}
