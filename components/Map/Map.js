import React, { useRef, useState, useEffect} from 'react';
import cities from '@/utils/cities';
import { getCityLabelPosition } from '@/utils/MapHelper';
import styles from './Map.module.css';


const Map = ({ selectedCity, setSelectedCity, colorData = {} }) => {
  const svgRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const handleClick = (event) => {
    if (event.target.tagName === 'path') {
      const city = event.target.parentNode.getAttribute("data-city");
      setSelectedCity(city);
    }
  };

  return (
    <div className={styles.mapContainer}>

      <div className={styles.wrapper}>
        <svg
          ref={svgRef}
          version="1.1"
          onClick={handleClick}
          className={styles.map}
          viewBox="0 0 1007 443"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            {cities.map((city, key) => {
              const labelPosition = getCityLabelPosition(city, svgRef);
              return (
                <g key={key} id={`city_${city.plate}`} data-city={city.city} data-plate={city.plate}>
                  <path
                    d={city.draw}
                    className={styles.path}
                    style={{
                      fill: selectedCity === city.city ? 'var(--honey-yellow)' : (colorData[city.plate] || '')
                    }}
                  />
                  <text
                    className={styles.cityLabel}
                    x={labelPosition.x}
                    y={labelPosition.y}
                  >
                    {city.city}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Map;