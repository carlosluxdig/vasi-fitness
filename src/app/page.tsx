import { LanguageProvider } from "@/context/LanguageContext";
import PortfolioShell from "@/components/PortfolioShell";

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioShell />
    </LanguageProvider>
  );
}
