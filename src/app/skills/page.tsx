import { LanguageColor } from "@/utils/languages";
import BouncingSkillsWrapper from "../components/bouncingskillswrapper";

export default function Skills() { 
    const languages: LanguageColor[] = [
      { 
        name: "/assests/skills/Group 70.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 73.svg", 
        excessiveWidth: 123, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 113.svg", 
        excessiveWidth: 168, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 74.svg", 
        excessiveWidth: 142, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 93.svg", 
        excessiveWidth: 152, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 113.svg", 
        excessiveWidth: 168, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 110.svg", 
        excessiveWidth: 119, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 122.svg", 
        excessiveWidth: 168, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 117.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 116.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 112.svg", 
        excessiveWidth: 168, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 109.svg", 
        excessiveWidth: 143, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 108.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 103.svg", 
        excessiveWidth: 133, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 107.svg", 
        excessiveWidth: 111, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 106.svg", 
        excessiveWidth: 172, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 105.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 104.svg", 
        excessiveWidth: 97, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 102.svg", 
        excessiveWidth: 88, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 97.svg", 
        excessiveWidth: 188, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 101.svg", 
        excessiveWidth: 134, 
        height: 56 
      },
      { 
        name: "/assests/skills/Group 94.svg", 
        excessiveWidth: 119, 
        height: 56 
      }
    ];
    
    return (
        <BouncingSkillsWrapper languages={languages}/>
    );
 }