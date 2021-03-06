import React from 'react';
import type { MapProps } from 'react-leaflet';
import { Map } from 'react-leaflet';
import styles from './index.less';
// import type L from 'leaflet';

import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
// type PMDrawCircleEvent = { layer: L.Circle & { pm: { enable: () => void } } };
// type PMEditCircleEvent = { target: L.Circle };
interface Props extends MapProps {
  leafletMapRef: React.RefObject<Map>;
  displayTools?: boolean;
  onShapeCreate: (shape: any) => void;
  onShapeEdit: (shape: any) => void;
}

const MapWithGeoman: React.FC<Props> = (props) => {
  const { children, leafletMapRef, displayTools, ...mapProps } = props;

  React.useEffect(() => {
    if (leafletMapRef.current) {
      const mapElement: any = leafletMapRef.current.leafletElement;

      // mapElement.pm.enableDraw('Polygon', {
      //   snappable: true,
      //   snapDistance: 20,
      // });

      mapElement.pm.addControls({
        drawMarker: false,
        drawCircle: false,
        drawCircleMarker: false,
        drawPolyline: false,
        drawRectangle: false,
        drawPolygon: false,
        editMode: false,
        dragMode: false,
        cutPolygon: true,
        rotateMode: false,
        removalMode: false,
      });
      mapElement.pm.setGlobalOptions({ pmIgnore: false });

      // Custom button to save
      if (props.displayTools) {
        mapElement.pm.Toolbar.createCustomControl({
          name: 'StoreShapes',
          title: 'Store all shapes',
          block: 'custom',
          className: styles.customControlIcon,
          toggle: false,
          afterClick: () => {
            const saveGeoJson = JSON.stringify(mapElement.pm.getGeomanDrawLayers(true).toGeoJSON());
            const filename = 'data.geojson';
            const element = document.createElement('a');
            element.setAttribute(
              'href',
              'data:text/plain;charset=utf-8,' + encodeURIComponent(saveGeoJson),
            );
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            console.log(saveGeoJson);
          },
        });
      }
      mapElement.on('pm:create', (e: any) => {
        props.onShapeCreate(e);
      });

      mapElement.on('pm:edit', (e: any) => {
        props.onShapeEdit(e);
      });
    }
  }, []);

  return (
    <Map ref={leafletMapRef} {...mapProps}>
      {children}
    </Map>
  );
};

export default MapWithGeoman;
