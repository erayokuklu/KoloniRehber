import React from 'react';
import styles from '@/components/Response/Response.module.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Response = ({ dialogOpen, setDialogOpen, filteredCities, getCityData }) => {

  const closeDialog = () => {
    setDialogOpen(false);

    if (filteredCities.length === 0) {
      setTimeout(() => {
        const apisai = document.getElementById('apisai');
        if (apisai) {
          apisai.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => {
            apisai.focus();
          }, 400);
        }
      }, 300);
    }
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={closeDialog}
      fullWidth
      maxWidth="sm"
      classes={{ paper: styles.dialogPaper }}
    >
      <DialogTitle className={styles.dialogTitle}>
        🐝 Göç Etmeniz Tavsiye Edilen İller
      </DialogTitle>

      <DialogContent>
        {filteredCities.length > 0 ? (
          <div className={styles.cityList}>
            {filteredCities.map((cityName, index) => {
              const city = getCityData(cityName);
              return (
                <div key={index} className={styles.cityCard}>

                  <div className={styles.cityHeader}>
                    <LocationOnIcon className={styles.locationIcon} />
                    <h3>{city.city}</h3>
                  </div>

                  <div className={styles.cityDetails}>
                    <p>
                      <span className={styles.detailLabel}>Tavsiye Nedeni: </span>
                      {city.açıklama || "Bu bölge seçtiğiniz kriterler için uygundur."}
                    </p>
                    {city.nektar_durumu && (
                      <p>
                        <span className={styles.detailLabel}>Nektar Durumu: </span>
                        {city.nektar_durumu}
                      </p>
                    )}
                    {city.çiçeklenme_baslangic && (
                      <p>
                        <span className={styles.detailLabel}>Çiçeklenme Başlangıcı: </span>
                        {city.çiçeklenme_baslangic} Ayı
                      </p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>Seçilen kriterlere uygun bir il bulunamadı.</p>
            <span className={styles.emptySubtext}>Lütfen farklı bir mevsim veya koloni durumu seçmeyi deneyin ya da VızBız'a danışın.</span>
          </div>
        )}
      </DialogContent>

      <DialogActions className={styles.dialogActions}>
        <Button onClick={closeDialog} className='sec-button'>
          Kapat
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default Response;