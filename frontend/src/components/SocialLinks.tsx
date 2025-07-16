import React from "react";
import { socialLinks } from "../data/social";

export default function SocialLinks() {
  return (
    <div>
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{ margin: 8 }}>
          {link.icon === "twitter" ? "🐦" : ""}
          {link.icon === "github" ? "🐙" : ""}
          {link.name}
        </a>
      ))}
    </div>
  );
}