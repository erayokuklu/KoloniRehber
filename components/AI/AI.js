import { useState } from 'react';
import axios from 'axios';
import styles from '@/components/AI/AI.module.css';

const AI = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const handleSubmit = async () => {

    setErrorMessage('');
    setResponseText('');
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: inputText
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      );

      const answer = res.data.choices?.[0]?.message?.content;

      if (answer) {
        setResponseText(answer);
      } else {
        setErrorMessage('Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {

      if (error.response) {
      setErrorMessage('Bir hata oluştu: ' + error.response);
      } 
      else 
      {
        setErrorMessage('Sunucuya ulaşılamadı. Bağlantı hatası.');
      }
    } finally {
      setIsLoading(false);
    }
    setInputText('');
  };
  
  return (
    <div className={styles['bee-container']}>
      <div className={styles['bee-card']}>
        <h1 className={styles['bee-title']}>VızBız 🐝</h1>
        <input
          id="apisai"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles['bee-input']}
          placeholder="Ben VızBız! Size nasıl yardımcı olabilirim?"
        />
        <button onClick={handleSubmit} className="main-button" disabled={isLoading || !inputText.trim()}>
          {isLoading ? 'Cevap Alınıyor...' : 'Sorguyu Gönder'}
        </button>
        {responseText && <p className={styles['bee-response']}> {responseText}</p>}
        {errorMessage && <p className={styles['bee-error']}>Hata: {errorMessage}</p>}
      </div>
    </div>
  );
};
export default AI;

