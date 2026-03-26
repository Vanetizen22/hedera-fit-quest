import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, LayoutDashboard, Wallet, Users, Mountain, Scan } from "lucide-react";
import OnboardingSection from "@/components/conquestfit/OnboardingSection";
import DashboardSection from "@/components/conquestfit/DashboardSection";
import WalletSection from "@/components/conquestfit/WalletSection";
import SocialSection from "@/components/conquestfit/SocialSection";
import AndesChallengeSection from "@/components/conquestfit/AndesChallengeSection";
import ARValidatorSection from "@/components/conquestfit/ARValidatorSection";

const tabs = [
  { id: "profile", label: "Perfil", icon: Flame },
  { id: "dashboard", label: "Conquista", icon: LayoutDashboard },
  { id: "andes", label: "Andes", icon: Mountain },
  { id: "ar", label: "AR", icon: Scan },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "social", label: "Social", icon: Users },
] as const;

type TabId = (typeof tabs)[number]["id"];

export interface UserProfile {
  name: string;
  fitnessLevel: string;
  weight: number;
  height: number;
  routine: string;
  diet: string;
  hasNutritionist: boolean;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const handleProfileComplete = (p: UserProfile) => {
    setProfile(p);
    setActiveTab("dashboard");
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col topo-bg">
      <div className="topo-grid" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card-strong border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold tracking-tight">
              <span className="text-gradient-orange">Conquest</span>
              <span className="text-foreground">Fit</span>
            </h1>
          </div>
          {profile && (
            <div className="text-xs text-muted-foreground">
              Hola, <span className="text-primary font-medium">{profile.name}</span>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24 relative z-10">
        <div className="max-w-lg mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "profile" && (
                <OnboardingSection profile={profile} onComplete={handleProfileComplete} />
              )}
              {activeTab === "dashboard" && (
                <DashboardSection userName={profile?.name || "Conquistador"} />
              )}
              {activeTab === "andes" && <AndesChallengeSection />}
              {activeTab === "ar" && <ARValidatorSection />}
              {activeTab === "wallet" && <WalletSection />}
              {activeTab === "social" && <SocialSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card-strong border-t border-white/[0.06]">
        <div className="max-w-lg mx-auto flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4.5 h-4.5" />
                <span className="font-medium">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute top-0 left-1/4 right-1/4 h-0.5 gradient-orange rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Index;
