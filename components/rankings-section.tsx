import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"
import { Trophy } from "lucide-react"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-10 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="space-y-4 md:space-y-6">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.rank} casino={casino} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
