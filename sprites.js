function spriteSVG(kind, outfit){
  const A={
    leo:{body:"#F4A261",belly:"#E9C46A",accent:"#E76F51",snout:"#F1C27D"},
    zara:{body:"#F8F9FA",belly:"#E9ECEF",accent:"#212529",snout:"#DEE2E6"},
    momo:{body:"#A98467",belly:"#D4A373",accent:"#A98467",snout:"#E6CCB2"},
    pip:{body:"#2A9D8F",belly:"#E9C46A",accent:"#E76F51",snout:"#F4A261"},
    tiko:{body:"#F4A261",belly:"#FEFAE0",accent:"#1a1a2e",snout:"#F1C27D"},
    nala:{body:"#E9C46A",belly:"#FEFAE0",accent:"#A98467",snout:"#E9C46A"},
    bongo:{body:"#9CA3AF",belly:"#D1D5DB",accent:"#6B7280",snout:"#9CA3AF"}
  };
  const c=A[kind]||A.leo;
  let hat="",acc="";
  if(outfit==="tuxedo")acc='<rect x="28" y="58" width="24" height="22" rx="3" fill="#1a1a2e"/><rect x="34" y="58" width="12" height="8" fill="#fff"/><path d="M36 66 L40 72 L44 66" fill="#c0392b"/>';
  if(outfit==="crown")hat='<path d="M30 22 L34 14 L40 20 L46 14 L50 22 Z" fill="#E9C46A" stroke="#B08900" stroke-width="1"/>';
  if(outfit==="disco")acc='<circle cx="40" cy="48" r="3" fill="#ff6b6b"/><circle cx="32" cy="52" r="2.5" fill="#48dbfb"/><circle cx="48" cy="52" r="2.5" fill="#feca57"/>';
  if(outfit==="cape")acc='<path d="M24 56 Q20 80 28 95 L40 70 L52 95 Q60 80 56 56 Z" fill="#E76F51" opacity=".85"/>';
  if(outfit==="shades")acc='<rect x="28" y="36" width="24" height="8" rx="2" fill="#1a1a2e"/>';
  if(outfit==="hula")acc='<ellipse cx="40" cy="72" rx="18" ry="6" fill="#2A9D8F"/><circle cx="28" cy="70" r="3" fill="#E76F51"/><circle cx="52" cy="70" r="3" fill="#E76F51"/>';
  if(outfit==="space")hat='<ellipse cx="40" cy="20" rx="22" ry="16" fill="#dee2e6" stroke="#adb5bd" stroke-width="1.5"/>';
  if(outfit==="chef")hat='<rect x="30" y="8" width="20" height="14" rx="4" fill="#fff"/><rect x="28" y="18" width="24" height="6" rx="2" fill="#fff"/>';
  if(outfit==="rain")acc='<path d="M22 55 L40 50 L58 55 L56 85 L24 85 Z" fill="#48dbfb" opacity=".55"/>';
  let head="",body="",limbs="",tail="";
  if(kind==="leo"){
    head=`<ellipse cx="40" cy="28" rx="26" ry="24" fill="${c.accent}"/><ellipse cx="40" cy="30" rx="18" ry="16" fill="${c.body}"/><ellipse cx="40" cy="36" rx="10" ry="7" fill="${c.snout}"/><circle cx="33" cy="28" r="2.5" fill="#1a1a2e"/><circle cx="47" cy="28" r="2.5" fill="#1a1a2e"/><ellipse cx="40" cy="38" rx="3" ry="2" fill="#1a1a2e"/>`;
    body=`<ellipse cx="40" cy="68" rx="16" ry="20" fill="${c.body}"/><ellipse cx="40" cy="70" rx="10" ry="12" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="22" cy="62" rx="6" ry="12" fill="${c.body}"/><ellipse class="arm-r" cx="58" cy="62" rx="6" ry="12" fill="${c.body}"/><ellipse class="leg-l" cx="30" cy="92" rx="7" ry="12" fill="${c.body}"/><ellipse class="leg-r" cx="50" cy="92" rx="7" ry="12" fill="${c.body}"/><ellipse cx="30" cy="102" rx="8" ry="4" fill="${c.accent}"/><ellipse cx="50" cy="102" rx="8" ry="4" fill="${c.accent}"/>`;
    tail=`<path class="tail" d="M55 78 Q70 70 68 55" stroke="${c.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  } else if(kind==="zara"){
    head=`<ellipse cx="40" cy="28" rx="17" ry="16" fill="${c.body}"/><rect x="32" y="16" width="3" height="14" fill="#212529"/><rect x="38" y="14" width="3" height="16" fill="#212529"/><rect x="45" y="16" width="3" height="14" fill="#212529"/><ellipse cx="40" cy="36" rx="9" ry="6" fill="${c.snout}"/><circle cx="33" cy="27" r="2.5" fill="#1a1a2e"/><circle cx="47" cy="27" r="2.5" fill="#1a1a2e"/>`;
    body=`<ellipse cx="40" cy="68" rx="15" ry="20" fill="${c.body}"/><rect x="30" y="52" width="3" height="36" fill="#212529" opacity=".7"/><rect x="36" y="52" width="3" height="36" fill="#212529" opacity=".7"/><rect x="42" y="52" width="3" height="36" fill="#212529" opacity=".7"/><rect x="48" y="52" width="3" height="36" fill="#212529" opacity=".7"/><ellipse cx="40" cy="72" rx="9" ry="11" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="22" cy="62" rx="5" ry="11" fill="${c.body}"/><ellipse class="arm-r" cx="58" cy="62" rx="5" ry="11" fill="${c.body}"/><ellipse class="leg-l" cx="30" cy="92" rx="6" ry="12" fill="${c.body}"/><ellipse class="leg-r" cx="50" cy="92" rx="6" ry="12" fill="${c.body}"/><ellipse cx="30" cy="102" rx="7" ry="3.5" fill="#212529"/><ellipse cx="50" cy="102" rx="7" ry="3.5" fill="#212529"/>`;
    tail=`<path class="tail" d="M54 75 Q72 65 70 45" stroke="#212529" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  } else if(kind==="momo"){
    head=`<ellipse cx="40" cy="30" rx="18" ry="17" fill="${c.body}"/><ellipse cx="40" cy="36" rx="11" ry="9" fill="${c.snout}"/><circle cx="33" cy="28" r="2.5" fill="#1a1a2e"/><circle cx="47" cy="28" r="2.5" fill="#1a1a2e"/><ellipse cx="40" cy="38" rx="3" ry="2.5" fill="#1a1a2e"/><ellipse cx="24" cy="22" rx="6" ry="7" fill="${c.body}"/><ellipse cx="56" cy="22" rx="6" ry="7" fill="${c.body}"/>`;
    body=`<ellipse cx="40" cy="68" rx="15" ry="18" fill="${c.body}"/><ellipse cx="40" cy="70" rx="10" ry="12" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="20" cy="60" rx="6" ry="14" fill="${c.body}"/><ellipse class="arm-r" cx="60" cy="60" rx="6" ry="14" fill="${c.body}"/><ellipse class="leg-l" cx="30" cy="90" rx="7" ry="14" fill="${c.body}"/><ellipse class="leg-r" cx="50" cy="90" rx="7" ry="14" fill="${c.body}"/><ellipse cx="30" cy="102" rx="8" ry="4" fill="${c.snout}"/><ellipse cx="50" cy="102" rx="8" ry="4" fill="${c.snout}"/>`;
    tail=`<path class="tail" d="M54 78 Q75 90 72 60" stroke="${c.body}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  } else if(kind==="pip"){
    head=`<ellipse cx="40" cy="30" rx="16" ry="15" fill="${c.body}"/><ellipse cx="40" cy="34" rx="8" ry="6" fill="${c.snout}"/><path d="M36 34 L40 44 L44 34 Z" fill="#E76F51"/><circle cx="34" cy="28" r="2.5" fill="#1a1a2e"/><circle cx="46" cy="28" r="2.5" fill="#1a1a2e"/><path d="M28 18 Q40 6 52 18" stroke="${c.accent}" stroke-width="4" fill="none"/>`;
    body=`<ellipse cx="40" cy="66" rx="14" ry="18" fill="${c.body}"/><ellipse cx="40" cy="68" rx="9" ry="12" fill="${c.belly}"/><ellipse cx="18" cy="60" rx="10" ry="6" fill="#E76F51" transform="rotate(-20 18 60)"/><ellipse cx="62" cy="60" rx="10" ry="6" fill="#E76F51" transform="rotate(20 62 60)"/>`;
    limbs=`<ellipse class="leg-l" cx="32" cy="90" rx="5" ry="12" fill="${c.body}"/><ellipse class="leg-r" cx="48" cy="90" rx="5" ry="12" fill="${c.body}"/><ellipse cx="32" cy="100" rx="6" ry="3" fill="#E76F51"/><ellipse cx="48" cy="100" rx="6" ry="3" fill="#E76F51"/>`;
    tail=`<path class="tail" d="M52 75 Q68 85 65 95" stroke="#E76F51" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  } else if(kind==="tiko"){
    head=`<ellipse cx="40" cy="28" rx="18" ry="16" fill="${c.body}"/><path d="M28 20 L32 12 L36 20" fill="${c.body}" stroke="#1a1a2e" stroke-width="1"/><path d="M44 20 L48 12 L52 20" fill="${c.body}" stroke="#1a1a2e" stroke-width="1"/><ellipse cx="40" cy="36" rx="10" ry="7" fill="${c.snout}"/><circle cx="33" cy="27" r="2.5" fill="#1a1a2e"/><circle cx="47" cy="27" r="2.5" fill="#1a1a2e"/>`;
    body=`<ellipse cx="40" cy="68" rx="16" ry="20" fill="${c.body}"/><path d="M32 50 Q34 70 32 90" stroke="#1a1a2e" stroke-width="2.5" fill="none" opacity=".7"/><path d="M40 50 Q42 70 40 90" stroke="#1a1a2e" stroke-width="2.5" fill="none" opacity=".7"/><path d="M48 50 Q50 70 48 90" stroke="#1a1a2e" stroke-width="2.5" fill="none" opacity=".7"/><ellipse cx="40" cy="72" rx="10" ry="12" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="22" cy="62" rx="6" ry="12" fill="${c.body}"/><ellipse class="arm-r" cx="58" cy="62" rx="6" ry="12" fill="${c.body}"/><ellipse class="leg-l" cx="30" cy="92" rx="7" ry="12" fill="${c.body}"/><ellipse class="leg-r" cx="50" cy="92" rx="7" ry="12" fill="${c.body}"/><ellipse cx="30" cy="102" rx="8" ry="4" fill="#1a1a2e"/><ellipse cx="50" cy="102" rx="8" ry="4" fill="#1a1a2e"/>`;
    tail=`<path class="tail" d="M55 78 Q72 60 60 48" stroke="${c.body}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="60" cy="48" r="4" fill="#1a1a2e"/>`;
  } else if(kind==="nala"){
    head=`<ellipse cx="40" cy="14" rx="12" ry="11" fill="${c.body}"/><rect x="36" y="22" width="8" height="22" rx="3" fill="${c.body}"/><ellipse cx="40" cy="14" rx="6" ry="5" fill="${c.snout}"/><circle cx="35" cy="12" r="2" fill="#1a1a2e"/><circle cx="45" cy="12" r="2" fill="#1a1a2e"/><ellipse cx="30" cy="8" rx="3" ry="4" fill="${c.accent}"/><ellipse cx="50" cy="8" rx="3" ry="4" fill="${c.accent}"/>`;
    body=`<ellipse cx="40" cy="68" rx="15" ry="18" fill="${c.body}"/><circle cx="32" cy="58" r="3" fill="#A98467" opacity=".7"/><circle cx="48" cy="60" r="3" fill="#A98467" opacity=".7"/><circle cx="36" cy="72" r="3" fill="#A98467" opacity=".7"/><circle cx="44" cy="78" r="3" fill="#A98467" opacity=".7"/><ellipse cx="40" cy="72" rx="9" ry="11" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="24" cy="58" rx="5" ry="14" fill="${c.body}"/><ellipse class="arm-r" cx="56" cy="58" rx="5" ry="14" fill="${c.body}"/><ellipse class="leg-l" cx="30" cy="92" rx="6" ry="14" fill="${c.body}"/><ellipse class="leg-r" cx="50" cy="92" rx="6" ry="14" fill="${c.body}"/><ellipse cx="30" cy="104" rx="7" ry="3.5" fill="#A98467"/><ellipse cx="50" cy="104" rx="7" ry="3.5" fill="#A98467"/>`;
    tail=`<path class="tail" d="M54 78 Q70 85 68 95" stroke="${c.body}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="68" cy="95" r="3.5" fill="${c.accent}"/>`;
  } else {
    head=`<ellipse cx="40" cy="32" rx="22" ry="18" fill="${c.body}"/><ellipse cx="40" cy="40" rx="14" ry="10" fill="${c.belly}"/><circle cx="32" cy="28" r="2.5" fill="#1a1a2e"/><circle cx="48" cy="28" r="2.5" fill="#1a1a2e"/><ellipse cx="34" cy="42" rx="3" ry="2" fill="#1a1a2e"/><ellipse cx="46" cy="42" rx="3" ry="2" fill="#1a1a2e"/><ellipse cx="24" cy="22" rx="5" ry="4" fill="${c.accent}"/><ellipse cx="56" cy="22" rx="5" ry="4" fill="${c.accent}"/>`;
    body=`<ellipse cx="40" cy="70" rx="20" ry="18" fill="${c.body}"/><ellipse cx="40" cy="74" rx="13" ry="12" fill="${c.belly}"/>`;
    limbs=`<ellipse class="arm-l" cx="18" cy="64" rx="7" ry="12" fill="${c.body}"/><ellipse class="arm-r" cx="62" cy="64" rx="7" ry="12" fill="${c.body}"/><ellipse class="leg-l" cx="28" cy="92" rx="9" ry="12" fill="${c.body}"/><ellipse class="leg-r" cx="52" cy="92" rx="9" ry="12" fill="${c.body}"/><ellipse cx="28" cy="102" rx="10" ry="4" fill="${c.accent}"/><ellipse cx="52" cy="102" rx="10" ry="4" fill="${c.accent}"/>`;
    tail=`<path class="tail" d="M58 80 Q66 78 64 88" stroke="${c.body}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  }
  return `<svg class="sprite" viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg"><g class="figure">${tail}${limbs}${body}${acc}${head}${hat}</g></svg>`;
}
