'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { HIZMETLER } from '@/lib/constants'

const SAATLER = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']

export default function RandevuForm() {
  const [gonderildi, setGonderildi] = useState(false)
  const [yukleniyor, setYukleniyor] = useState(false)
  const [form, setForm] = useState({ isim: '', telefon: '', email: '', hizmet: '', tarih: '', saat: '', not: '' })

  const degistir = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const gonder = async (e: React.FormEvent) => {
    e.preventDefault()
    setYukleniyor(true)
    // Backend API bağlantısı buraya gelecek:
    // await fetch('/api/randevu', { method: 'POST', body: JSON.stringify(form) })
    await new Promise(r => setTimeout(r, 1200))
    setYukleniyor(false)
    setGonderildi(true)
  }

  if (gonderildi) return (
    <div className="bg-white border border-gray-100 rounded-sm p-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 size={32} className="text-green-600"/>
      </div>
      <h2 className="font-display text-3xl font-semibold text-charcoal mb-3">Talebiniz Alındı!</h2>
      <p className="text-gray-500 mb-6">
        En kısa sürede <strong>{form.telefon}</strong> numaranızdan sizi arayacağız.
      </p>
      <button onClick={() => { setGonderildi(false); setForm({ isim:'',telefon:'',email:'',hizmet:'',tarih:'',saat:'',not:'' }) }}
        className="text-sm text-primary-600 hover:underline">
        Yeni randevu talebi oluştur
      </button>
    </div>
  )

  return (
    <form onSubmit={gonder} className="bg-white border border-gray-100 rounded-sm p-8 space-y-5">
      <div className="border-b border-gray-100 pb-5">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Randevu Talebi</h2>
        <p className="text-sm text-gray-400 mt-1">* zorunlu alanlar</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Ad Soyad <span className="text-red-400">*</span></label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input name="isim" value={form.isim} onChange={degistir} required placeholder="Adınız Soyadınız"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Telefon <span className="text-red-400">*</span></label>
          <div className="relative">
            <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input name="telefon" value={form.telefon} onChange={degistir} required placeholder="05XX XXX XX XX" type="tel"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors"/>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">E-posta</label>
        <div className="relative">
          <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input name="email" value={form.email} onChange={degistir} placeholder="email@ornek.com" type="email"
            className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors"/>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">Hizmet <span className="text-red-400">*</span></label>
        <select name="hizmet" value={form.hizmet} onChange={degistir} required
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors bg-white">
          <option value="">Hizmet seçin...</option>
          {HIZMETLER.map(h => <option key={h.id} value={h.baslik}>{h.baslik}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Tarih <span className="text-red-400">*</span></label>
          <div className="relative">
            <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input name="tarih" value={form.tarih} onChange={degistir} required type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Saat <span className="text-red-400">*</span></label>
          <div className="relative">
            <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <select name="saat" value={form.saat} onChange={degistir} required
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors bg-white">
              <option value="">Saat seçin...</option>
              {SAATLER.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">Notunuz (isteğe bağlı)</label>
        <textarea name="not" value={form.not} onChange={degistir} rows={3}
          placeholder="Şikayetiniz veya sormak istedikleriniz..."
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary-400 transition-colors resize-none"/>
      </div>

      <button type="submit" disabled={yukleniyor}
        className="w-full bg-primary-600 text-white py-4 rounded-sm font-medium hover:bg-primary-700 transition-all hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2">
        {yukleniyor ? (
          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Gönderiliyor...</>
        ) : 'Randevu Talebi Gönder'}
      </button>
    </form>
  )
}