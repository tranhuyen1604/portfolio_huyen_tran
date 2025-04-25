import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

const photos1 = [
  {
    src: "/photos/photo7.jpg",
    alt: "Home is sweet home",
  },
  {
    src: "/photos/photo8.jpg",
    alt: "Sapa",
  },
  {
    src: "/photos/photo9.jpg",
    alt: "Pretty day",
  },
  {
    src: "/photos/photo10.jpg",
    alt: "HaLong Bay",
  },
  {
    src: "/photos/photo11.jpg",
    alt: "Home is sweet home",
  },
  {
    src: "/photos/photo12.jpg",
    alt: "Cat Ba",
  },
];

const photos2 = [
  { src: "/photos/photo13.jpg", alt: "Da lat" },
  { src: "/photos/photo14.jpg", alt: "Home is sweet home" },
  { src: "/photos/photo15.jpg", alt: "Ha Long Bay" },
  { src: "/photos/photo16.jpg", alt: "A uptight day" },
];

const photos3 = [
  { src: "/photos/photo18.jpg", alt: "Big Ben" },
  { src: "/photos/photo19.jpg", alt: "Phan rang" },
  { src: "/photos/photo20.jpg", alt: "Phan rang" },
  { src: "/photos/photo21.jpg", alt: "Phan Thiet" },
  { src: "/photos/photo22.jpg", alt: "Phan Thiet" },
  { src: "/photos/photo23.jpg", alt: "Phan Thiet" },
  { src: "/photos/photo24.jpg", alt: "Phan rang" },
  { src: "/photos/photo25.jpg", alt: "Bali" },
];

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid columns={3} images={photos1} />

      <ImageGrid columns={2} images={photos2} />

      <ImageGrid columns={4} images={photos3} />
    </section>
  );
}
