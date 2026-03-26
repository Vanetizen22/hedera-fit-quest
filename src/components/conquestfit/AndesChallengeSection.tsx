import { motion } from "framer-motion";
import { Mountain, Users, Clock, Trophy, TrendingUp, Target } from "lucide-react";

const participants = [
  { name: "Marco S.", progress: 92, avatar: "M", rank: 1 },
  { name: "Ana R.", progress: 85, avatar: "A", rank: 2 },
  { name: "Carlos P.", progress: 78, avatar: "C", rank: 3 },
  { name: "Lucía G.", progress: 65, avatar: "L", rank: 4 },
  { name: "Tú", progress: 72, avatar: "T", rank: 5, isUser: true },
];

const AndesChallengeSection = () => {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-primary/20" />
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
            <path d="M0 200 L80 80 L140 140 L200 40 L260 120 L320 60 L400 160 L400 200Z" fill="hsl(210 100% 55% / 0.3)" />
            <path d="M0 200 L60 120 L120 160 L180 70 L240 130 L300 90 L360 140 L400 100 L400 200Z" fill="hsl(18 100% 56% / 0.2)" />
          </svg>
        </div>
        <div className="relative p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Reto Activo</span>
          </div>
          <h2 className="text-2xl font-bold">Andes <span className="text-gradient-blue">Challenge</span></h2>
          <p className="text-sm text-muted-foreground">Conquista las cumbres más altas de Mendoza</p>
          
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-accent">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <p className="text-lg font-bold mt-1">18</p>
              <p className="text-[10px] text-muted-foreground">Días Rest.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary">
                <Users className="w-3.5 h-3.5" />
              </div>
              <p className="text-lg font-bold mt-1">24</p>
              <p className="text-[10px] text-muted-foreground">Participantes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary">
                <Target className="w-3.5 h-3.5" />
              </div>
              <p className="text-lg font-bold mt-1">72%</p>
              <p className="text-[10px] text-muted-foreground">Tu Progreso</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stage Progress */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-accent" /> Etapas del Reto
        </h3>
        {["Cerro Aconcagua", "Cerro Tupungato", "Cerro Plata"].map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
              i === 0 ? "gradient-orange text-primary-foreground" : i === 1 ? "gradient-blue text-accent-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {i + 1}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{stage}</p>
              <div className="w-full h-1.5 rounded-full bg-muted mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: i === 0 ? "100%" : i === 1 ? "72%" : "0%" }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className={`h-full rounded-full ${i === 0 ? "gradient-orange" : "gradient-blue"}`}
                />
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{i === 0 ? "✓" : i === 1 ? "72%" : "—"}</span>
          </motion.div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="glass-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-primary" /> Clasificación
          </h3>
          <span className="text-xs text-primary font-medium">Pozo: $1,200 USDT</span>
        </div>
        <div className="space-y-2">
          {participants.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center gap-3 p-2.5 rounded-lg ${p.isUser ? "bg-primary/10 border border-primary/20" : "bg-muted/20"}`}
            >
              <span className={`text-xs font-bold w-5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                #{p.rank}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i === 0 ? "gradient-orange text-primary-foreground" : p.isUser ? "gradient-blue text-accent-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {p.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${p.isUser ? "text-accent" : ""}`}>{p.name}</p>
              </div>
              <div className="w-20">
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className={`h-full rounded-full ${i === 0 ? "gradient-orange" : p.isUser ? "gradient-blue" : "bg-accent/40"}`}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground w-8 text-right">{p.progress}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AndesChallengeSection;
