import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, Wallet } from 'lucide-react';

export const PaymentAnimation = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 flex items-center justify-center">
      {/* Starting Point - Project */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 glass p-6 rounded-2xl glow-border"
      >
        <DollarSign className="w-12 h-12 text-primary" />
      </motion.div>

      {/* Animated Path */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute left-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary"
        style={{ boxShadow: '0 0 20px hsl(187 100% 50% / 0.6)' }}
      >
        {/* Animated Coins */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ left: 0, opacity: 0 }}
            animate={{ 
              left: '100%', 
              opacity: [0, 1, 1, 0],
            }}
            transition={{ 
              duration: 2, 
              delay: 0.8 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute -top-2 w-5 h-5 rounded-full bg-secondary"
            style={{ boxShadow: '0 0 15px hsl(217 91% 60%)' }}
          />
        ))}
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
      </motion.div>

      {/* End Point - Wallet */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute right-0 glass p-6 rounded-2xl glow-pink-border"
      >
        <Wallet className="w-12 h-12 text-secondary" />
      </motion.div>

      {/* Text Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute -bottom-12 text-lg text-muted-foreground numeric"
      >
        Instant UPI Transfer • 0 Delays
      </motion.p>
    </div>
  );
};
