import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfile } from "@/pages/Index";
import { User, Scale, Ruler, Dumbbell, Salad, Stethoscope, ChevronRight } from "lucide-react";

interface Props {
  profile: UserProfile | null;
  onComplete: (p: UserProfile) => void;
}

const fitnessLevels = [
  { value: "sedentary", label: "Sedentario" },
  { value: "beginner", label: "Principiante" },
  { value: "intermediate", label: "Intermedio" },
  { value: "advanced", label: "Avanzado" },
  { value: "athlete", label: "Atleta" },
];

const OnboardingSection = ({ profile, onComplete }: Props) => {
  const [name, setName] = useState(profile?.name || "");
  const [fitnessLevel, setFitnessLevel] = useState(profile?.fitnessLevel || "");
  const [weight, setWeight] = useState(profile?.weight || 0);
  const [height, setHeight] = useState(profile?.height || 0);
  const [routine, setRoutine] = useState(profile?.routine || "");
  const [diet, setDiet] = useState(profile?.diet || "");
  const [hasNutritionist, setHasNutritionist] = useState(profile?.hasNutritionist || false);
  const [showCard, setShowCard] = useState(!!profile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p: UserProfile = { name, fitnessLevel, weight, height, routine, diet, hasNutritionist };
    onComplete(p);
    setShowCard(true);
  };

  if (showCard && profile) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-6 space-y-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center text-2xl font-bold text-primary-foreground">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">Conquistador · {fitnessLevels.find(f => f.value === profile.fitnessLevel)?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card p-3 text-center">
            <Scale className="w-4 h-4 mx-auto text-primary mb-1" />
            <p className="text-lg font-bold">{profile.weight}<span className="text-xs text-muted-foreground ml-1">kg</span></p>
          </div>
          <div className="glass-card p-3 text-center">
            <Ruler className="w-4 h-4 mx-auto text-accent mb-1" />
            <p className="text-lg font-bold">{profile.height}<span className="text-xs text-muted-foreground ml-1">cm</span></p>
          </div>
        </div>
        {profile.routine && (
          <div className="text-sm"><span className="text-muted-foreground">Rutina:</span> <span className="text-foreground">{profile.routine}</span></div>
        )}
        {profile.diet && (
          <div className="text-sm"><span className="text-muted-foreground">Dieta:</span> <span className="text-foreground">{profile.diet}</span></div>
        )}
        <div className="text-sm flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">Nutricionista:</span>
          <span className={profile.hasNutritionist ? "text-green-400" : "text-muted-foreground"}>{profile.hasNutritionist ? "Sí" : "No"}</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCard(false)}
          className="w-full text-sm text-primary underline underline-offset-4"
        >
          Editar perfil
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Únete a la <span className="text-gradient-orange">Conquista</span></h2>
        <p className="text-sm text-muted-foreground mt-1">Crea tu perfil de conquistador</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="glass-card p-4 space-y-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground flex items-center gap-2"><User className="w-4 h-4" /> Nombre</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre de guerra" required className="bg-muted/50 border-white/[0.08]" />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground flex items-center gap-2"><Dumbbell className="w-4 h-4" /> Estado Físico</Label>
            <Select value={fitnessLevel} onValueChange={setFitnessLevel} required>
              <SelectTrigger className="bg-muted/50 border-white/[0.08]">
                <SelectValue placeholder="Selecciona tu nivel" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/[0.08]">
                {fitnessLevels.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground flex items-center gap-2"><Scale className="w-4 h-4" /> Peso (kg)</Label>
              <Input type="number" value={weight || ""} onChange={(e) => setWeight(Number(e.target.value))} placeholder="75" required className="bg-muted/50 border-white/[0.08]" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground flex items-center gap-2"><Ruler className="w-4 h-4" /> Altura (cm)</Label>
              <Input type="number" value={height || ""} onChange={(e) => setHeight(Number(e.target.value))} placeholder="175" required className="bg-muted/50 border-white/[0.08]" />
            </div>
          </div>
        </div>

        <div className="glass-card p-4 space-y-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground flex items-center gap-2"><Dumbbell className="w-4 h-4" /> Rutina Actual</Label>
            <Textarea value={routine} onChange={(e) => setRoutine(e.target.value)} placeholder="Describe tu rutina de entrenamiento..." rows={3} className="bg-muted/50 border-white/[0.08] resize-none" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground flex items-center gap-2"><Salad className="w-4 h-4" /> Dieta Actual</Label>
            <Textarea value={diet} onChange={(e) => setDiet(e.target.value)} placeholder="Describe tu dieta actual..." rows={3} className="bg-muted/50 border-white/[0.08] resize-none" />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground flex items-center gap-2"><Stethoscope className="w-4 h-4" /> ¿Asiste a Nutricionista?</Label>
            <Switch checked={hasNutritionist} onCheckedChange={setHasNutritionist} />
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3.5 rounded-xl gradient-orange text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 neon-glow-orange"
        >
          Comenzar Conquista <ChevronRight className="w-4 h-4" />
        </motion.button>
      </form>
    </div>
  );
};

export default OnboardingSection;
