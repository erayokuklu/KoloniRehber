import React, { useState } from "react";
import styles from '@/components/Header/Header.module.css';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Header = () => {

  const [apiDetay, setapiDetay] = useState(false);

  return (
    <>
      <header className={styles.header}>
        KOVAN TAŞIMA REHBERİ
        <button
          onClick={() => setapiDetay(true)}
          className={styles.apiButton}
        >
          API Entegrasyonu
        </button>
      </header>
      <Dialog
        open={apiDetay}
        onClose={() => setapiDetay(false)}
        fullWidth
        maxWidth="md"
        disableScrollLock={true}
        classes={{ paper: styles.apiDialogPaper }}
      >
        <DialogTitle className={styles.apiDialogTitle}>
          API Entegrasyonu
        </DialogTitle>

        <DialogContent className={styles.apiContent}>
          <div className={styles.apiSubTittle}>
            <h3>Kurulum</h3>
            <p>
              Bu uygulamanın yapay zeka asistanını kendi yerel ortamınızda
              çalıştırabilmek için bir <strong>API KEY</strong> ihtiyacınız vardır.
            </p>
          </div>

          <div className={styles.apiSubTittle}>
            <h3>API key</h3>
            <ol>
              <li>
                Ücretli veya ücretsiz bir api key bulabilirsiniz. Bu projede groq api llama-3.3-70b-versatile modeli kullanılmıştır. Bu API'den faydalanmak için <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'blue' }}>Groq Cloud</a> adresine gidin, ücretsiz bir hesap oluşturun ve "API KEYS"
                sekmesinden bir anahtar üretin.
              </li>
              <li>
                Projenin ana dizininde <code>.env.local</code> adında yeni bir dosya oluşturun.
              </li>
              <li>
                Oluşturduğunuz dosyanın içine aşağıdaki satırı kopyalayın ve kendi anahtarınızı yapıştırın:
                <br />
                <code style={{WebkitUserSelect:'text', userSelect: 'text'}}>
                 NEXT_PUBLIC_API_KEY=sizin_anahtariniz_buraya
                </code>
              </li>
            </ol>
            <p className={styles.apiWarningHighlight}><strong>Güvenlik Uyarısı:</strong> <code>NEXT_PUBLIC_</code> ön eki, API anahtarını tarayıcıda görünür kılar. Bu yapı yerel ortam için sorun olmasa da, projeyi canlıya alırken güvenlik riskleri oluşturabilir. Bu nedenle, hassas bilgilerin korunması amacıyla API çağrılarının Next.js Route Handlers veya sunucu tarafı API katmanı üzerinden gerçekleştirilmesi önerilmektedir.</p>
            <ul>
              <li style={{marginTop:'20px'}}>
                <strong>Farklı Yapay Zeka Sağlayıcıları: </strong>Proje varsayılan olarak Groq API'sini kullanacak şekilde yapılandırılmıştır. Gemini, OpenAI veya diğer OpenAI uyumlu sağlayıcıları kullanmak için AI.js dosyasında yer alan API endpoint adresi, model adı ve gerekli yapılandırma parametrelerinin ilgili sağlayıcının dokümantasyonuna uygun şekilde güncellenmesi yeterlidir.
              </li>
            </ul>
          </div>
        </DialogContent>

        <DialogActions className={styles.apiActions}>
          <button onClick={() => setapiDetay(false)} className="sec-button">
            Anladım
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;