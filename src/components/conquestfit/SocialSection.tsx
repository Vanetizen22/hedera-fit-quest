import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, UserPlus, Trophy, Plus, DollarSign } from "lucide-react";

const mockLeaderboard = [
  { name: "Ana M.", progress: 92, avatar: "A" },
  { name: "Carlos R.", progress: 78, avatar: "C" },
  { name: "Lucía P.", progress: 65, avatar: "L" },
  { name: "Martín G.", progress: 45, avatar: "M" },
  { name: "Sofía V.", progress: 30, avatar: "S" },
];

const SocialSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [challengeName, setChallengeName] = useState("");
  const [duration, setDuration] = useState("");
  const [collateral, setCollateral] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Tu <span className="text-gradient-orange">Tribu</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Compite y conquista junto a otros</p>
      </div>

      {/* Friend Search */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Añadir a tu Tribu</h3>
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

      {/* Create Competition */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Plus className="w-3.5 h-3.5" /> Crear Nueva Competencia
        </h3>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Nombre del Reto</Label>
            <Input value={challengeName} onChange={(e) => setChallengeName(e.target.value)} placeholder="30 Días Sin Excusas" className="bg-muted/50 border-white/[0.08]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Duración (días)</Label>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="30" className="bg-muted/50 border-white/[0.08]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Colateral (USDT)</Label>
              <Input type="number" value={collateral} onChange={(e) => setCollateral(e.target.value)} placeholder="50" className="bg-muted/50 border-white/[0.08]" />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl gradient-orange text-primary-foreground font-semibold text-sm neon-glow-orange"
          >
            Crear Competencia
          </motion.button>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="glass-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-primary" /> Leaderboard
          </h3>
          <div className="flex items-center gap-1 text-xs text-primary font-medium">
            <DollarSign className="w-3 h-3" />
            <span>Pozo: 250 USDT</span>
          </div>
        </div>
        <p className="text-xs text-accent font-medium">30 Días Sin Excusas · Día 12/30</p>
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
