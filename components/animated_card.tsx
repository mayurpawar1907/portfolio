// components/animated_card.tsx
import React from "react";

interface Card {
  title: string;
  image: string;
}

interface AnimatedCardProps {
  title?: string;
  cards?: Card[];
  columns?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

// ✅ Main AnimatedCard component
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title = "Image Card Cart",
  cards = [],
  columns = "grid-cols-2",
  height = "h-48",
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 w-full">
      <div className={`grid ${columns} gap-6`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative ${height} rounded-xl overflow-hidden transform hover:scale-105 transition duration-500 shadow-md hover:shadow-2xl group w-full`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hover Circle */}
            <div
              className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-black/50 opacity-0 pointer-events-none
                         transform -translate-x-1/2 -translate-y-1/2
                         transition-opacity duration-500
                         group-hover:opacity-70 flex items-center justify-center"
            >
              <span className="text-white text-sm font-semibold">Click Me</span>
            </div>

            {/* Text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition duration-500 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Named exports for internal card sections
export const AnimatedCardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`p-4 ${className || ""}`}>{children}</div>
);

export const AnimatedCardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`px-4 pt-4 ${className || ""}`}>{children}</div>
);

export const AnimatedCardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`px-4 pb-4 ${className || ""}`}>{children}</div>
);

export default AnimatedCard;
