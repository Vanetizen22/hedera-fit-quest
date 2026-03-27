🏔️ ConquestFit: AI-Driven Fitness Rewards on Hedera
ConquestFit es una plataforma descentralizada que gamifica el bienestar físico y la disciplina. Utilizando la infraestructura de Hedera, contratos inteligentes para el manejo de colateral en stablecoins y agentes autónomos impulsados por ElizaOS, permitimos que grupos de amigos compitan por metas de salud con incentivos económicos reales.

"Conquista tu rutina, libera tu colateral."

🚀 Visión
En ConquestFit, el usuario no solo entrena; apuesta por su disciplina. Implementamos un modelo de Staking de Comportamiento donde el colateral en stablecoins se libera únicamente si los objetivos son validados por un oráculo de IA imparcial.

A diferencia de otros modelos, el colateral depositado genera rendimientos mediante protocolos de staking, permitiendo que los ganadores obtengan una recompensa mayor a su depósito inicial, mientras se asegura la sostenibilidad del protocolo.

🛠️ Tech Stack
Network: Hedera (HTS, HSCS, HCS).

AI Agent Framework: ElizaOS + Hedera Agent Kit.

Smart Contracts: Solidity (Hedera Smart Contract Service).

Stablecoin Integration: USDT/USDC para colateral y recompensas.

Oráculo de IA: Agentes de ElizaOS para validación de pruebas (comidas/ejercicios).

🤖 El Agente de IA (Powered by ElizaOS)
Utilizamos ElizaOS para desplegar agentes autónomos que actúan como "Jueces de Entrenamiento". Gracias al Hedera Agent Kit, el agente puede:

Analizar Evidencia: Procesar imágenes y videos de rutinas mediante modelos de visión.

Ejecutar Transacciones: Al validar una rutina, el agente firma un mensaje en el Hedera Consensus Service (HCS).

Gestión de Tesorería: Interactuar con el contrato de Escrow para autorizar la liberación de fondos o aplicar slashing (penalizaciones).

Interacción Social: Notificar en el chat del grupo quién lidera y motivar a los "conquistadores" rezagados.

🔄 Flujo del Proyecto (V2)
Creation: Un usuario crea un "Conquest Group" definiendo la meta (ej. 20 días de gimnasio) y el colateral inicial.

Staking & Yield: Los participantes depositan su colateral en el Smart Contract de Hedera. Estos fondos se envían a protocolos de staking para generar rendimientos durante el desafío.

Daily Proof: Los usuarios envían pruebas de sus actividades al agente de ElizaOS.

Consensus: El agente valida la prueba y registra el "Check-in" de forma inmutable en HCS.

Settlement: Al finalizar el reto:

Éxito: Retorno del colateral + rendimientos generados (Yield).

Fallo: El colateral se distribuye entre los ganadores.

Protocol Fee: El proyecto retiene un 0.5% de la ganancia generada por el staking para mantenimiento y escalabilidad.

🗺️ Roadmap
[x] MVP con validación de imágenes vía ElizaOS.

[x] Integración de Escrow en Hedera Smart Contract Service.

[ ] Fase 2: Implementación de Smart Staking para maximizar recompensas de usuarios.

[ ] Fase 3: Lanzamiento del token nativo $CQT para gobernanza y multiplicadores de recompensas.**

Gemini ha dicho
¡Claro! Vamos a darle un nivel más profesional y técnico a ese README.md, ajustando la arquitectura a los cambios que mencionaste (sin token propio inicial, enfoque en el staking de colateral y el fee de rentabilidad).

Aquí tienes una versión optimizada, con una estructura más limpia y un lenguaje que resalta el uso de Hedera y ElizaOS:

🏔️ ConquestFit: AI-Driven Fitness Rewards on Hedera
ConquestFit es una plataforma descentralizada que gamifica el bienestar físico y la disciplina. Utilizando la infraestructura de Hedera, contratos inteligentes para el manejo de colateral en stablecoins y agentes autónomos impulsados por ElizaOS, permitimos que grupos de amigos compitan por metas de salud con incentivos económicos reales.

