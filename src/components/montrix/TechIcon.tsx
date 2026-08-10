import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

import type { WorkshopTech } from "@/lib/montrix-data";

type TechIconProps = {
  icon: WorkshopTech["icon"];
  className?: string;
  size?: number | string;
};

const technologyIcons: Record<WorkshopTech["icon"], IconType> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  nodedotjs: SiNodedotjs,
  python: SiPython,
  java: FaJava,
  flutter: SiFlutter,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  mysql: SiMysql,
  mongodb: SiMongodb,
  aws: FaAws,
  tensorflow: SiTensorflow,
};

export default function TechIcon({
  icon,
  className = "",
  size = 20,
}: TechIconProps) {
  const Icon = technologyIcons[icon];

  return (
    <Icon
      aria-hidden="true"
      className={className}
      size={size}
    />
  );
}