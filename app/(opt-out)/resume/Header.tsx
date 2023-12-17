import {
  LinkedInLogoIcon,
  MobileIcon,
  GlobeIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Fragment } from "react";

const content = {
  phone: { text: "+989197532677", icon: <MobileIcon className="relative top-[-2.5px]" />, href: "tel:+989197532677" },
  email: {
    text: "mohammadali.ap.2000@gmail.com",
    icon: <EnvelopeClosedIcon className="relative top-[-2px]" />,
    href: "mailto:mohammadali.ap.2000@gmail.com",
  },
  website: {
    text: "mohammadali.dev",
    icon: <GlobeIcon className="relative top-[-2px]" />,
    href: "https://mohammadali.dev",
  },
  github: {
    text: "always-maap",
    icon: <GitHubLogoIcon className="relative top-[-2px]" />,
    href: "https://github.com/always-maap",
  },
  linkedIn: {
    text: "tur1ng",
    icon: <LinkedInLogoIcon className="relative top-[-2px]" />,
    href: "https://www.linkedin.com/in/tur1ng/",
  },
  location: { text: "Tehran, Iran", icon: <HomeIcon className="relative top-[-1.5px]" />, href: null },
};

export default function Header() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Mohammad ali Ali panah</h1>
      <div className="flex justify-center gap-2 text-[15px]">
        {Object.entries(content).map(([key, value], index) => (
          <Fragment key={key}>
            <Item text={value.text} icon={value.icon} href={value.href} />{" "}
            {index !== Object.keys(content).length - 1 && "•"}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item(props: { href?: string; icon: React.ReactNode; text: string }) {
  return props.href ? (
    <a className="flex items-center justify-center gap-1" href={props.href}>
      {props.icon}
      <span>{props.text}</span>
    </a>
  ) : (
    <div className="flex items-center justify-center gap-1">
      {props.icon}
      <span>{props.text}</span>
    </div>
  );
}
