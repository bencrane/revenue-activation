
import React, { useEffect, useRef, useState } from "react";
import { Database, Server, DollarSign } from "lucide-react";

const ETLDiagram = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);
  
  const db1Ref = useRef<HTMLDivElement>(null);
  const db2Ref = useRef<HTMLDivElement>(null);
  const db3Ref = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);
  
  const [paths, setPaths] = useState({
    db1: "M 140,60 L 280,120",
    db2: "M 140,120 L 280,120",
    db3: "M 140,180 L 280,120",
    final: "M 280,120 L 380,120 L 480,120 L 560,120"
  });

  useEffect(() => {
    const updatePaths = () => {
      if (!db1Ref.current || !db2Ref.current || !db3Ref.current || !transformRef.current || !svgRef.current) return;
      
      // Get bounding rectangles of the elements
      const svg = svgRef.current.getBoundingClientRect();
      const db1 = db1Ref.current.getBoundingClientRect();
      const db2 = db2Ref.current.getBoundingClientRect();
      const db3 = db3Ref.current.getBoundingClientRect();
      const transform = transformRef.current.getBoundingClientRect();
      
      // Calculate relative positions to the SVG
      const db1X = db1.right - svg.left;
      const db1Y = db1.top - svg.top + db1.height / 2;
      
      const db2X = db2.right - svg.left;
      const db2Y = db2.top - svg.top + db2.height / 2;
      
      const db3X = db3.right - svg.left;
      const db3Y = db3.top - svg.top + db3.height / 2;
      
      const transformX = transform.left - svg.left;
      const transformY = transform.top - svg.top + transform.height / 2;
      
      // Update paths with calculated coordinates
      setPaths({
        db1: `M ${db1X},${db1Y} L ${transformX},${transformY}`,
        db2: `M ${db2X},${db2Y} L ${transformX},${transformY}`,
        db3: `M ${db3X},${db3Y} L ${transformX},${transformY}`,
        final: `M ${transformX},${transformY} L ${transformX + 100},${transformY} L ${transformX + 200},${transformY} L ${transformX + 280},${transformY}`
      });
    };

    // Initial update and set listener for window resize
    updatePaths();
    window.addEventListener('resize', updatePaths);
    
    return () => {
      window.removeEventListener('resize', updatePaths);
    };
  }, []);

  useEffect(() => {
    const animatePaths = () => {
      const animatePath = (path: SVGPathElement | null, delay: number = 0) => {
        if (!path) return;
        const length = path.getTotalLength();
        
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `none`;
        path.getBoundingClientRect(); // Force reflow
        
        path.style.animation = `svgPathAnim ${path === path4Ref.current ? 3.5 : 3}s ease-in-out ${delay}s forwards`;
      };

      // Animate all three initial paths simultaneously
      animatePath(path1Ref.current, 0);
      animatePath(path2Ref.current, 0);
      animatePath(path3Ref.current, 0);
      
      // Start the converged path animation after the initial paths
      animatePath(path4Ref.current, 2.8);
    };

    animatePaths();

    // Set up interval for continuous animation with longer duration
    const interval = setInterval(animatePaths, 7800);
    return () => clearInterval(interval);
  }, [paths]);

  return (
    <div className="etl-diagram glass-effect p-6 rounded-lg w-full relative">
      {/* SVG Animation Layer */}
      <svg 
        ref={svgRef} 
        className="absolute inset-0 w-full h-full" 
        style={{ zIndex: 0 }} 
        viewBox="0 0 600 240" 
        preserveAspectRatio="none"
      >
        <defs>
          <style>
            {`
              @keyframes svgPathAnim {
                0% {
                  stroke-dashoffset: var(--length);
                  opacity: 0;
                }
                20% {
                  opacity: 1;
                }
                100% {
                  stroke-dashoffset: 0;
                  opacity: 1;
                }
              }
              @keyframes pulseMerge {
                0%, 100% {
                  r: 4;
                  opacity: 0.7;
                }
                50% {
                  r: 7;
                  opacity: 1;
                }
              }
            `}
          </style>
        </defs>
        
        {/* Path from first database - starts at the first database icon */}
        <path
          ref={path1Ref}
          d={paths.db1}
          fill="none"
          stroke="hsl(45 80% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ "--length": "150" } as React.CSSProperties}
        />
        
        {/* Path from second database - starts at the second database icon */}
        <path
          ref={path2Ref}
          d={paths.db2}
          fill="none"
          stroke="hsl(45 80% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ "--length": "120" } as React.CSSProperties}
        />
        
        {/* Path from third database - starts at the third database icon */}
        <path
          ref={path3Ref}
          d={paths.db3}
          fill="none"
          stroke="hsl(45 80% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ "--length": "150" } as React.CSSProperties}
        />
        
        {/* Circle at convergence point adjusted by transformX and transformY */}
        <circle
          cx={paths.db1.split(" L ")[1]?.split(",")[0]}
          cy={paths.db1.split(" L ")[1]?.split(",")[1]}
          r="5"
          fill="hsl(45 80% 75%)"
          style={{ animation: "pulseMerge 2s infinite" }}
        />
        
        {/* Converged path to the right - continues from the convergence point */}
        <path
          ref={path4Ref}
          d={paths.final}
          fill="none"
          stroke="hsl(45 80% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ "--length": "360" } as React.CSSProperties}
        />
      </svg>

      <div className="flex items-center justify-between gap-4 relative">
        {/* Source Databases Section */}
        <div className="flex flex-col gap-2 z-10">
          <div ref={db1Ref} className="etl-node premium-card p-3 rounded-lg flex flex-col items-center">
            <Database className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div ref={db2Ref} className="etl-node premium-card p-3 rounded-lg flex flex-col items-center">
            <Database className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <div ref={db3Ref} className="etl-node premium-card p-3 rounded-lg flex flex-col items-center">
            <Database className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Transform Node */}
        <div ref={transformRef} className="etl-node premium-card p-4 rounded-lg flex flex-col items-center min-h-[120px] justify-center relative overflow-hidden z-10">
          <Server className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-100"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
        
        {/* Data Processing Node */}
        <div className="etl-node premium-card p-4 rounded-lg flex flex-col items-center min-h-[120px] justify-center relative overflow-hidden z-10">
          <Server className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-300"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-400"></div>
            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Simplified Upward Trend Chart */}
        <div className="etl-node premium-card p-4 rounded-lg flex flex-col items-center relative z-10">
          <div className="w-12 h-12 relative">
            <div className="absolute left-0 bottom-0 w-0.5 h-full bg-primary"></div>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"></div>
            <div className="absolute left-0 bottom-0 w-full h-full">
              <div className="absolute left-0 bottom-0 w-full h-full bg-primary/20" style={{
                clipPath: 'polygon(0 100%, 100% 20%, 100% 100%)'
              }}></div>
              <div className="absolute left-0 bottom-0 w-full h-full">
                <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-primary rounded-full"></div>
                <div className="absolute bottom-[40%] left-[50%] w-0.5 h-0.5 bg-primary rounded-full"></div>
                <div className="absolute bottom-[80%] left-full w-0.5 h-0.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Impact with pulsing effect - increased size */}
        <div className="etl-node premium-card p-4 rounded-lg flex flex-col items-center z-10">
          <DollarSign className="w-16 h-16 text-accent animate-pulse" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default ETLDiagram;
