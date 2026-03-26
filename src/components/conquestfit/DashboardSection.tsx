import { motion } from "framer-motion";
import { Camera, Bot, CheckCircle2, Flame, TrendingUp, Zap } from "lucide-react";

interface Props {
  userName: string;
}

const DashboardSection = ({ userName }: Props) => {
  const progress = 72;
  const circumference = 2 * Math.PI * 52;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Proof of <span className="text-gradient-orange">Sweat</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Tu progreso diario de conquista</p>
      </div>

      {/* Daily Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Flame, label: "Calorías", value: "486", color: "text-primary" },
          { icon: TrendingUp, label: "Ejercicios", value: "3/4", color: "text-accent" },
          { icon: Zap, label: "Racha", value: "5d", color: "text-primary" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-3 text-center"
          >
            <stat.icon className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Progress Widget */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="glass-card p-8 flex flex-col items-center"
      >
        <div className="relative w-40 h-40">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" stroke="hsl(var(--muted))" strokeWidth="6" fill="none" />
            <motion.circle
              cx="60" cy="60" r="52"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 12px hsl(18 100% 56% / 0.5))" }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(18 100% 56%)" />
                <stop offset="100%" stopColor="hsl(30 100% 60%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{progress}%</span>
            <span className="text-xs text-muted-foreground mt-0.5">completado</span>
          </div>
        </div>
        <p className="text-sm font-medium mt-4 text-muted-foreground">Tu Conquista Diaria</p>
      </motion.div>

      {/* Chat */}
      <div className="glass-card p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">ConquestCoach · Online</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div className="space-y-1 glass-card p-3 flex-1">
            <p className="text-xs font-semibold text-accent">ConquestCoach</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold text-foreground">{userName}</span>, vas muy bien hoy. Llevas 72% de tu meta diaria. ¡Sube tu prueba de esfuerzo para validarla en la red Hedera!
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
        Subir Prueba de Esfuerzo
      </motion.button>

      {/* Today's check-ins */}
      <div className="glass-card p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Check-ins de hoy</h3>
        <div className="space-y-2">
          {[
            { time: "08:45", msg: "Cardio · 30 min", verified: true },
            { time: "10:20", msg: "Fuerza · Sentadillas x12", verified: true },
            { time: "—", msg: "Pendiente: Estiramientos", verified: false },
          ].map((ci, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-sm"
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${ci.verified ? "text-green-400" : "text-muted-foreground/30"}`} />
              <span className="flex-1">{ci.msg}</span>
              <span className="text-[10px] text-muted-foreground">{ci.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
