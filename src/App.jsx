import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Protección de Datos en Chile</h1>
          <p className="text-xl opacity-90">Infografía sobre tus derechos digitales y privacidad</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-4">
        
        {/* Section 1: What is Data Protection */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-5xl mb-4">🔒</div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">¿Qué es la Protección de Datos?</h2>
              <p className="text-gray-700 leading-relaxed">
                La protección de datos personales es el derecho que tiene toda persona a controlar la información 
                sobre sí misma. En Chile, este derecho está garantizado por la Ley 19.628 que regula el tratamiento 
                de datos personales.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 border-2 border-blue-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  <span className="text-lg font-semibold">Información personal</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏢</span>
                  <span className="text-lg font-semibold">Datos corporativos</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  <span className="text-lg font-semibold">Datos digitales</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Your Rights */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Tus Derechos Fundamentales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'Acceso', desc: 'Conocer qué datos tienes en bases de datos' },
              { icon: '✏️', title: 'Rectificación', desc: 'Corregir datos incorrectos o incompletos' },
              { icon: '🗑️', title: 'Cancelación', desc: 'Solicitar eliminar tus datos' },
              { icon: '🚫', title: 'Oposición', desc: 'Rechazar el uso de tus datos' }
            ].map((right, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{right.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{right.title}</h3>
                <p className="text-gray-600 text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Data Types */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Tipos de Datos Protegidos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: '👤', 
                title: 'Datos Personales', 
                items: ['Nombre', 'RUT', 'Email', 'Teléfono'],
                color: 'from-purple-400 to-purple-600'
              },
              { 
                icon: '💼', 
                title: 'Datos Sensibles', 
                items: ['Ideología', 'Religión', 'Afiliaciones', 'Salud'],
                color: 'from-red-400 to-red-600'
              },
              { 
                icon: '💳', 
                title: 'Datos Financieros', 
                items: ['Tarjetas', 'Bancos', 'Transacciones', 'Créditos'],
                color: 'from-green-400 to-green-600'
              }
            ].map((type, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${type.color} text-white rounded-lg p-8 shadow-lg`}>
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-xl">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Who Controls Your Data */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">¿Quién Controla tus Datos?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-4 border-blue-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">👨‍⚖️ Responsable del Tratamiento</h3>
              <p className="text-gray-700 mb-4">
                Es la persona o empresa que recopila y usa tus datos. Tienen la responsabilidad legal de protegerlos.
              </p>
              <div className="bg-white rounded p-4 text-sm font-semibold text-gray-600">
                Ejemplo: Banco, red social, tienda online
              </div>
            </div>
            <div className="bg-orange-50 border-4 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">🔐 Encargado del Tratamiento</h3>
              <p className="text-gray-700 mb-4">
                Procesa los datos en nombre del responsable. También tiene obligaciones de seguridad.
              </p>
              <div className="bg-white rounded p-4 text-sm font-semibold text-gray-600">
                Ejemplo: Empresa de hosting, procesador de pagos
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Legal Framework */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-8">📜 Marco Legal en Chile</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Ley 19.628</h3>
                <p className="mb-4">
                  Ley sobre protección de datos personales. Establece principios de legalidad, 
                  finalidad y seguridad en el tratamiento de datos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Dirección General de Protección de Datos</h3>
                <p className="mb-4">
                  Organismo que supervisa el cumplimiento de la normativa y recibe denuncias 
                  de violaciones de derechos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Best Practices */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Consejos para Proteger tus Datos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔐', tip: 'Usa contraseñas fuertes y únicas' },
              { icon: '⚠️', tip: 'Verifica permisos antes de compartir datos' },
              { icon: '🛡️', tip: 'Activa autenticación de dos factores' },
              { icon: '📧', tip: 'Desconfía de emails sospechosos' },
              { icon: '🔍', tip: 'Lee políticas de privacidad' },
              { icon: '💬', tip: 'Contacta directamente con empresas sobre tus datos' }
            ].map((practice, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <span className="text-4xl flex-shrink-0">{practice.icon}</span>
                <p className="text-lg font-semibold text-gray-700">{practice.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Tus datos están en riesgo?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Si crees que tus datos personales han sido mal utilizados, puedes presentar un reclamo 
            ante la Dirección General de Protección de Datos.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
            Más información →
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">Infografía sobre Protección de Datos en Chile</p>
          <p className="text-sm">
            Información basada en la Ley 19.628 y regulaciones vigentes
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
