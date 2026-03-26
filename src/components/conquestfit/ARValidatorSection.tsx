import { motion } from "framer-motion";
import { Scan, CheckCircle2, XCircle, Zap, Eye, ShieldCheck, Activity } from "lucide-react";

const validationHistory = [
  { id: 1, time: "08:45", type: "Sentadilla", reps: 12, score: 95, status: "valid" },
  { id: 2, time: "08:42", type: "Flexión", reps: 15, score: 88, status: "valid" },
  { id: 3, time: "08:38", type: "Plancha", reps: 1, score: 72, status: "review" },
];

const ARValidatorSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">AI <span className="text-gradient-blue">AR Validator</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Validación inteligente de ejercicio</p>
      </div>

      {/* AR Scanner Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 border border-white/[0.08]"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-48 h-48 border-2 border-accent rounded-2xl" />
          <div className="absolute w-40 h-40 border border-accent/50 rounded-xl" />
          <div className="absolute w-32 h-32 border border-accent/30 rounded-lg" />
        </div>
        
        <div className="relative p-8 flex flex-col items-center space-y-4">
          <motion.div
            animate={{ 
              boxShadow: ["0 0 20px hsl(210 100% 55% / 0.2)", "0 0 40px hsl(210 100% 55% / 0.4)", "0 0 20px hsl(210 100% 55% / 0.2)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 rounded-2xl gradient-blue flex items-center justify-center"
          >
            <Scan className="w-10 h-10 text-accent-foreground" />
          </motion.div>
          <div className="text-center">
            <p className="font-semibold text-lg">Escáner AR Listo</p>
            <p className="text-xs text-muted-foreground mt-1">Apunta la cámara hacia tu ejercicio</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl gradient-blue text-accent-foreground font-semibold text-sm neon-glow-blue flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Iniciar Validación AR
          </motion.button>
        </div>
      </motion.div>

      {/* Validation Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: ShieldCheck, label: "Validadas", value: "28", color: "text-green-400" },
          { icon: Activity, label: "Precisión", value: "91%", color: "text-accent" },
          { icon: Zap, label: "Racha", value: "5 días", color: "text-primary" },
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

      {/* Validation History */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Historial de Validaciones
        </h3>
        <div className="space-y-2">
          {validationHistory.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/20"
            >
              {v.status === "valid" ? (
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-yellow-400 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{v.type} × {v.reps}</p>
                <p className="text-[10px] text-muted-foreground">{v.time}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${v.score >= 85 ? "text-green-400" : v.score >= 70 ? "text-yellow-400" : "text-destructive"}`}>
                  {v.score}%
                </p>
                <p className="text-[10px] text-muted-foreground">Score</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ARValidatorSection;
