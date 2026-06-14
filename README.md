Koloni & Kovan Taşıma Rehberi
Arıcılar için yapay zeka destekli kovan taşıma, nektar takibi ve göç rotası planlama asistanı.
Bu proje, özellikle yeni başlayan ve deneyimsiz arı yetiştiricilerinin doğru bakım tekniklerini öğrenmesi,
mevsimsel göç rotalarını belirlemesi ve arı sağlığını koruyacak veriye dayalı kararlar alabilmesi için geliştirilmiştir.

Türkiye'deki illerin arıcılık verilerine dair hazır bir API bulunmadığı için, Tarım ve Orman Bakanlığı verileri referans alınarak özel bir JSON veri seti oluşturulmuştur.
İller arası göç rotaları hesaplanırken, sadece kuş uçuşu mesafe değil; sınır komşuları ve iklimsel geçişleri baz alan özel bir ağ analiz filtresi geliştirilmiştir.

Projenin ilk aşamalarında Hugging Face üzerinden Falcon-7B modeli denenmiş,
ancak Türkçe dil desteğinin yetersizliği ve API gecikmeleri nedeniyle mimari değiştirilmiştir.
Mevcut sistemde çok daha hızlı ve akıl yürütme becerisi yüksek olan Groq Llama-3.3-70b-versatile modeli kullanılmaktadır.

Framework: Next.js & React
Yapay Zeka: Groq API (Llama-3.3-70b-versatile)
Veri Seti: Tarım ve Orman Bakanlığı referanslı özel JSON veri tabanı

Bu projede kullanılan interaktif Türkiye haritası için GitHub üzerindeki açık kaynaklı SVG haritası projelerinden yararlanılmıştır.
Emeği geçen tüm açık kaynak geliştiricilerine teşekkür ederiz.

git clone https://github.com/erayokuklu/KoloniRehber.git
cd KoloniRehber
