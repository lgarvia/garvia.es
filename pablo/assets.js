export const componentIcons = {
    arduino: `<svg viewBox="0 0 100 80" width="100%" height="100%">
    <rect x="5" y="5" width="90" height="70" rx="5" fill="#00878F" stroke="#005C63" stroke-width="2"/>
    <rect x="80" y="25" width="15" height="30" rx="2" fill="#C0C0C0"/> <!-- USB -->
    <rect x="10" y="10" width="15" height="15" fill="#333"/>
    <rect x="35" y="55" width="40" height="10" fill="#333"/>
    <rect x="35" y="10" width="40" height="10" fill="#333"/>
    <text x="50" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="white" text-anchor="middle">UNO</text>
  </svg>`,

    led_red: `<svg viewBox="0 0 50 100" width="100%" height="100%">
    <line x1="15" y1="40" x2="15" y2="90" stroke="#Silver" stroke-width="3"/>
    <line x1="35" y1="40" x2="35" y2="80" stroke="#Silver" stroke-width="3"/>
    <path d="M10,40 Q10,10 25,10 Q40,10 40,40 L10,40 Z" fill="#FF0000" stroke="#800000" stroke-width="1"/>
    <rect x="10" y="38" width="30" height="5" fill="#CC0000"/>
  </svg>`,

    resistor: `<svg viewBox="0 0 100 30" width="100%" height="100%">
    <line x1="0" y1="15" x2="20" y2="15" stroke="#C0C0C0" stroke-width="3"/>
    <line x1="80" y1="15" x2="100" y2="15" stroke="#C0C0C0" stroke-width="3"/>
    <rect x="20" y="5" width="60" height="20" rx="10" fill="#E0D0A0"/>
    <rect x="30" y="5" width="5" height="20" fill="brown"/>
    <rect x="40" y="5" width="5" height="20" fill="black"/>
    <rect x="50" y="5" width="5" height="20" fill="red"/>
    <rect x="70" y="5" width="5" height="20" fill="#D4AF37"/>
  </svg>`,

    servo: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="20" y="40" width="60" height="50" rx="2" fill="#006699"/>
    <rect x="10" y="50" width="80" height="10" rx="1" fill="#004466"/>
    <circle cx="50" cy="40" r="15" fill="white" stroke="#ccc" stroke-width="2"/>
    <path d="M50,40 L50,25 M50,40 L35,50 M50,40 L65,50" stroke="white" stroke-width="5" stroke-linecap="round"/>
    <path d="M50,90 L60,110 L70,110" fill="none" stroke="red" stroke-width="2"/>
    <path d="M50,90 L50,110" fill="none" stroke="brown" stroke-width="2"/>
    <path d="M50,90 L40,110 L30,110" fill="none" stroke="orange" stroke-width="2"/>
  </svg>`,

    breadboard: `<svg viewBox="0 0 200 100" width="100%" height="100%">
    <rect x="0" y="0" width="200" height="100" rx="5" fill="#F5F5F5" stroke="#ddd" stroke-width="2"/>
    <line x1="10" y1="15" x2="190" y2="15" stroke="#f00" stroke-width="2" opacity="0.6"/>
    <line x1="10" y1="85" x2="190" y2="85" stroke="#00f" stroke-width="2" opacity="0.6"/>
    <path d="M10,25 L190,25 M10,35 L190,35 M10,45 L190,45 M10,65 L190,65 M10,75 L190,75" stroke="#333" stroke-width="1" stroke-dasharray="1 9" stroke-linecap="round"/>
  </svg>`,

    battery9v: `<svg viewBox="0 0 60 100" width="100%" height="100%">
    <rect x="10" y="20" width="40" height="75" rx="3" fill="#333" stroke="#111" stroke-width="2"/>
    <rect x="10" y="30" width="40" height="50" fill="#FFA500" opacity="0.8"/>
    <circle cx="20" cy="15" r="5" fill="#ccc" stroke="#999"/> <!-- Male -->
    <path d="M35,10 L45,10 L45,20 L35,20 Z" fill="#ccc" stroke="#999"/> <!-- Female -->
    <text x="30" y="60" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="black">9V</text>
  </svg>`,

    button: `<svg viewBox="0 0 60 60" width="100%" height="100%">
    <rect x="10" y="20" width="40" height="30" rx="2" fill="#333"/>
    <circle cx="30" cy="20" r="10" fill="#CC0000" stroke="#900" stroke-width="2"/>
    <line x1="10" y1="40" x2="5" y2="55" stroke="silver" stroke-width="3"/>
    <line x1="50" y1="40" x2="55" y2="55" stroke="silver" stroke-width="3"/>
  </svg>`,

    buzzer: `<svg viewBox="0 0 60 60" width="100%" height="100%">
     <circle cx="30" cy="30" r="25" fill="#222"/>
     <circle cx="30" cy="30" r="10" fill="#111" stroke="#444"/>
     <text x="30" y="35" font-family="Arial" font-size="8" fill="white" text-anchor="middle">+</text>
  </svg>`,

    photoresistor: `<svg viewBox="0 0 60 60" width="100%" height="100%">
    <circle cx="30" cy="30" r="20" fill="none" stroke="#FFA500" stroke-width="2"/>
    <path d="M15,30 Q22,20 30,30 T45,30" stroke="#FFA500" stroke-width="2" fill="none"/>
    <line x1="30" y1="50" x2="30" y2="60" stroke="silver" stroke-width="2"/> <!-- legs -->
    <line x1="30" y1="10" x2="30" y2="0" stroke="silver" stroke-width="2"/>
  </svg>`
};
