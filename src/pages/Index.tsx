import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero3D } from '@/components/Hero3D';
import { ScrollSection } from '@/components/ScrollSection';
import { EnhancedFloatingCards } from '@/components/EnhancedFloatingCards';
import { PaymentAnimation } from '@/components/PaymentAnimation';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ParticleField } from '@/components/ParticleField';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Twitter, Youtube } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden smooth-scroll">
      <ParticleField />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <Hero3D />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center max-w-6xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            The Future of Freelancing is Here.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl text-muted-foreground mb-8 subhead max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            AI, instant payments, verified talent — all in one platform that redefines how businesses and freelancers connect.
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            We built Nexlance to challenge everything that's broken about today's freelance market — slow hiring, delayed payments, and fake profiles. Nexlance is the next-generation AI-driven marketplace designed for speed, trust, and transparency.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button size="lg" className="glass glow-border px-8 py-6 text-lg group">
               Join the Waitlist
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-muted-foreground">Scroll to Discover the Future ↓</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <ScrollSection
        id="problem"
        title="Freelancing today isn't free — it's friction."
        text="Every day, millions of freelancers apply to dozens of platforms, hoping for one reply. Clients spend days searching, verifying, and negotiating — only to face inconsistent quality and delayed timelines."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {[
            "❌ Endless bidding wars",
            "❌ Unverified profiles",
            "❌ Hidden commissions & delayed payments",
            "❌ Poor AI recommendations",
            "❌ No real trust between freelancers & clients"
          ].map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-left"
            >
              <p className="text-lg">{pain}</p>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* Solution Section */}
      <ScrollSection
        id="solution"
        title="One Platform. Infinite Trust."
        text="From discovery to payout, everything just works — powered by AI intelligence, verified KYC, and instant UPI-based payments. Nexlance is not another marketplace — it's a smart ecosystem where every connection is trustworthy, efficient, and rewarding."
      >
        <EnhancedFloatingCards />
      </ScrollSection>

      {/* Differentiation Section */}
      <ScrollSection
        id="different"
        title="We're not competing with freelance platforms — we're replacing them."
        text="Platforms like Upwork and Fiverr built the first generation of online work. Nexlance is building the intelligent generation — a system that learns, verifies, and pays instantly. We believe the future of freelance work should be fair, automated, and human-first."
      >
        <div className="glass p-8 rounded-3xl max-w-4xl mx-auto mt-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="pb-4 text-lg font-bold">Feature</th>
                  <th className="pb-4 text-lg font-bold text-muted-foreground">Traditional Platforms</th>
                  <th className="pb-4 text-lg font-bold text-primary">Nexlance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Payment Delay", "3–14 Days", "Instant via UPI"],
                  ["Profile Verification", "Basic Email", "Aadhaar + UPI Verified"],
                  ["AI Matching", "Limited", "Real-Time Smart Matching"],
                  ["Fees", "10–20%", "Transparent & Fair"],
                  ["Experience", "Crowded", "Clean, Personal, AI-Assisted"]
                ].map(([feature, old, nexlance], index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-border/30"
                  >
                    <td className="py-4 font-semibold">{feature}</td>
                    <td className="py-4 text-muted-foreground">{old}</td>
                    <td className="py-4 text-primary font-semibold">{nexlance}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollSection>

      {/* Product Experience Section */}
      <ScrollSection
        id="product"
        title="A dashboard so clean, it feels invisible."
        text="Nexlance's dashboard empowers both freelancers and companies with clarity, insights, and motion. Track your growth, see payments, analyze project flow — all in one elegant visual interface."
      >
        <PaymentAnimation />
      </ScrollSection>

      {/* Community Section */}
      <ScrollSection
        id="community"
        title="Our Vision After First Version Launch"
        text="Nexlance isn't just software — it's a movement. A community for developers, designers, writers, and creators who believe in faster work, transparent pay, and AI empowerment."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { label: "Active Freelancers", value: "50K+" },
            { label: "Projects Completed", value: "200K+" },
            { label: "Countries", value: "120+" },
            { label: "Avg. Response Time", value: "< 2min" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-center glow-border"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text numeric mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* Business Model Section */}
      <ScrollSection
        id="business"
        title="Simple, scalable, and fair."
        text="Nexlance operates on a 1–2% transparent transaction model — ensuring profitability without taxing the user. With AI-based pricing and automated operations, our margins scale without human overhead."
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-3xl max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="text-7xl font-bold gradient-text numeric mb-4">1-2%</div>
          <p className="text-xl text-muted-foreground">Transparent Transaction Fee</p>
        </motion.div>
      </ScrollSection>

      {/* Tech Infrastructure Section */}
      <ScrollSection
        id="tech"
        title="Verified. Secure. Instant."
        text="Our backend is powered by Node.js, MongoDB, and Razorpay APIs, with UPI verification & KYC integration at the core. Every action — from signup to payout — passes through AI and encryption layers, ensuring speed without compromise."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {["Node.js", "MongoDB", "Razorpay", "AI Engine", "UPI Integration", "KYC Verified", "Encrypted", "Real-Time"].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass p-4 rounded-xl text-center text-sm font-semibold"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* Roadmap Section */}
      <ScrollSection
        id="roadmap"
        title="We're just getting started."
        text=""
      >
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {[
            { quarter: "Q1 2025", milestone: "Working on Beta Launch" },
            { quarter: "Q2 2026", milestone: "Public Web App Launch + AI Matching Engine v1" },
            { quarter: "Q3 2026", milestone: "Mobile App + UPI Instant Payout 2.0" },
            { quarter: "Q4 2026", milestone: "Nexlance AI Growth Engine & Global Expansion" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 glow-border"
            >
              <div className="text-3xl font-bold gradient-text numeric min-w-[100px]">{item.quarter}</div>
              <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              <p className="text-lg">{item.milestone}</p>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* Coming Soon / CTA Section */}
      <ScrollSection
        id="coming-soon"
        title="The Future of Work Starts Here."
        text="Join us as we reshape the freelance economy with intelligence, speed, and trust."
      >
        <WaitlistForm />
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button size="lg" variant="outline" className="glass glow-border px-8 py-6 text-lg">
            💬 Contact Founders
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold gradient-text mb-4">COMING SOON 2025</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>
      </ScrollSection>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border/30 mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h3 className="text-3xl font-bold gradient-text">NEXLANCE</h3>
            <p className="text-muted-foreground">© 2025 Nexlance — Building the Future of Freelance Work</p>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Contact: <a href="mailto:contact@nexlance" className="text-primary hover:underline">contactnexlance@gmail.com</a>
            </p>
          </motion.div>
        </div>
        
        {/* Neon line sweep animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        />
      </footer>
    </div>
  );
};

export default Index;
