import { motion } from "framer-motion";
import { Camera, Bot, CheckCircle2 } from "lucide-react";

interface Props {
  userName: string;
}

const DashboardSection = ({ userName }: Props) => {
  const progress = 0;
  const circumference = 2 * Math.PI * 52;
  const strokeDashoffset = circumference - (progress / 1) * circumference;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Proof of <span className="text-gradient-orange">Sweat</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Demuestra tu esfuerzo diario</p>
      </div>

      {/* Progress Widget */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="glass-card p-8 flex flex-col items-center"
      >
        <div className="relative w-36 h-36">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" stroke="hsl(var(--muted))" strokeWidth="8" fill="none" />
            <motion.circle
              cx="60" cy="60" r="52"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 8px hsl(18 100% 56% / 0.5))" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{progress}</span>
            <span className="text-xs text-muted-foreground">/1</span>
          </div>
        </div>
        <p className="text-sm font-medium mt-4 text-muted-foreground">Tu Conquista Diaria</p>
      </motion.div>

      {/* Chat */}
      <div className="glass-card p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-accent">ConquestCoach</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold text-foreground">{userName}</span>, bienvenido a Mendoza. Tu colateral en USDT está bloqueado. Sube tu prueba de esfuerzo para validarla en la red Hedera.
            </p>
          </div>
        </div>
      </div>

      {/* Upload Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 rounded-xl gradient-orange text-primary-foreground font-semibold flex items-center justify-center gap-3 neon-glow-orange animate-pulse-glow"
      >
        <Camera className="w-5 h-5" />
        Subir Prueba
      </motion.button>

      {/* Today's status */}
      <div className="glass-card p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Check-ins de hoy</h3>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 text-muted-foreground/50" />
          <span>Sin check-ins aún. ¡Sube tu prueba!</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
