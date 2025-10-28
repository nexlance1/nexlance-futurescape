import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Mail, Send } from 'lucide-react';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('You\'re on the list! 🚀', {
      description: 'We\'ll notify you when Nexlance launches in 2025'
    });
    
    setEmail('');
    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md mx-auto mt-12"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse-glow" />
        
        <div className="relative glass p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold gradient-text">Join the Waitlist</h3>
          </div>
          
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 border-primary/30 focus:border-primary text-lg py-6 rounded-xl"
            required
          />
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-background font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_hsl(187_100%_50%/0.5)] disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Notify Me <Send className="w-5 h-5" />
              </span>
            )}
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            No spam. Just the future of freelancing.
          </p>
        </div>
      </div>
    </motion.form>
  );
};
