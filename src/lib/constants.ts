export const KLINIK = {
  isim: 'FizyoKlinik',
  telefon: '+90 500 123 45 67',
  email: 'info@fizyoklinik.com.tr',
  adres: 'Merkez Mahallesi, Cumhuriyet Cad. No:42, İskenderun / Hatay',
  sehir: 'İskenderun, Hatay',
  calisma_saatleri: {
    hafta_ici: 'Pzt – Cuma: 09:00 – 19:00',
    cumartesi: 'Cumartesi: 09:00 – 14:00',
    pazar: 'Pazar: Kapalı',
  },
  maps_url: 'https://maps.google.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
}

export const HIZMETLER = [
  {
    id: 'manuel-terapi',
    icon: '🤲',
    baslik: 'Manuel Terapi',
    kisa: 'Eklem mobilizasyonu ve yumuşak doku teknikleriyle ağrı azaltımı ve hareket açıklığı artışı.',
    uzun: 'Bel, boyun, omuz ve diz problemlerinde uzman eller ile uygulanan eklem mobilizasyonu, yumuşak doku ve kas-iskelet sistemi odaklı tekniklerle ağrı azaltılır, hareket açıklığı artırılır.',
    etiketler: ['Bel', 'Boyun', 'Omuz', 'Diz'],
  },
  {
    id: 'klinik-pilates',
    icon: '🧘',
    baslik: 'Klinik Pilates',
    kisa: 'Omurga stabilizasyonu ve core aktivasyonu temelli egzersiz sistemi.',
    uzun: 'Postür bozuklukları, bel-boyun ağrıları ve kas dengesizliklerinde güvenle uygulanan, omurga sağlığını merkeze alan terapötik egzersiz programı.',
    etiketler: ['Postür', 'Core', 'Denge', 'Omurga'],
  },
  {
    id: 'reformer',
    icon: '⚡',
    baslik: 'Reformer Egzersiz',
    kisa: 'Reformer cihazı ile kontrollü ve dirençli egzersiz programları.',
    uzun: 'Özel Reformer cihazı ile hazırlanan kontrollü, dirençli egzersiz programları ile kas kuvveti, esneklik ve denge gelişimi hedeflenir.',
    etiketler: ['Kuvvet', 'Esneklik', 'Denge'],
  },
  {
    id: 'ortopedik',
    icon: '🦴',
    baslik: 'Ortopedik Rehabilitasyon',
    kisa: 'Ameliyat sonrası ve kas-bağ-tendon yaralanmalarında fonksiyonel iyileşme.',
    uzun: 'Kas, bağ, tendon ve eklem problemlerine yönelik fonksiyonel iyileşme programları. Ameliyat sonrası rehabilitasyon süreci bireysel olarak planlanır.',
    etiketler: ['Post-op', 'Tendon', 'Eklem', 'Bağ'],
  },
  {
    id: 'spor',
    icon: '🏃',
    baslik: 'Spor Yaralanmaları',
    kisa: 'Sporcuya özel kas yırtığı, bağ yaralanması ve aşırı kullanım rehabilitasyonu.',
    uzun: 'Kas yırtıkları, bağ yaralanmaları ve aşırı kullanım sendromlarında sporcunun ihtiyacına özel, sahaya dönüşü hızlandıran rehabilitasyon programı.',
    etiketler: ['Sporcu', 'Kas Yırtığı', 'Bağ', 'Sahaya Dönüş'],
  },
  {
    id: 'omurga',
    icon: '🔱',
    baslik: 'Omurga & Skolyoz',
    kisa: 'Boyun düzleşmesi, bel fıtığı ve omurga eğriliklerinde kişiye özel egzersiz.',
    uzun: 'Skolyozda kas dengesi ve postüral kontrol desteklenir. Boyun düzleşmesi ve bel fıtığında kişiye özel egzersiz planı ile kalıcı iyileşme hedeflenir.',
    etiketler: ['Skolyoz', 'Fıtık', 'Boyun Düzleşmesi'],
  },
  {
    id: 'migren',
    icon: '💆',
    baslik: 'Migren & Baş Ağrısı',
    kisa: 'Servikal kökenli baş ağrılarında manuel terapi ve postüral düzenleme.',
    uzun: 'Servikal bölge kaynaklı baş ağrılarında manuel terapi ve kas gevşetme teknikleri uygulanır. Postüral düzenleme ile semptomlar kalıcı olarak azaltılır.',
    etiketler: ['Migren', 'Servikal', 'Postür'],
  },
  {
    id: 'tme',
    icon: '😮',
    baslik: 'Bruksizm & Çene (TME)',
    kisa: 'Diş sıkma ve çene ağrısında bütüncül manuel terapi yaklaşımı.',
    uzun: 'Çene-boyun bağlantısı bütüncül olarak değerlendirilerek TME disfonksiyonu, diş sıkma ve çene ağrısında manuel terapi ve kas dengeleme uygulanır.',
    etiketler: ['Bruksizm', 'TME', 'Çene', 'Boyun'],
  },
  {
    id: 'tinnitus',
    icon: '👂',
    baslik: 'Kulak Çınlaması (Tinnitus)',
    kisa: 'Servikal ve TME ilişkili tinnitus vakalarında fizyoterapi desteği.',
    uzun: 'Boyun kaslarının gevşetilmesi, postüral düzenleme ve manuel terapi teknikleri ile servikal kökenli tinnitus semptomlarının hafiflemesi hedeflenir.',
    etiketler: ['Tinnitus', 'Boyun', 'TME'],
  },
  {
    id: 'masaj',
    icon: '🌿',
    baslik: 'Recovery & Medikal Masaj',
    kisa: 'Kas gerginliği, spor sonrası toparlanma ve kronik ağrı için medikal masaj.',
    uzun: 'Dolaşımı artırarak iyileşme sürecini destekleyen medikal masaj; kas gerginliği, spor sonrası toparlanma ve kronik ağrı durumlarında uygulanır.',
    etiketler: ['Recovery', 'Kronik Ağrı', 'Toparlanma'],
  },
  {
    id: 'kadin-sagligi',
    icon: '💜',
    baslik: 'Kadın & Erkek Sağlığı',
    kisa: 'Pelvik taban farkındalığı ve kas-iskelet sistemi için bireysel programlar.',
    uzun: 'Pelvik taban farkındalığı, postüral denge ve kas-iskelet sistemi sağlığına yönelik bireysel programlar her bireyin ihtiyacına özel planlanır.',
    etiketler: ['Pelvik Taban', 'Postür', 'Bireysel'],
  },
]

