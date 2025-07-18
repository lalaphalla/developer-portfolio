import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  Laptop, 
  Database, 
  Cloud 
} from "lucide-react";

export const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Laptop,
  Database,
  Cloud,
};

export const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || Code;
};