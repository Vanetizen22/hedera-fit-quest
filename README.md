🏔️ ConquestFit: AI-Driven Fitness Rewards on Hedera
ConquestFit es una plataforma descentralizada que gamifica el bienestar físico y la disciplina. Utilizando la infraestructura de Hedera, contratos inteligentes para el manejo de colateral en stablecoins y agentes autónomos impulsados por ElizaOS, permitimos que grupos de amigos compitan por metas de salud con incentivos económicos reales.

"Conquista tu rutina, libera tu colateral."

🚀 Vision
En ConquestFit, el usuario no solo entrena; "apuesta" por su disciplina. La plataforma utiliza un modelo de Staking de Comportamiento donde el colateral en USDT se libera únicamente si los objetivos son validados por un oráculo de IA imparcial.

🛠️ Tech Stack
Network: Hedera (HTS, HSCS, HCS).
AI Agent Framework: ElizaOS + Hedera Agent Kit.
Smart Contracts: Solidity (Hedera Smart Contract Service).
Tokenization: Hedera Token Service (HTS) para el token nativo $CQT.
Oráculo de IA: Agentes de ElizaOS para validación de visión (comidas/ejercicios).
🤖 El Agente de IA (Powered by ElizaOS)
Utilizamos ElizaOS para desplegar agentes autónomos que actúan como "Jueces de Entrenamiento". Gracias al Hedera Agent Kit, el agente puede:

Analizar Evidencia: Procesar imágenes y videos de rutinas mediante modelos de visión.
Ejecutar Transacciones: Al validar una rutina, el agente firma un mensaje en el Hedera Consensus Service (HCS).
Gestión de Tesorería: Interactuar con el contrato de Escrow para autorizar la liberación de fondos o aplicar slashing (penalizaciones).
Interacción Social: Notificar en el chat del grupo quién va liderando y motivar a los "conquistadores" rezagados.
🔄 Flujo del Proyecto
Creation: Un usuario crea un "Conquest Group" definiendo la meta (ej. 20 días de gimnasio) y el colateral (ej. 50 USDT).
Staking: Los participantes depositan sus USDT en el Smart Contract de Hedera.
Daily Proof: Los usuarios envían fotos de sus comidas o rutinas al agente de ElizaOS.
Consensus: El agente valida la prueba y registra el "Check-in" inmutablemente en HCS.
Settlement: Al finalizar el reto:
Éxito: Retorno del colateral + Recompensa en $CQT.
Fallo: El colateral se distribuye entre los ganadores o se quema para deflación del token.
📂 Estructura del Repositorio
├── agents/             # Configuraciones de ElizaOS y Hedera Agent Kit
├── contracts/          # Smart Contracts en Solidity (Escrow & Rewards)
├── scripts/            # Scripts para despliegue en Testnet de Hedera
├── app/                # Frontend (Vibe-coded UI)
└── docs/               # Documentación del protocolo de consenso´´´

---

🛠️ Setup & Instalación
Clonar el repo:

Bash
git clone [https://github.com/Vanetizen22/ConquestFit.git](https://github.com/Vanetizen22/ConquestFit.git)
Instalar dependencias de ElizaOS:

Bash
cd agents && npm install
Configurar variables de entorno (.env):
Necesitarás tu HEDERA_ACCOUNT_ID, HEDERA_PRIVATE_KEY y la API key del modelo de IA seleccionado para el agente.

🇦🇷 Mendoza Tech Node
Diseñado con ❤️ en Mendoza, Argentina. Este proyecto busca fomentar la salud comunitaria integrando tecnologías de vanguardia y micro-pagos eficientes.

Licencia: MIT

Developed by: Vanetizen22
