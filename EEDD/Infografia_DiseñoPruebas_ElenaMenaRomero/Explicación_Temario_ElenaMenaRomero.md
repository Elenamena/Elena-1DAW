# Análisis de UD5 - Diseño de Pruebas de Software

## Planificación de las pruebas
Las pruebas de software son esenciales para garantizar que el sistema cumple con las especificaciones y detectar errores en diferentes fases del desarrollo. Su planificación sigue el Modelo en Espiral, donde las pruebas se implementan progresivamente:

- Pruebas unitarias: se analizan módulos individuales del código.
- Pruebas de integración: se verifica la conexión entre módulos y su arquitectura.
- Pruebas de aceptación: se comprueba que el sistema cumple los requisitos definidos.
- Pruebas de sistema: se evalúa el comportamiento global del software.





## Tipos de pruebas
Las pruebas se pueden clasificar según su enfoque:

### Caja negra
Evalúa la funcionalidad sin conocer la estructura interna del código. Solo se prueban las entradas y salidas.

### Caja blanca
Se analiza el código fuente y los caminos de ejecución para comprobar su correcto funcionamiento.

### Pruebas de rendimiento
- Pruebas de carga: evalúan el rendimiento con múltiples usuarios simultáneos.
- Pruebas de estrés: analizan el comportamiento ante una carga extrema.
- Pruebas de estabilidad: comprueban si el sistema soporta una carga prolongada sin fallos.
- Pruebas de picos: simulan cambios bruscos en la cantidad de usuarios.

### Pruebas estructurales y funcionales
- Pruebas estructurales: verifican la estructura interna del código (cobertura de sentencias, condiciones, etc.).
- Pruebas funcionales: evalúan si el software cumple los requisitos del usuario.

### Pruebas de regresión
Se realizan tras modificaciones para asegurar que no se han introducido nuevos errores en otras partes del sistema.





## Procedimientos y casos de prueba
Los casos de prueba son conjuntos de entradas, condiciones de ejecución y resultados esperados. Se diseñan con distintos enfoques:

- Funcional (Caja Negra): se evalúan las entradas y salidas sin ver la implementación interna.
- Estructural (Caja Blanca): se analizan los caminos internos del código.
- Aleatorio: se generan entradas al azar basadas en modelos estadísticos.





## Herramientas de depuración
Las herramientas de depuración permiten detectar y corregir errores en el software. Existen dos tipos principales de errores:

- Errores de compilación: ocurren por sintaxis incorrecta o referencias a variables inexistentes.
- Errores lógicos: no impiden la compilación, pero generan resultados incorrectos.

Los entornos de desarrollo incluyen depuradores que permiten:
- Supervisar la ejecución paso a paso.
- Analizar valores de variables en tiempo de ejecución.
- Identificar los puntos donde falla el programa.

Algunas herramientas populares incluyen Visual Studio Debugger, Chrome DevTools, PyCharm Debugger y Xcode Debugger, que permiten analizar código en distintos entornos y lenguajes.





## Validaciones
El cliente juega un papel clave en la validación del software. Se utilizan pruebas de caja negra para verificar que el producto final cumple los requisitos. En la validación se pueden dar dos resultados:

1. Aceptación: el software es aprobado por cumplir con los requisitos.
2. Rechazo: se identifican errores que requieren corrección.






## Normas de calidad
Para garantizar la calidad del software, se siguen estándares reconocidos:

- BS 7925-1 y BS 7925-2: vocabulario y pruebas de componentes de software.
- IEEE 829 y IEEE 1008: documentación y pruebas de unidad.
- ISO/IEC 12207 y 15289: procesos y documentación de pruebas.
- ISO/IEC 29119: unificación de estándares para pruebas de software.





## Ejemplos en la industria
Para entender la importancia del diseño de pruebas, aquí algunos ejemplos en diferentes sectores:

- E-commerce: plataformas como Amazon** y Shopify realizan pruebas de carga para garantizar la estabilidad durante eventos como el Black Friday.
- Banca: aplicaciones financieras como BBVA Net Cash o ING Direct siguen estrictos protocolos de pruebas para evitar fallos de seguridad.
- Videojuegos: empresas como CD PROJECT RED o Electronic Arts aplican pruebas de estrés para asegurar que los servidores soporten un alto número de jugadores en títulos como The Witcher o FIFA.
- Aplicaciones móviles: aplicaciones como WhatsApp o Instagram realizan pruebas de regresión para verificar que una actualización no genere errores en funcionalidades previas.

Estos ejemplos muestran cómo las pruebas de software son esenciales en cualquier tipo de aplicación, asegurando calidad y confiabilidad.




