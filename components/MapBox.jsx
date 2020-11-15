import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { motion } from "framer-motion";

import styles from "./mapbox.module.scss";

const MapBox = ({ lat, lon }) => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lon, lat],
      zoom: 14,
    });

    // control panel
    map.addControl(new mapboxgl.NavigationControl());
    // marker
    const marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map);
  }, [lat, lon]);

  return (
    <motion.div
      id="mapbox"
      className={styles.mapbox}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
    ></motion.div>
  );
};

export default MapBox;
