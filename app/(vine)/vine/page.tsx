import { MapaSection, CardShop } from "@/src/ui/components/organisms";

export default function Mapa() {
  return (
    <div
      className="h-[100dvh] overflow-hidden"
    >
      <MapaSection key="mapa-section" />
      <CardShop key="card-shop" />
    </div>
  );
};