import React from 'react'
import PortfolioCard from '../portfolioCard/PortfolioCard'
import { card } from '@/app/data/data'

export default function PortfolioSection() {
  return (
    <section>
        <h1>PORTFOLIO</h1>
        <section>
            {card.map((card) => (
                <PortfolioCard key={card.id} title={card.title} category={card.category} imageSrc={card.imageSrc} description={card.description} alt={card.description} />
            ))}
        </section>
    </section>
  )
}