export const UZMANLAR = [
  {
    id: 1,
    isim: 'Uzm. Fzt. Ayşe Demir',
    unvan: 'Fizyoterapi & Rehabilitasyon Uzmanı',
    uzmanlik: 'Manuel Terapi, Ortopedik Rehabilitasyon',
    deneyim: '9 yıl',
    avatar: 'AD',
    renk: 'bg-primary-600',
  },
  {
    id: 2,
    isim: 'Fzt. Murat Şahin',
    unvan: 'Klinik Pilates & Spor Rehabilitasyonu',
    uzmanlik: 'Klinik Pilates, Spor Yaralanmaları',
    deneyim: '6 yıl',
    avatar: 'MŞ',
    renk: 'bg-primary-700',
  },
  {
    id: 3,
    isim: 'Fzt. Selin Yıldız',
    unvan: 'Nörolojik Rehabilitasyon & Omurga Sağlığı',
    uzmanlik: 'Skolyoz, Nörolojik Rehab',
    deneyim: '5 yıl',
    avatar: 'SY',
    renk: 'bg-primary-800',
  },
]

export const SISTEM_PROMPT = `Sen FizyoKlinik'in yardımcı asistanısın. İskenderun, Hatay'da faaliyet gösteren uzman bir fizyoterapi kliniği.

Hizmetlerimiz: Manuel Terapi, Klinik Pilates, Reformer Egzersiz, Ortopedik Rehabilitasyon, Spor Yaralanmaları, Omurga & Skolyoz, Migren & Baş Ağrısı, Bruksizm & TME, Kulak Çınlaması, Recovery & Medikal Masaj, Kadın & Erkek Sağlığı.

Çalışma saatleri: Pazartesi–Cuma 09:00–19:00 | Cumartesi 09:00–14:00 | Pazar Kapalı
Telefon: +90 500 123 45 67
Adres: Merkez Mah. Cumhuriyet Cad. No:42, İskenderun / Hatay

Kurallar:
- Kısa, net, sıcak Türkçe yanıt ver
- Randevu için /randevu sayfasına yönlendir veya telefonu ver
- Teşhis koyma, bilgi ver
- Acil tıbbi durumlarda doktora yönlendir`