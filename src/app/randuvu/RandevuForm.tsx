&apos;use client&apos;

import { useState } from &apos;react&apos;
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from &apos;lucide-react&apos;
import { HIZMETLER } from &apos;@/lib/constants&apos;

const SAATLER = [&apos;09:00&apos;,&apos;09:30&apos;,&apos;10:00&apos;,&apos;10:30&apos;,&apos;11:00&apos;,&apos;11:30&apos;,&apos;13:00&apos;,&apos;13:30&apos;,&apos;14:00&apos;,&apos;14:30&apos;,&apos;15:00&apos;,&apos;15:30&apos;,&apos;16:00&apos;,&apos;16:30&apos;,&apos;17:00&apos;,&apos;17:30&apos;,&apos;18:00&apos;,&apos;18:30&apos;]

export default function RandevuForm() {
  const [gonderildi, setGonderildi] = useState(false)
  const [yukleniyor, setYukleniyor] = useState(false)
  const [form, setForm] = useState({ isim: &apos;&apos;, telefon: &apos;&apos;, email: &apos;&apos;, hizmet: &apos;&apos;, tarih: &apos;&apos;, saat: &apos;&apos;, not: &apos;&apos; })

  const degistir = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const gonder = async (e: React.FormEvent) => {
    e.preventDefault()
    setYukleniyor(true)
    // Backend API bağlantısı buraya gelecek:
    // await fetch(&apos;/api/randevu&apos;, { method: &apos;POST&apos;, body: JSON.stringify(form) })
    await new Promise(r => setTimeout(r, 1200))
    setYukleniyor(false)
    setGonderildi(true)
  }

  if (gonderildi) return (
    <div className=&quot;bg-white border border-gray-100 rounded-sm p-12 text-center&quot;>
      <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5&quot;>
        <CheckCircle2 size={32} className=&quot;text-green-600&quot;/>
      </div>
      <h2 className=&quot;font-display text-3xl font-semibold text-charcoal mb-3&quot;>Talebiniz Alındı!</h2>
      <p className=&quot;text-gray-500 mb-6&quot;>
        En kısa sürede <strong>{form.telefon}</strong> numaranızdan sizi arayacağız.
      </p>
      <button onClick={() => { setGonderildi(false); setForm({ isim:&apos;&apos;,telefon:&apos;&apos;,email:&apos;&apos;,hizmet:&apos;&apos;,tarih:&apos;&apos;,saat:&apos;&apos;,not:&apos;&apos; }) }}
        className=&quot;text-sm text-primary-600 hover:underline&quot;>
        Yeni randevu talebi oluştur
      </button>
    </div>
  )

  return (
    <form onSubmit={gonder} className=&quot;bg-white border border-gray-100 rounded-sm p-8 space-y-5&quot;>
      <div className=&quot;border-b border-gray-100 pb-5&quot;>
        <h2 className=&quot;font-display text-2xl font-semibold text-charcoal&quot;>Randevu Talebi</h2>
        <p className=&quot;text-sm text-gray-400 mt-1&quot;>* zorunlu alanlar</p>
      </div>

      <div className=&quot;grid sm:grid-cols-2 gap-5&quot;>
        <div>
          <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Ad Soyad <span className=&quot;text-red-400&quot;>*</span></label>
          <div className=&quot;relative&quot;>
            <User size={15} className=&quot;absolute left-3 top-1/2 -translate-y-1/2 text-gray-400&quot;/>
            <input name=&quot;isim&quot; value={form.isim} onChange={degistir} required placeholder=&quot;Adınız Soyadınız&quot;
              className=&quot;w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors&quot;/>
          </div>
        </div>
        <div>
          <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Telefon <span className=&quot;text-red-400&quot;>*</span></label>
          <div className=&quot;relative&quot;>
            <Phone size={15} className=&quot;absolute left-3 top-1/2 -translate-y-1/2 text-gray-400&quot;/>
            <input name=&quot;telefon&quot; value={form.telefon} onChange={degistir} required placeholder=&quot;05XX XXX XX XX&quot; type=&quot;tel&quot;
              className=&quot;w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors&quot;/>
          </div>
        </div>
      </div>

      <div>
        <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>E-posta</label>
        <div className=&quot;relative&quot;>
          <Mail size={15} className=&quot;absolute left-3 top-1/2 -translate-y-1/2 text-gray-400&quot;/>
          <input name=&quot;email&quot; value={form.email} onChange={degistir} placeholder=&quot;email@ornek.com&quot; type=&quot;email&quot;
            className=&quot;w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors&quot;/>
        </div>
      </div>

      <div>
        <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Hizmet <span className=&quot;text-red-400&quot;>*</span></label>
        <select name=&quot;hizmet&quot; value={form.hizmet} onChange={degistir} required
          className=&quot;w-full px-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors bg-white&quot;>
          <option value=&quot;&quot;>Hizmet seçin...</option>
          {HIZMETLER.map(h => <option key={h.id} value={h.baslik}>{h.baslik}</option>)}
        </select>
      </div>

      <div className=&quot;grid sm:grid-cols-2 gap-5&quot;>
        <div>
          <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Tarih <span className=&quot;text-red-400&quot;>*</span></label>
          <div className=&quot;relative&quot;>
            <Calendar size={15} className=&quot;absolute left-3 top-1/2 -translate-y-1/2 text-gray-400&quot;/>
            <input name=&quot;tarih&quot; value={form.tarih} onChange={degistir} required type=&quot;date&quot;
              min={new Date().toISOString().split(&apos;T&apos;)[0]}
              className=&quot;w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors&quot;/>
          </div>
        </div>
        <div>
          <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Saat <span className=&quot;text-red-400&quot;>*</span></label>
          <div className=&quot;relative&quot;>
            <Clock size={15} className=&quot;absolute left-3 top-1/2 -translate-y-1/2 text-gray-400&quot;/>
            <select name=&quot;saat&quot; value={form.saat} onChange={degistir} required
              className=&quot;w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors bg-white&quot;>
              <option value=&quot;&quot;>Saat seçin...</option>
              {SAATLER.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className=&quot;block text-sm font-medium text-charcoal mb-1.5&quot;>Notunuz (isteğe bağlı)</label>
        <textarea name=&quot;not&quot; value={form.not} onChange={degistir} rows={3}
          placeholder=&quot;Şikayetiniz veya sormak istedikleriniz...&quot;
          className=&quot;w-full px-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors resize-none&quot;/>
      </div>

      <button type=&quot;submit&quot; disabled={yukleniyor}
        className=&quot;w-full bg-primary-600 text-white py-4 rounded-sm font-medium hover:bg-primary-700 transition-all hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2&quot;>
        {yukleniyor ? (
          <><div className=&quot;w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin&quot;/> Gönderiliyor...</>
        ) : &apos;Randevu Talebi Gönder&apos;}
      </button>
    </form>
  )
}