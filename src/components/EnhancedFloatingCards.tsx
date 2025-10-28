import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe, Layers, Lock } from 'lucide-react';

export const EnhancedFloatingCards = () => {
  const cards = [
    { 
      icon: Sparkles, 
      title: 'AI Matching', 
      description: 'Smart algorithm finds perfect fits',
      delay: 0,
      gradient: 'from-primary/20 to-accent/20'
    },
    { 
      icon: Zap, 
      title: 'Instant Payments', 
      description: 'UPI transfers in seconds',
      delay: 0.15,
      gradient: 'from-accent/20 to-secondary/20'
    },
    { 
      icon: Shield, 
      title: 'KYC Verified', 
      description: 'Every profile authenticated',
      delay: 0.3,
      gradient: 'from-secondary/20 to-primary/20'
    },
    { 
      icon: Globe, 
      title: 'Global Reach', 
      description: 'Connect across borders',
      delay: 0.45,
      gradient: 'from-primary/20 to-secondary/20'
    },
    { 
      icon: Layers, 
      title: 'Smart Contracts', 
      description: 'Automated project agreements',
      delay: 0.6,
      gradient: 'from-accent/20 to-primary/20'
    },
    { 
      icon: Lock, 
      title: 'Secure Escrow', 
      description: 'Protected fund management',
      delay: 0.75,
      gradient: 'from-secondary/20 to-accent/20'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ 
            duration: 0.6, 
            delay: card.delay,
            ease: [0.76, 0, 0.24, 1] 
          }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          className="relative group perspective"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute -inset-1 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
          
          <div className="relative glass p-8 rounded-2xl border border-primary/20 backdrop-blur-xl transform-3d overflow-hidden">
            {/* Icon Container */}
            <div className="relative mb-6">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-16 h-16 mx-auto relative"
              >
                <card.icon className="w-full h-full text-primary" />
              </motion.div>
              
              {/* Icon Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold gradient-text mb-3">{card.title}</h3>
            <p className="text-muted-foreground text-sm">{card.description}</p>
            
            {/* Decorative Corner Lines */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
            
            {/* Shimmer Effect */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              style={{ transform: 'skewX(-20deg)' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
