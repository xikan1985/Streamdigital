interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Circular background */}
        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
          {/* Mountain peaks */}
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M3 18L8 10L12 14L16 8L21 16V18H3Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            {/* Water/waves at bottom */}
            <path 
              d="M3 19C5 17 7 19 9 17C11 19 13 17 15 19C17 17 19 19 21 17" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              fill="none"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-charcoal">Stream Digital</div>
        <div className="text-xs text-primary font-medium">1% matters</div>
      </div>
    </div>
  );
}
