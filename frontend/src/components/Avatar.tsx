import React from "react";

type AvatarProps = { src: string; alt: string };

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <img src={src} alt={alt} style={{ borderRadius: "50%", width: 100, height: 100 }} />
  );
}