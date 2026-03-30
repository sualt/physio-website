'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { SISTEM_PROMPT } from '@/lib/constants'

interface Mesaj { rol: 'user' | 'assistant'; icerik: string }

const HIZLI_YANITLAR = [
  'Hangi hizmetleri sunuyorsunuz?',
  'Randevu nasıl alırım?',
  'Çalışma saatleriniz nedir?',
  'Bel ağrısı için ne yapabilirsiniz?',
]

export default function Chatbot() {
  const [acik, setAcik] = useState(false)
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([
    { rol: 'assistant', icerik: 'Merhaba! 👋 FizyoKlinik\'e hoş geldiniz. Hizmetlerimiz, randevu veya kliniğimiz hakkında sorularınızı yanıtlayabilirim.' }
  ])
  const [input, setInput] = useState('')
  const [yukleniyor, setYukleniyor] = useState(false)
  const altRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    altRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mesajlar])

  const gonder = async (metin?: string) => {
    const soru = metin || input.trim()
    if (!soru || yukleniyor) return
    setInput('')
    const yeniMesajlar: Mesaj[] = [...mesajlar, { rol: 'user', icerik: soru }]
    setMesajlar(yeniMesajlar)
    setYukleniyor(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SISTEM_PROMPT,
          messages: yeniMesajlar.map(m => ({ role: m.rol, content: m.icerik })),
        }),
      })
      const data = await res.json()
      const cevap = data?.content?.[0]?.text || 'Üzgünüm, şu an yanıt veremiyorum. Lütfen bizi arayın: +90 500 123 45 67'
      setMesajlar(prev => [...prev, { rol: 'assistant', icerik: cevap }])
    } catch {
      setMesajlar(prev => [...prev, { rol: 'assistant', icerik: 'Bağlantı hatası. Lütfen +90 500 123 45 67 numarayı arayın.' }])
    } finally {
      setYukleniyor(false)
    }
  }

  return (
    <>
      {/* Butonu */}
      <button onClick={() => setAcik(!acik)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          acik ? 'bg-gray-600 rotate-90' : 'bg-primary-600 hover:bg-primary-700 hover:scale-110'
        }`}>
        {acik ? <X size={22} className="text-white"/> : <MessageCircle size={22} className="text-white"/>}
      </button>

      {/* Pencere */}
      {acik && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-sm shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-up">
          {/* Başlık */}
          <div className="bg-primary-700 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={17} className="text-white"/>
            </div>
            <div>
              <div className="text-white font-medium text-sm">FizyoKlinik Asistan</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"/>
                <span className="text-primary-200 text-xs">Çevrimiçi</span>
              </div>
            </div>
          </div>

          {/* Mesajlar */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {mesajlar.map((m, i) => (
              <div key={i} className={`flex items-start gap-2 ${m.rol === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  m.rol === 'user' ? 'bg-primary-100' : 'bg-primary-700'
                }`}>
                  {m.rol === 'user'
                    ? <User size={13} className="text-primary-700"/>
                    : <Bot size={13} className="text-white"/>
                  }
                </div>
                <div className={`max-w-[78%] px-3 py-2.5 rounded-sm text-sm leading-relaxed ${
                  m.rol === 'user' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-charcoal'
                }`}>
                  {m.icerik}
                </div>
              </div>
            ))}

            {yukleniyor && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary-700 flex items-center justify-center">
                  <Bot size={13} className="text-white"/>
                </div>
                <div className="bg-gray-100 px-3 py-2.5 rounded-sm">
                  <Loader2 size={15} className="text-primary-600 animate-spin"/>
                </div>
              </div>
            )}

            {/* Hızlı yanıtlar (sadece başlangıçta) */}
            {mesajlar.length === 1 && (
              <div className="flex flex-col gap-2 mt-2">
                {HIZLI_YANITLAR.map(y => (
                  <button key={y} onClick={() => gonder(y)}
                    className="text-left text-xs border border-primary-200 text-primary-700 px-3 py-2 rounded-sm hover:bg-primary-50 transition-colors">
                    {y}
                  </button>
                ))}
              </div>
            )}

            <div ref={altRef}/>
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); gonder() } }}
              placeholder="Mesajınızı yazın..."
              disabled={yukleniyor}
              className="flex-1 text-sm border border-gray-200 rounded-sm px-3 py-2 outline-none focus:border-primary-400 transition-colors"
            />
            <button onClick={() => gonder()}
              disabled={yukleniyor || !input.trim()}
              className="w-9 h-9 bg-primary-600 text-white rounded-sm flex items-center justify-center hover:bg-primary-700 disabled:opacity-40 transition-colors shrink-0">
              <Send size={14}/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}