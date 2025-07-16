import React from "react";
import { links } from "../data/links";

export default function LinkList() {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </li>
      ))}
    </ul>
  );
}