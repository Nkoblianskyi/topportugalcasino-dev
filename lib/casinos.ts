export interface Casino {
  id: number
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  badge?: string
  reviews: number
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
    {
    id: 1,
    rank: 1,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.8,
    bonus: "20 Jogadas Grátis",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
    reviews: 3672,
  },
  {
    id: 2,
    rank: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.7,
    bonus: "25 FreeSpins no Registo",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    badge: "MAIS POPULAR",
    isTopChoice: true,
    url: "https://www.lebull.pt/",
    reviews: 3084,
  },
  {
    id: 3,
    rank: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.6,
    bonus: "5€ Registo + Até 500€ Bónus",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    badge: "MELHOR ESCOLHA",
    url: "https://www.luckia.pt/",
    reviews: 2681,
  },

  {
    id: 4,
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.4,
    bonus: "100% Até 20€",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    reviews: 2058,
  },
  {
    id: 5,
    rank: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.1,
    bonus: "Deposita 10€ e joga com 50€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    badge: "RECOMENDADO",
    url: "https://www.betclic.pt/",
    reviews: 2347,
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
