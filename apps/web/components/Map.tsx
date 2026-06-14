'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const locations: { name: string; position: [number, number] }[] = [
  { name: 'Marseille', position: [43.296398, 5.370000] },
  { name: 'Pyreneeën, Andorra', position: [42.5063, 1.5218] },
  { name: 'Amsterdam', position: [52.3676, 4.9041] },
  { name: 'Prague', position: [50.0755, 14.4378] },
  { name: 'Berlin', position: [52.5200, 13.4050] },
  { name: 'Cebu', position: [10.3157, 123.8854] },
  { name: 'Manila', position: [14.5995, 120.9842] },
  { name: 'Londen', position: [51.509865, -0.118092] },
  { name: 'Paris', position: [48.8566, 2.3522] },
  { name: 'Split', position: [43.508133, 16.440193] },
];

export default function MapComponent() {
  return (
    <MapContainer center={[20, 10]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.name} position={loc.position}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
