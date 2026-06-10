import React from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import styles from '@/components/Filter/Filter.module.css';


const Filter = ({
    selectedCity,
    selectedColony,
    setSelectedColony,
    selectedClimate,
    setSelectedClimate,
    handleColonySelection
}) => {
    return (
        <div className={styles.filterCard}>

            <h2 className={styles.title}>BULUNDUĞUNUZ ŞEHİR</h2>
            <p className={styles.cityText}>
                {selectedCity}
            </p>

            <label className={styles.label}>Koloni Durumu:</label>
            <Select MenuProps={{ disableScrollLock: true }}
                value={selectedColony}
                onChange={(event) => setSelectedColony(event.target.value)}
                displayEmpty
                className={styles.colony}
            >
                <MenuItem value="" disabled>Koloni Seçin</MenuItem>
                <MenuItem value="Gkoloni">Güçlü Koloni</MenuItem>
                <MenuItem value="Zkoloni">Zayıf Koloni</MenuItem>
            </Select>

            <label className={styles.label}>Mevsim Seçiniz:</label>
            <Select MenuProps={{ disableScrollLock: true }}
                value={selectedClimate}
                onChange={(event) => setSelectedClimate(event.target.value)}
                displayEmpty
                className={styles.season}
            >
                <MenuItem value="" disabled>Mevsim Seçin</MenuItem>
                <MenuItem value="ilkbahar">İlkbahar</MenuItem>
                <MenuItem value="yaz">Yaz</MenuItem>
                <MenuItem value="sonbahar">Sonbahar</MenuItem>
                <MenuItem value="kış">Kış</MenuItem>
            </Select>

            <div className={styles.guide}>
                <h4>🐝 Nasıl Kullanılır?</h4>
                <ol>
                    <li><strong>haritadan</strong> bulunduğunuz ili seçin.</li>
                    <li>Mevcut <strong>koloni</strong> gücünüzü ve hedef <strong>mevsimi</strong> belirleyin.</li>
                    <li><strong>Sonuçları Göster</strong>'e tıklayarak en verimli göç rotanızı keşfedin!</li>
                </ol>
            </div>

            <Button
                className="sec-button"
                variant="contained"
                onClick={handleColonySelection}>
                Sonuçları Göster
            </Button>

        </div>
    );
};
export default Filter;