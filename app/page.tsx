import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Download, ShoppingBag, Leaf, ChevronRight, Smartphone, Train, Coins } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo/logo-civicoin.png" alt="CiviCoin Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-[#0E3E3E]">CiviCoin</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#que-es" className="text-sm font-medium hover:text-[#00D09E]">¿Qué es?</Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#00D09E]">Beneficios</Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-[#00D09E]">Cómo funciona</Link>
            <Link href="#proposito" className="text-sm font-medium hover:text-[#00D09E]">Propósito</Link>
          </nav>
          <Button className="bg-[#00D09E] hover:bg-[#00b88d] text-white">Descargar App</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E3E3E] to-[#0a2e2e] -z-10" />
          <div className="absolute inset-0 opacity-10 -z-10">
            <Image src="/pattern/header-bg-image.webp" alt="Metro Pattern" fill className="object-cover" />
          </div>
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Viajar con propósito, <br className="hidden sm:inline" />
              <span className="text-[#00D09E]">ganar por moverte</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
              Una nueva forma de pagar, ahorrar y cuidar Medellín con cada viaje en metro.
            </p>
            <Button className="bg-[#00D09E] hover:bg-[#00b88d] text-white text-lg px-8 py-6 rounded-full">
              Descubre cómo funciona
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* ¿Qué es CiviCoin? */}
        <section id="que-es" className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0E3E3E]">
              ¿Qué es <span className="text-[#00D09E]">CiviCoin</span>?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
              CiviCoin es una moneda digital ciudadana que recompensa tu movilidad sostenible. Cada vez que usas el
              transporte público en Medellín, ganas tokens que puedes canjear por descuentos y beneficios.
            </p>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image src="/coin-illustration.png" alt="CiviCoin Illustration" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0E3E3E]">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Coins className="h-12 w-12 text-[#00D09E]" />,
                  title: "Recompensas por viajes",
                  description: "Acumula monedas con cada viaje en el sistema de transporte público",
                },
                {
                  icon: <CreditCard className="h-12 w-12 text-[#00D09E]" />,
                  title: "Pagos sin contacto",
                  description: "Tecnología NFC para pagos rápidos y seguros en todo el sistema",
                },
                {
                  icon: <ShoppingBag className="h-12 w-12 text-[#00D09E]" />,
                  title: "Descuentos en comercios",
                  description: "Usa tus CiviCoins en establecimientos asociados de la ciudad",
                },
                {
                  icon: <Leaf className="h-12 w-12 text-[#00D09E]" />,
                  title: "Movilidad sostenible",
                  description: "Contribuye a reducir la huella de carbono de Medellín",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="rounded-full bg-[#e6f9f4] p-4 inline-flex mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0E3E3E]">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0E3E3E]">Cómo funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "01",
                  icon: <Download className="h-10 w-10 text-[#00D09E]" />,
                  title: "Descarga la app",
                  description: "Disponible para iOS y Android, fácil de configurar",
                },
                {
                  number: "02",
                  icon: <Train className="h-10 w-10 text-[#00D09E]" />,
                  title: "Viaja con tu tarjeta",
                  description: "Usa el transporte público y acumula puntos automáticamente",
                },
                {
                  number: "03",
                  icon: <Coins className="h-10 w-10 text-[#00D09E]" />,
                  title: "Acumula y canjea",
                  description: "Convierte tus viajes en beneficios reales para ti y la ciudad",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="absolute -top-8 text-6xl font-bold text-gray-100 z-0">{step.number}</div>
                  <div className="bg-white rounded-full p-4 shadow-md z-10 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0E3E3E] z-10">{step.title}</h3>
                  <p className="text-gray-600 text-center z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPÓSITO */}

        <section id="proposito" className="py-20 bg-[#0E3E3E] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestro Propósito</h2>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-12 max-w-3xl mx-auto">
              "Recompensar cada viaje que mejora la ciudad."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6 bg-[#164545] text-white rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#00D09E] mx-auto mb-4 overflow-hidden">
                  <Image src="/avatar-woman.svg" alt="Usuario 1" width={64} height={64} />
                </div>
                <p className="text-sm mb-4">"CiviCoin ha cambiado la forma en que apoyo a mi comunidad. Ahora puedo contribuir y recibir recompensas fácilmente. ¡Increíble!"</p>
                <p className="font-semibold text-[#00D09E]">María G.</p>
              </Card>

              <Card className="text-center p-6 bg-[#164545] text-white rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#00D09E] mx-auto mb-4 overflow-hidden">
                  <Image src="/avatar-man.svg" alt="Usuario 2" width={64} height={64} />
                </div>
                <p className="text-sm mb-4">"Nunca pensé que una criptomoneda pudiera tener tanto impacto social. Con CiviCoin, apoyar proyectos locales es sencillo y seguro."</p>
                <p className="font-semibold text-[#00D09E]">Juan P.</p>
              </Card>

              <Card className="text-center p-6 bg-[#164545] text-white rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#00D09E] mx-auto mb-4 overflow-hidden">
                  <Image src="/avatar-woman.svg" alt="Usuario 3" width={64} height={64} />
                </div>
                <p className="text-sm mb-4">"Gracias a CiviCoin, puedo conectar con personas que comparten mis valores y apoyar causas que realmente importan."</p>
                <p className="font-semibold text-[#00D09E]">Laura M.</p>
              </Card>
            </div>
          </div>
        </section>
        

        {/* Compatibilidad / Integración */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#0E3E3E]">Integrado con</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all">
                <Image src="/partners/metro-logo.webp" alt="Metro de Medellín" fill className="object-contain" />
              </div>
              <div className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all">
                <Image src="/partners/nfc-logo.webp" alt="NFC" fill className="object-contain" />
              </div>
              <div className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all">
                <Image src="/partners/android-logo.webp" alt="Android" fill className="object-contain" />
              </div>
              <div className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all">
                <Image src="/partners/apple-logo.webp" alt="iOS" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección final con CTA */}
        <section className="py-20 bg-gradient-to-r from-[#00D09E] to-[#3299FF] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para moverte diferente?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              Únete a miles de ciudadanos que ya están transformando su movilidad y ganando recompensas.
            </p>
            <Button className="bg-white text-[#00D09E] hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
              Empieza hoy
              <Smartphone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0E3E3E] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo/logo-civicoin-alt.webp" alt="CiviCoin Logo" width={32} height={32} />
                <span className="text-lg font-bold">CiviCoin</span>
              </div>
              <p className="text-sm text-gray-400">Una moneda digital ciudadana para Medellín.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Descargar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CiviCoin. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
