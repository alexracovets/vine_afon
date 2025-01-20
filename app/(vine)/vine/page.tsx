import { MapaSection, CardShop } from "@/src/ui/components/organisms";

export default function Mapa() {
  return (
    <div
      className="h-[100dvh] overflow-hidden"
    >
      <MapaSection />
      <CardShop />
    </div>
  );
};