export interface PortfolioCardProps {
    title?: string;
    category?: string;
    imageSrc: string;
    alt: string;
    description?: string;
    onClick?: () => void;
  }