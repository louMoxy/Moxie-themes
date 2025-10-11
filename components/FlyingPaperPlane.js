import { SendHorizontal } from 'lucide-react';

const speed = 5;

export default function FlyingPaperPlane() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Curved path for the paper plane to follow */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="-6 -12 48 30"
        preserveAspectRatio="xMidYMin"
        style={{ overflow: 'visible' }}
      >
        <path
          id="flight-path"
          d="M 3 -1 C 6 -2 4 -6 8 -4 C 12 -1 14 -9 22 -6 C 26 -3 36 -6 34 1 C 31 6 24 9 18 4 C 13.6667 3.3333 9.3333 2.6667 5 4 C 2 5 -3 4 3 -1"
          fill="none"
          stroke="none"
          pathLength="1000"
        />

        {/* Particles trailing the plane */}
        <g>
          <circle r="0.6" fill="rgba(139,92,246,0.75)" stroke="rgba(255,255,255,0.5)" stroke-width="0.08">
            <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto" begin="0.08s">
              <mpath href="#flight-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0.9;0" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="r" values="0.6;0.2" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="0.5" fill="rgba(0,245,212,0.6)" stroke="rgba(255,255,255,0.45)" stroke-width="0.07">
            <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto" begin="0.18s">
              <mpath href="#flight-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0.8;0" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="r" values="0.5;0.18" dur="1.1s" repeatCount="indefinite" />
          </circle>
          <circle r="0.45" fill="rgba(255,91,183,0.6)" stroke="rgba(255,255,255,0.4)" stroke-width="0.06">
            <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto" begin="0.28s">
              <mpath href="#flight-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0.75;0" dur="1s" repeatCount="indefinite" />
            <animate attributeName="r" values="0.45;0.16" dur="1s" repeatCount="indefinite" />
          </circle>
          {/* extra particles for richer trail */}
          <circle r="0.4" fill="rgba(139,92,246,0.55)" stroke="rgba(255,255,255,0.35)" stroke-width="0.06">
            <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto" begin="0.36s">
              <mpath href="#flight-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0.7;0" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="r" values="0.4;0.15" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle r="0.38" fill="rgba(254,228,64,0.6)" stroke="rgba(255,255,255,0.35)" stroke-width="0.05">
            <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto" begin="0.44s">
              <mpath href="#flight-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0.7;0" dur="0.95s" repeatCount="indefinite" />
            <animate attributeName="r" values="0.38;0.14" dur="0.95s" repeatCount="indefinite" />
          </circle>
        </g>
        {/* Animated paper plane using native SVG animateMotion */}
        <g>
          <animateMotion dur={speed}s repeatCount="indefinite" rotate="auto">
            <mpath href="#flight-path" />
          </animateMotion>
          <SendHorizontal
            size={4}
            className="text-purple drop-shadow-lg"
            fill="none"
            style={{
                translate: '-1px -2px',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        </g>
      </svg>
    </div>
  );
}
