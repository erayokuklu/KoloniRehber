import React from 'react';
import { Carousel } from 'antd';
import styles from '@/components/Info/Extrainfo.module.css';

const INFO_DATA = [
  {
    title: "Göçebe arıcılığın amacı nedir?",
    items: [
      { id: 1, subtitle: "Mevsimlere Göre Göç", text: "Arılar, farklı mevsimlerde farklı bitki örtüsünün olduğu bölgelere göç ederler. Bu, arıların sürekli bir gıda kaynağına erişimini sağlar." },
      { id: 2, subtitle: "Bal Hasadı ve Polen Toplama", text: "Göçebe arıcılıkla, farklı bitki türlerinden faydalanarak farklı türlerde bal ve polen üretebilirsiniz." },
      { id: 3, subtitle: "Kovan Taşıma", text: "Arı kolonilerini taşımak için uygun araçlar ve ekipmanlar kullanılır. Kovanların taşınması sırasında arıların stres yaşamamasına özen gösterilir." },
      { id: 4, subtitle: "Meyve Bahçeleri ve Tarım Alanları", text: "Göçebe arıcılık sırasında arılar, meyve bahçeleri ve tarım alanlarına konularak bitki tozlaşmasını sağlarlar. Bu, çiftçiler için önemlidir çünkü ürün verimini artırır." }
    ]
  },
  {
    title: "Göçebe arıcılığın zorlukları nelerdir?",
    items: [
      { id: 5, subtitle: "Araç ve Ekipman", text: "Kovanları taşımak için özel araçlara ve kaldırma ekipmanlarına ihtiyaç vardır." },
      { id: 6, subtitle: "Arı Stresi", text: "Kovan taşıma işlemi, arıların stres yaşamasına neden olabilir ve kolonilerin zayıflamasına yol açabilir." },
      { id: 7, subtitle: "İklim Değişiklikleri", text: "Hava koşulları, göçebe arıcılığın planlarını etkileyebilir. Özellikle soğuk hava, arıların göç etmesini zorlaştırabilir." },
      { id: 8, subtitle: "Ülke ve Bölge Kuralları", text: "Her bölgenin ve ülkenin arıcılıkla ilgili kuralları ve düzenlemeleri olabilir. Bu kurallara uygun hareket etmek önemlidir." }
    ]
  },
  {
    title: "Yer seçimi için önemli faktörler:",
    items: [
      { id: 9, subtitle: "Yoğun Arı Varlığından Uzak Durulmalı", text: "Teorik olarak 3 km. yarıçaplı bir alanda 100-150 kovandan fazla kovan bulunmaması tercih edilmelidir." },
      { id: 10, subtitle: "Baştan Doğru Seçim", text: "Çünkü arıcılık faaliyeti başladıktan sonra yer değiştirilmesi oldukça zahmetli olacaktır." },
      { id: 11, subtitle: "Temiz Su Kaynağı", text: "Arıların su ihtiyaçlarını karşılamaları için arılığın yakınında temiz su kaynağı olmasına özen gösteriniz." },
      { id: 12, subtitle: "Polen Kaynağı", text: "Kovandaki yavruların beslenmesi için arılığın yakınında polen kaynağı mutlaka olmalıdır." },
      { id: 13, subtitle: "Sanayi Atıklarından Uzaklık", text: "Arılık yeri seçilirken imalat atıkları zehirli olan fabrika ve işletmelerden uzak yerler seçilmelidir." }
    ],
    highlight: "Arıcılıkta temel kural; 50 tane kuvvetli koloni, 100 tane zayıf koloniden daha iyidir."
  },
  {
    title: "Arı sağlığı ve korunma:",
    items: [
      { id: 14, subtitle: "Antibiyotik Kullanımı", text: "Sağlıklı kovanlara koruyucu amaçlı antibiyotik verilmesi bağışıklık sistemini zayıflatır. Kesinlikle antibiyotik vermeyiniz." },
      { id: 15, subtitle: "Bilinmeyen Ballarla Besleme", text: "Kaynağı belli olmayan ballarla besleme yapmak kovanlarınızda hastalık riskini arttıracaktır." },
      { id: 16, subtitle: "Kovanların Yerden Yükseltilmesi", text: "Kovanları sehpa üzerine alarak nemden korumak, kireç hastalığı riskini en aza indirecektir." },
      { id: 17, subtitle: "Alet ve Ekipman Temizliği", text: "Arılıkta kullanılan aletlerin sık sık dezenfekte edilmesi kovanlara hastalık bulaşma riskini en aza indirir." }
    ],
    highlight: "Hastalıklı kovanların kontrolünde kullanılan aletlerin tamamen dezenfekte edilmeden sağlıklı kovanlarda kullanılması hastalığın yayılmasına neden olacaktır."
  },
  {
    title: "Kovan Taşıma (Nakliye) Kuralları:",
    items: [
      { id: 18, subtitle: "Gece Taşıması", text: "Kovanların taşınma işlemi mutlaka gece veya sabahın çok erken, serin saatlerinde yapılmalıdır. Sıcakta taşıma arı ölümlerine yol açar." },
      { id: 19, subtitle: "Havalandırma (Telis Bezi)", text: "Taşıma sırasında kovan kapakları yerine hava alan telis bezleri veya özel havalandırmalı taşıma kapakları kullanılmalıdır." },
      { id: 20, subtitle: "Çerçevelerin Sabitlenmesi", text: "Kovan içindeki çerçevelerin sarsıntıda birbirine çarpıp arıları ezmemesi için taşıma öncesi mutlaka sabitlenmesi gerekir." },
      { id: 21, subtitle: "Uçuş Deliği Güvenliği", text: "Yola çıkmadan önce uçuş delikleri taşıma ızgaralarıyla kapatılmalı, arıların araç içine çıkışı kesinlikle engellenmelidir." }
    ],
    highlight: "Taşıma bittikten sonra kovanlar yeni yerlerine indirildiğinde, arıların sakinleşmesi için uçuş delikleri hemen açılmamalı, 15-20 dakika beklenmelidir."
  },
  {
    title: "Mevsimsel Bakım ve Göç Stratejileri:",
    items: [
      { id: 22, subtitle: "İlkbahar (Gelişim Dönemi)", text: "Kolonilerin hızla büyüdüğü dönemdir. Arılar, nektar ve polenin bol olduğu meyve bahçelerine ve erken açan çiçek meralarına taşınmalıdır." },
      { id: 23, subtitle: "Yaz (Ana Bal Akımı)", text: "Bal hasadının yapıldığı ana dönemdir. Yüksek rakımlı yaylalara veya ayçiçeği, pamuk gibi geniş tarım arazilerine göç edilir." },
      { id: 24, subtitle: "Sonbahar (Kışa Hazırlık)", text: "Çam balı üretimi için Ege ve Akdeniz sahillerine inilebilir. Aynı zamanda koloninin kışlık yiyecek stokunu tamamlaması sağlanır." },
      { id: 25, subtitle: "Kış (Salkım Dönemi)", text: "Arılar kış salkımına girer. Bu mevsimde kovanlar rüzgar almayan, güneş gören, sıcak ve korunaklı bölgelerde sabit tutulmalı, taşıma yapılmamalıdır." }
    ]
  },
  {
    title: "Güçlü ve Zayıf Koloni Yönetimi:",
    items: [
      { id: 26, subtitle: "Güçlü Kolonilerin Avantajı", text: "Tarlacı arı sayısı fazla olduğu için bal verimi çok yüksektir. Hastalıklara ve kış şartlarına karşı maksimum direnç gösterirler." },
      { id: 27, subtitle: "Oğul Verme Riski", text: "Güçlü kolonilerde alan darlığı yaşanırsa arılar oğul vermeye (bölünmeye) eğilim gösterir. Kovan hacmi zamanında genişletilmelidir." },
      { id: 28, subtitle: "Zayıf Kolonilerin Sorunları", text: "Kendi ısılarını korumakta zorlanırlar. Bal verimleri düşüktür ve yağmacı arıların veya hastalıkların ilk hedefi olurlar." },
      { id: 29, subtitle: "Birleştirme (Ruvaşet)", text: "Bal akım dönemine girilirken iki zayıf koloni yan yana getirilip birleştirilerek tek bir güçlü koloni elde edilmesi en verimli yöntemdir." }
    ],
    highlight: "Unutmayın: Zayıf kolonilerle bal üretimi yapılmaz. Zayıf koloniler sadece desteklenerek güçlendirilmek için elde tutulur."
  }
];

const Extrainfo = () => {
  return (
    <Carousel className={styles.customCarousel} autoplay autoplaySpeed={5000} effect="fade">
      {INFO_DATA.map((slide, slideIndex) => (
        <div key={slideIndex} className={styles.slideCard}>
          <h3 className={styles.slideTitle}>{slide.title}</h3>
          
          <div className={styles.gridContainer}>
            {slide.items.map((item) => (
              <div key={item.id} className={styles.subheading}>
                <h4>{item.subtitle}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {slide.highlight && (
            <div className={styles.warningHighlight}>
              {slide.highlight}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default Extrainfo;