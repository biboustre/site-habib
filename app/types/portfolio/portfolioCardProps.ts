export interface PortfolioCardProps {
    title: string;
    category: string;
    imageSrc: string;
    description?: string;
    onClick?: () => void;
  }