"Conquista tu rutina, libera tu colateral."

🚀 Visión
En ConquestFit, el usuario no solo entrena; apuesta por su disciplina. Implementamos un modelo de Staking de Comportamiento donde el colateral en stablecoins se libera únicamente si los objetivos son validados por un oráculo de IA imparcial.

A diferencia de otros modelos, el colateral depositado genera rendimientos mediante protocolos de staking, permitiendo que los ganadores obtengan una recompensa mayor a su depósito inicial, mientras se asegura la sostenibilidad del protocolo.

🛠️ Tech Stack
Network: Hedera (HTS, HSCS, HCS).

AI Agent Framework: ElizaOS + Hedera Agent Kit.

Smart Contracts: Solidity (Hedera Smart Contract Service).

Stablecoin Integration: USDT/USDC para colateral y recompensas.

Oráculo de IA: Agentes de ElizaOS para validación de pruebas (comidas/ejercicios).

🤖 El Agente de IA (Powered by ElizaOS)
Utilizamos ElizaOS para desplegar agentes autónomos que actúan como "Jueces de Entrenamiento". Gracias al Hedera Agent Kit, el agente puede:

Analizar Evidencia: Procesar imágenes y videos de rutinas mediante modelos de visión.

Ejecutar Transacciones: Al validar una rutina, el agente firma un mensaje en el Hedera Consensus Service (HCS).

Gestión de Tesorería: Interactuar con el contrato de Escrow para autorizar la liberación de fondos o aplicar slashing (penalizaciones).

Interacción Social: Notificar en el chat del grupo quién lidera y motivar a los "conquistadores" rezagados.

🔄 Flujo del Proyecto (V2)
Creation: Un usuario crea un "Conquest Group" definiendo la meta (ej. 20 días de gimnasio) y el colateral inicial.

Staking & Yield: Los participantes depositan su colateral en el Smart Contract de Hedera. Estos fondos se envían a protocolos de staking para generar rendimientos durante el desafío.

Daily Proof: Los usuarios envían pruebas de sus actividades al agente de ElizaOS.

Consensus: El agente valida la prueba y registra el "Check-in" de forma inmutable en HCS.

Settlement: Al finalizar el reto:

Éxito: Retorno del colateral + rendimientos generados (Yield).

Fallo: El colateral se distribuye entre los ganadores.

Protocol Fee: El proyecto retiene un 0.5% de la ganancia generada por el staking para mantenimiento y escalabilidad.

🗺️ Roadmap
[x] MVP con validación de imágenes vía ElizaOS.

[x] Integración de Escrow en Hedera Smart Contract Service.

[ ] Fase 2: Implementación de Smart Staking para maximizar recompensas de usuarios.

[ ] Fase 3: Lanzamiento del token nativo $CQT para gobernanza y multiplicadores de recompensas.

📂 Estructura del Repositorio
├── agents/         # Configuraciones de ElizaOS y Hedera Agent Kit
├── contracts/      # Smart Contracts en Solidity (Escrow, Yield & Fees)
├── scripts/        # Scripts para despliegue en Testnet de Hedera
├── app/            # Frontend (Vibe-coded UI)
└── docs/           # Documentación técnica del protocolo

🛠️ Setup & Instalación
Clonar el repo:

Bash
git clone https://github.com/Vanetizen22/ConquestFit.git
Instalar dependencias de ElizaOS:

Bash
cd agents && npm install
Configurar variables de entorno (.env):
Necesitarás tu HEDERA_ACCOUNT_ID, HEDERA_PRIVATE_KEY y la API key del modelo de IA seleccionado para el agente.

🇦🇷 Mendoza Tech Node
Diseñado con ❤️ en Mendoza, Argentina. Este proyecto busca fomentar la salud comunitaria integrando tecnologías de vanguardia y micro-pagos eficientes.

Licencia: MIT

Developed by: Eugenia Oyarse y Matias Bataller
