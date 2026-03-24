import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './YamahaLocationsMap.module.css';

// Fix for default marker icon in React
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  name: string;
  address: string;
  position: LatLngExpression;
}

const locations: Location[] = [
  {
    name: 'Yamaha Klaipėda',
    address: 'Baltijos pr. 26E<br/>93222 Klaipėda<br/>Lithuania',
    position: [55.7034, 21.1446] as LatLngExpression
  },
  {
    name: 'Yamaha Vilnius',
    address: 'Perkūnkiemio 4<br/>12130 Vilnius<br/>Lithuania',
    position: [54.6892, 25.2797] as LatLngExpression
  },
  {
    name: 'Yamaha Kaunas',
    address: 'Chemijos g. 19<br/>51326 Kaunas<br/>Lithuania',
    position: [54.8987, 23.9030] as LatLngExpression
  }
];

const YamahaLocationsMap = () => {
  // Calculate center of Lithuania for better initial view
  const center: LatLngExpression = [55.1694, 23.8813];

  return (
    <div className={styles.yamahaLocationsMap}>
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: '500px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <div className={styles.popupContent}>
                <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: location.address }} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default YamahaLocationsMap;
