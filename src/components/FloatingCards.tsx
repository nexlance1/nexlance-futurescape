import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield } from 'lucide-react';

export const FloatingCards = () => {
  const cards = [
    { icon: Sparkles, title: 'AI Matching', delay: 0 },
    { icon: Zap, title: 'Instant Pay', delay: 0.2 },
    { icon: Shield, title: 'Verified', delay: 0.4 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: card.delay,
            ease: [0.76, 0, 0.24, 1] 
          }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            boxShadow: '0 0 40px hsl(187 100% 50% / 0.6)' 
          }}
          className="glass p-8 rounded-2xl border border-primary/30 backdrop-blur-xl transform-3d perspective group cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative">
            <card.icon className="w-12 h-12 text-primary mb-4 mx-auto animate-float group-hover:text-secondary transition-colors duration-500" />
            <h3 className="text-xl font-bold gradient-text">{card.title}</h3>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
