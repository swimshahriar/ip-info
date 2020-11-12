import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import styles from "./mapbox.module.scss";

const MapBox = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.5825, 45.5808],
      zoom: 9,
    });

    // control panel
    map.addControl(new mapboxgl.NavigationControl());
    // marker
    const marker = new mapboxgl.Marker()
      .setLngLat([-73.5825, 45.5808])
      .addTo(map);
  }, []);

  return <div id="mapbox" className={styles.mapbox}></div>;
};

export default MapBox;
