import { LanguageColor } from "@/utils/languages";
import BouncingSkillsWrapper from "../components/bouncingskillswrapper";

export default function Skills() { 
    const languages: LanguageColor[] = [
      { 
        name: "/assests/skills/typescript.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/jira.svg", 
        excessiveWidth: 123
      },
      { 
        name: "/assests/skills/vectordb.svg", 
        excessiveWidth: 168
      },
      { 
        name: "/assests/skills/flask.svg", 
        excessiveWidth: 142
      },
      { 
        name: "/assests/skills/java.svg", 
        excessiveWidth: 152
      },
      { 
        name: "/assests/skills/react.svg", 
        excessiveWidth: 119
      },
      { 
        name: "/assests/skills/mongodb.svg", 
        excessiveWidth: 168
      },
      { 
        name: "/assests/skills/agile.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/versionone.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/snowflake.svg", 
        excessiveWidth: 168
      },
      { 
        name: "/assests/skills/angular.svg", 
        excessiveWidth: 143
      },
      { 
        name: "/assests/skills/springboot.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/lambda.svg", 
        excessiveWidth: 133
      },
      { 
        name: "/assests/skills/mui.svg", 
        excessiveWidth: 111
      },
      { 
        name: "/assests/skills/hibernate.svg", 
        excessiveWidth: 172
      },
      { 
        name: "/assests/skills/cloudfront.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/git.svg", 
        excessiveWidth: 97
      },
      { 
        name: "/assests/skills/s3.svg", 
        excessiveWidth: 88
      },
      { 
        name: "/assests/skills/javascript.svg", 
        excessiveWidth: 188
      },
      { 
        name: "/assests/skills/docker.svg", 
        excessiveWidth: 134
      },
      { 
        name: "/assests/skills/python.svg", 
        excessiveWidth: 119
      }
    ];
    
    return (
        <BouncingSkillsWrapper languages={languages}/>
    );
 }