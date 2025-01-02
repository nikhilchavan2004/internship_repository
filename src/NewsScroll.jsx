import { useState, useEffect } from 'react';

const NewsScroll = () => {
  const news = [
    "   Breaking News: Major tech announcement expected today • ",
    "  Weather Update: Sunny skies predicted for the weekend • ",
    "   Sports: Local team advances to finals • ",
    "   Business: Stock markets hit new record high • "
  ];

  const [position, setPosition] = useState(0);
  const totalWidth = news.join('').length * 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        if (prev < -totalWidth) {
          return 0;
        }
        return prev - 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="w-full bg-yellow-400 overflow-hidden relative h-12">
    
      <div className="absolute w-full">
        <div 
          className="absolute whitespace-nowrap flex items-center h-12 text-black pl-4"
          style={{ 
            transform: `translateX(${position}px)`,
            transition: 'transform 0.02s linear'
          }}
        >
          {news.join('')}
          {news.join('')}
        </div>
      </div>

      
      <div className="absolute left-0 top-0 h-full z-10">
        <div className="h-full px-4 flex items-center font-bold text-white bg-red-500 bg-opacity-100">
          NEWS
        </div>
    
        
      </div>
    </div>
  );
};

export default NewsScroll;