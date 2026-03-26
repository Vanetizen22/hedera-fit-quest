import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Trophy, Award, Medal, Crown, Star } from "lucide-react";

const mockLeaderboard = [
  { name: "Ana M.", progress: 92, avatar: "A" },
  { name: "Carlos R.", progress: 78, avatar: "C" },
  { name: "Lucía P.", progress: 65, avatar: "L" },
  { name: "Martín G.", progress: 45, avatar: "M" },
];

const trophies = [
  { icon: Crown, name: "Rey de la Montaña", desc: "Completar 30 días seguidos", unlocked: true },
  { icon: Trophy, name: "Primera Conquista", desc: "Primer reto completado", unlocked: true },
  { icon: Medal, name: "Top 3 Andes", desc: "Top 3 en Andes Challenge", unlocked: true },
  { icon: Award, name: "Guerrero Nocturno", desc: "Entrenar después de las 22h", unlocked: false },
  { icon: Star, name: "Leyenda", desc: "100 check-ins validados", unlocked: false },
];

const SocialSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center text-2xl font-bold text-primary-foreground ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
            M
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Marco Silva</h2>
            <p className="text-xs text-muted-foreground">Conquistador · Nivel Avanzado</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="text-center">
                <p className="text-sm font-bold">28</p>
                <p className="text-[10px] text-muted-foreground">Conquistas</p>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="text-center">
                <p className="text-sm font-bold">156</p>
                <p className="text-[10px] text-muted-foreground">Amigos</p>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="text-center">
                <p className="text-sm font-bold text-primary">#5</p>
                <p className="text-[10px] text-muted-foreground">Ranking</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trophies */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Trophy className="w-3.5 h-3.5 text-primary" /> Trofeos
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {trophies.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.08, type: "spring" }}
              className="flex flex-col items-center gap-1"
              title={`${t.name}: ${t.desc}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                t.unlocked ? "bg-primary/20 border border-primary/30" : "bg-muted/30 border border-white/[0.05]"
              }`}>
                <t.icon className={`w-5 h-5 ${t.unlocked ? "text-primary" : "text-muted-foreground/30"}`} />
              </div>
              <p className={`text-[9px] text-center leading-tight ${t.unlocked ? "text-foreground" : "text-muted-foreground/40"}`}>
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Friend Search */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tu Tribu</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar conquistadores..."
            className="pl-10 bg-muted/50 border-white/[0.08]"
          />
        </div>
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">J</div>
                <span className="text-sm">Juan Pérez</span>
              </div>
              <motion.button whileTap={{ scale: 0.9 }} className="p-1.5 rounded-lg bg-primary/20 text-primary">
                <UserPlus className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Tribe Leaderboard */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Trophy className="w-3.5 h-3.5 text-primary" /> Leaderboard de la Tribu
        </h3>
        <div className="space-y-2">
          {mockLeaderboard.map((user, i) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-2"
            >
              <span className={`text-xs font-bold w-5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                {i + 1}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i === 0 ? "gradient-orange text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <div className="w-full h-1.5 rounded-full bg-muted mt-1 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${user.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className={`h-full rounded-full ${i === 0 ? "gradient-orange" : "bg-accent/60"}`}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{user.progress}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
