import { motion } from "framer-motion";
import { Lock, Coins, ArrowDownCircle, ArrowUpCircle, Shield, Clock, TrendingUp } from "lucide-react";

const mockLogs = [
  { id: 1, time: "08:32", msg: "Check-in validado · Prueba #0x3f2a", status: "validated" },
  { id: 2, time: "07:15", msg: "Colateral depositado · 50 USDT", status: "deposit" },
  { id: 3, time: "Ayer", msg: "Consenso alcanzado · Nodo 0.0.4832", status: "consensus" },
  { id: 4, time: "Ayer", msg: "Recompensa +12.5 $USDT", status: "reward" },
];

const chartData = [40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100];

const WalletSection = () => {
  const maxVal = Math.max(...chartData);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Billetera <span className="text-gradient-blue">Hedera</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Tu colateral y recompensas</p>
      </div>

      {/* Total Balance */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card p-6 text-center"
      >
        <p className="text-xs text-muted-foreground uppercase tracking-wider">Balance Total</p>
        <p className="text-4xl font-bold mt-2">$14,250<span className="text-xl text-muted-foreground">.42</span></p>
        <div className="flex items-center justify-center gap-1 mt-2 text-green-400 text-xs">
          <TrendingUp className="w-3 h-3" />
          <span>+12.5% esta semana</span>
        </div>
      </motion.div>

      {/* Mini Chart */}
      <div className="glass-card p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Rendimiento 12 Semanas</h3>
        <div className="flex items-end gap-1.5 h-20">
          {chartData.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(val / maxVal) * 100}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`flex-1 rounded-t-sm ${i === chartData.length - 1 ? "gradient-orange" : "bg-accent/30"}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-muted-foreground">Sem 1</span>
          <span className="text-[10px] text-muted-foreground">Sem 12</span>
        </div>
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
          <p className="text-2xl font-bold">$250<span className="text-sm text-muted-foreground">.00</span></p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-[10px] text-primary">Bloqueado</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card p-4 space-y-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Coins className="w-3.5 h-3.5 text-accent" />
            USDT
          </div>
          <p className="text-2xl font-bold text-gradient-blue">14,000<span className="text-sm">.42</span></p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="text-[10px] text-accent">Hedera HTS</p>
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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="py-3.5 rounded-xl gradient-blue text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 neon-glow-blue"
        >
          <ArrowUpCircle className="w-4 h-4" />
          Retirar
        </motion.button>
      </div>

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
