import { motion } from "framer-motion";
import { Lock, Coins, ArrowDownCircle, ArrowUpCircle, Shield, Clock } from "lucide-react";

const mockLogs = [
  { id: 1, time: "08:32", msg: "Check-in validado · Prueba #0x3f2a", status: "validated" },
  { id: 2, time: "07:15", msg: "Colateral depositado · 50 USDT", status: "deposit" },
  { id: 3, time: "Ayer", msg: "Consenso alcanzado · Nodo 0.0.4832", status: "consensus" },
];

const WalletSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Billetera <span className="text-gradient-blue">Hedera</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Tu colateral y recompensas</p>
      </div>

      {/* Balances */}
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card p-4 space-y-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="w-3.5 h-3.5 text-primary" />
            USDT Colateral
          </div>
          <p className="text-2xl font-bold">50.00</p>
          <p className="text-xs text-muted-foreground">Bloqueado</p>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card p-4 space-y-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Coins className="w-3.5 h-3.5 text-accent" />
            $CQT Token
          </div>
          <p className="text-2xl font-bold text-gradient-blue">125.50</p>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-accent/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="text-xs text-accent">Hedera HTS</p>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="py-3.5 rounded-xl gradient-orange text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 neon-glow-orange"
        >
          <ArrowDownCircle className="w-4 h-4" />
          Depositar
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="py-3.5 rounded-xl bg-muted/60 text-muted-foreground font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
          disabled
        >
          <ArrowUpCircle className="w-4 h-4" />
          Retirar
        </motion.button>
      </div>
      <p className="text-xs text-center text-muted-foreground">
        Completa tu meta diaria para desbloquear el retiro de recompensas
      </p>

      {/* HCS Logs */}
      <div className="glass-card p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-accent" />
          Logs de Consenso HCS
        </h3>
        <div className="space-y-2">
          {mockLogs.map((log, i) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30"
            >
              <Clock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs truncate">{log.msg}</p>
              </div>
              <span className="text-[10px] text-muted-foreground shrink-0">{log.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
