import React from "react";
import CampusCarousel from "../components/SedeCarousel";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sedes disponibles</h1>
      <CampusCarousel />
    </div>
  );
}
