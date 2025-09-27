import logoPath from "@assets/Original Logo_1753818245610.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoPath} 
        alt="Stream Digital Logo" 
        className="h-16 w-auto"
      />
    </div>
  );
}
