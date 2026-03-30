&apos;use client&apos;

import { useState, useRef, useEffect } from &apos;react&apos;
import { MessageCircle, X, Send, Bot, User, Loader2 } from &apos;lucide-react&apos;
import { SISTEM_PROMPT } from &apos;@/lib/constants&apos;

interface Mesaj { rol: &apos;user&apos; | &apos;assistant&apos;; icerik: string }

const HIZLI_YANITLAR = [
  &apos;Hangi hizmetleri sunuyorsunuz?&apos;,
  &apos;Randevu nasıl alırım?&apos;,
  &apos;Çalışma saatleriniz nedir?&apos;,
  &apos;Bel ağrısı için ne yapabilirsiniz?&apos;,
]

export default function Chatbot() {
  const [acik, setAcik] = useState(false)
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([
    { rol: &apos;assistant&apos;, icerik: &apos;Merhaba! 👋 FizyoKlinik\&apos;e hoş geldiniz. Hizmetlerimiz, randevu veya kliniğimiz hakkında sorularınızı yanıtlayabilirim.&apos; }
  ])
  const [input, setInput] = useState(&apos;&apos;)
  const [yukleniyor, setYukleniyor] = useState(false)
  const altRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    altRef.current?.scrollIntoView({ behavior: &apos;smooth&apos; })
  }, [mesajlar])

  const gonder = async (metin?: string) => {
    const soru = metin || input.trim()
    if (!soru || yukleniyor) return
    setInput(&apos;&apos;)
    const yeniMesajlar: Mesaj[] = [...mesajlar, { rol: &apos;user&apos;, icerik: soru }]
    setMesajlar(yeniMesajlar)
    setYukleniyor(true)

    try {
      const res = await fetch(&apos;/api/chat&apos;, {
        method: &apos;POST&apos;,
        headers: { &apos;Content-Type&apos;: &apos;application/json&apos; },
        body: JSON.stringify({
          system: SISTEM_PROMPT,
          messages: yeniMesajlar.map(m => ({ role: m.rol, content: m.icerik })),
        }),
      })
      const data = await res.json()
      const cevap = data?.content?.[0]?.text || &apos;Üzgünüm, şu an yanıt veremiyorum. Lütfen bizi arayın: +90 500 123 45 67&apos;
      setMesajlar(prev => [...prev, { rol: &apos;assistant&apos;, icerik: cevap }])
    } catch {
      setMesajlar(prev => [...prev, { rol: &apos;assistant&apos;, icerik: &apos;Bağlantı hatası. Lütfen +90 500 123 45 67 numarayı arayın.&apos; }])
    } finally {
      setYukleniyor(false)
    }
  }

  return (
    <>
      {/* Butonu */}
      <button onClick={() => setAcik(!acik)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          acik ? &apos;bg-gray-600 rotate-90&apos; : &apos;bg-primary-600 hover:bg-primary-700 hover:scale-110&apos;
        }`}>
        {acik ? <X size={22} className=&quot;text-white&quot;/> : <MessageCircle size={22} className=&quot;text-white&quot;/>}
      </button>

      {/* Pencere */}
      {acik && (
        <div className=&quot;fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-sm shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-up&quot;>
          {/* Başlık */}
          <div className=&quot;bg-primary-700 px-4 py-3 flex items-center gap-3&quot;>
            <div className=&quot;w-9 h-9 rounded-full bg-white/20 flex items-center justify-center&quot;>
              <Bot size={17} className=&quot;text-white&quot;/>
            </div>
            <div>
              <div className=&quot;text-white font-medium text-sm&quot;>FizyoKlinik Asistan</div>
              <div className=&quot;flex items-center gap-1.5&quot;>
                <span className=&quot;w-1.5 h-1.5 rounded-full bg-green-400&quot;/>
                <span className=&quot;text-primary-200 text-xs&quot;>Çevrimiçi</span>
              </div>
            </div>
          </div>

          {/* Mesajlar */}
          <div className=&quot;flex-1 overflow-y-auto p-4 flex flex-col gap-3&quot;>
            {mesajlar.map((m, i) => (
              <div key={i} className={`flex items-start gap-2 ${m.rol === &apos;user&apos; ? &apos;flex-row-reverse&apos; : &apos;&apos;}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  m.rol === &apos;user&apos; ? &apos;bg-primary-100&apos; : &apos;bg-primary-700&apos;
                }`}>
                  {m.rol === &apos;user&apos;
                    ? <User size={13} className=&quot;text-primary-700&quot;/>
                    : <Bot size={13} className=&quot;text-white&quot;/>
                  }
                </div>
                <div className={`max-w-[78%] px-3 py-2.5 rounded-sm text-sm leading-relaxed ${
                  m.rol === &apos;user&apos; ? &apos;bg-primary-600 text-white&apos; : &apos;bg-gray-100 text-charcoal&apos;
                }`}>
                  {m.icerik}
                </div>
              </div>
            ))}

            {yukleniyor && (
              <div className=&quot;flex items-center gap-2&quot;>
                <div className=&quot;w-7 h-7 rounded-full bg-primary-700 flex items-center justify-center&quot;>
                  <Bot size={13} className=&quot;text-white&quot;/>
                </div>
                <div className=&quot;bg-gray-100 px-3 py-2.5 rounded-sm&quot;>
                  <Loader2 size={15} className=&quot;text-primary-600 animate-spin&quot;/>
                </div>
              </div>
            )}

            {/* Hızlı yanıtlar (sadece başlangıçta) */}
            {mesajlar.length === 1 && (
              <div className=&quot;flex flex-col gap-2 mt-2&quot;>
                {HIZLI_YANITLAR.map(y => (
                  <button key={y} onClick={() => gonder(y)}
                    className=&quot;text-left text-xs border border-primary-200 text-primary-700 px-3 py-2 rounded-sm hover:bg-primary-50 transition-colors&quot;>
                    {y}
                  </button>
                ))}
              </div>
            )}

            <div ref={altRef}/>
          </div>

          {/* Input */}
          <div className=&quot;border-t border-gray-100 p-3 flex gap-2&quot;>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === &apos;Enter&apos; && !e.shiftKey) { e.preventDefault(); gonder() } }}
              placeholder=&quot;Mesajınızı yazın...&quot;
              disabled={yukleniyor}
              className=&quot;flex-1 text-sm border border-gray-200 rounded-sm px-3 py-2 outline-none focus:border-primary-400 transition-colors&quot;
            />
            <button onClick={() => gonder()}
              disabled={yukleniyor || !input.trim()}
              className=&quot;w-9 h-9 bg-primary-600 text-white rounded-sm flex items-center justify-center hover:bg-primary-700 disabled:opacity-40 transition-colors shrink-0&quot;>
              <Send size={14}/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}