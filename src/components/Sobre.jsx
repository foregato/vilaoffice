import QRCode from 'react-qr-code'
import { config } from '../data/config.js'

function buildWifiString({ ssid, senha, tipoSeguranca, oculta }) {
  const escape = (v) => String(v).replace(/([\\;,:"])/g, '\\$1')
  const t = tipoSeguranca === 'nopass' ? 'nopass' : tipoSeguranca
  const p = tipoSeguranca === 'nopass' ? '' : `P:${escape(senha)};`
  return `WIFI:T:${t};S:${escape(ssid)};${p}H:${oculta ? 'true' : 'false'};;`
}

export default function Sobre() {
  const wifiString = buildWifiString(config.wifi)

  return (
    <section id="sobre" className="py-24 md:py-32 bg-navy-900 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-gold text-xs tracking-widest2 uppercase">Sobre</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">O Vila Office</h2>
          <div className="gold-rule w-16 mx-auto mt-6" />
          <p className="text-offwhite/70 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            O Vila Office reúne 10 salas comerciais pensadas para profissionais liberais
            e pequenas empresas que buscam um espaço próprio para atender, com estrutura
            simples, ambiente elegante e um endereço fácil de chegar. Contamos com
            recepção com banheiro para clientes e internet Wi-Fi disponível
            gratuitamente durante o atendimento.
          </p>
        </div>

        {config.wifi?.ssid && (
          <div className="reveal mt-16 max-w-md mx-auto">
            <div className="border border-gold/20 bg-navy-800/60 rounded-lg px-8 py-10 text-center">
              <span className="text-gold text-xs tracking-widest2 uppercase">
                Wi-Fi para clientes
              </span>
              <p className="text-offwhite/60 text-sm font-light mt-2">
                Aponte a câmera do celular para conectar automaticamente
              </p>

              <div className="bg-offwhite p-4 rounded-md inline-block mt-6">
                <QRCode
                  value={wifiString}
                  size={168}
                  bgColor="#F5F1E8"
                  fgColor="#0B1B33"
                  level="M"
                />
              </div>

              <div className="mt-6 text-sm font-light text-offwhite/70 space-y-1">
                <p>
                  Rede: <span className="text-offwhite">{config.wifi.ssid}</span>
                </p>
                {config.wifi.senha && (
                  <p>
                    Senha: <span className="text-offwhite">{config.wifi.senha}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}