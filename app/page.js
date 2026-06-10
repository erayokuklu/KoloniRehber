"use client";
import React, { useState } from 'react';
import data from '@/utils/arıcılık.json';
import styles from '@/app/page.module.css';
import Header from '../components/Header/Header';
import Extrainfo from '../components/Info/Extrainfo';
import Footer from '../components/Footer/Footer';
import AI from '@/components/AI/AI';
import Map from '../components/Map/Map';
import Filter from '@/components/Filter/Filter';
import Response from '@/components/Response/Response';


const Page = () => {

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedColony, setSelectedColony] = React.useState("");
  const [selectedClimate, setSelectedClimate] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [reachableCities, setReachableCities] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  const getCityData = (cityName) => {
    return data.citys.find(city => city.city === cityName);
  };

  const showWarning = (message) => {
    setWarningMessage(message);
    setTimeout(() => {
      setWarningMessage("");
    }, 3500);
  };

  const handleColonySelection = () => {
    if (!selectedCity || !selectedColony || !selectedClimate) {
      showWarning("Sonuçları görmek için haritadan bir şehir seçin ve filtreleri doldurun.");
      return;
    }
    const cityData = getCityData(selectedCity);
    if (!cityData) {
      showWarning("Seçilen şehre ait veri bulunamadı.");
      return;
    }
    let dataToShow = [];
    if (selectedColony === "Zkoloni") {
      dataToShow = cityData.gidilebilecek_iller_yakın;
    } else if (selectedColony === "Gkoloni") {
      dataToShow = [
        ...cityData.gidilebilecek_iller_yakın,
        ...cityData.gidilebilecek_iller_uzak,
      ];
    }

    const climateFilteredCities = dataToShow.filter((cityName) => {
      const city = getCityData(cityName);
      return city && city.mevsim.toLowerCase() === selectedClimate.toLowerCase();
    });

    setReachableCities(climateFilteredCities);
    setFilteredCities(climateFilteredCities);
    setDialogOpen(true);
  };

  return (
    <div>
      <Header />
      {warningMessage && (
        <div className="warning-box">
          {warningMessage}
        </div>
      )}

      <div className={styles.mainContainer}>

        <div className={styles.map}>
          <Map
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity} />
        </div>

        <div className={styles.filter}>
          <Filter
            selectedCity={selectedCity}
            selectedColony={selectedColony}
            setSelectedColony={setSelectedColony}
            selectedClimate={selectedClimate}
            setSelectedClimate={setSelectedClimate}
            handleColonySelection={handleColonySelection}
          />
        </div>

      </div>

      <div className={styles.ai}>
        <AI />
      </div>

      <div className={styles['info-section']}>
        <div className={styles['info-section__wrapper']}>
          <Extrainfo />
        </div>
      </div>

      <Response
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        filteredCities={filteredCities}
        getCityData={getCityData}
      />

      <Footer />
    </div >
  );
};
export default Page;