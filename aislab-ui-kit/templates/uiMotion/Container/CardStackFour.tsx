import type React from "react";
import type { BaseViewProps } from "../motion-index";
import "../uiMotion.css";

interface CardStackFourComponent {
  Card: React.FC<CardProps>;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardStackFourProps extends BaseViewProps {
  children?: React.ReactNode;
}

const CardStackFour: React.FC<CardStackFourProps> & CardStackFourComponent = ({
  viewPercentage = 50,
  startPercentage = 20,
  className,
  children,
}: CardStackFourProps) => {
  return (
    <div
      className={`motion-stack-card-container ${className}`}
      style={
        {
          "--cardStack-viewPercentage": `${viewPercentage}%`,
          "--cardStack-startPercentage": `${startPercentage}%`,
        } as React.CSSProperties
      }
    >
      {children &&
        Array.isArray(children) &&
        children.map((child) => <>{child}</>)}
    </div>
  );
};

function Card({ children, className }: CardProps) {
  return (
    <div className={`motion-stack-card rounded-box ${className}`}>
      {children}
    </div>
  );
}

CardStackFour.Card = Card;
export default CardStackFour;
