# Repositorio del equipo — Unidad 2, IPC121NSCT

## Qué es este repositorio

Hay **un repositorio por equipo**, no uno por persona. Todo el trabajo de la unidad vive
acá: cada clase abre el mismo archivo (`sketch.js`) y lo hace crecer con una capacidad
nueva. A diferencia de la Unidad 1 —donde cada clase terminaba en un artefacto distinto—,
acá se construye un solo sistema, el enjambre del equipo, de la Clase 1 a la Clase 8.

No hay que borrar ni reemplazar `sketch.js` en ningún momento de la unidad. Lo que hace
cada clase es sumar sobre lo que ya está.

## Cómo se abre y se ejecuta

1. Abre VS Code e inicia sesión en el panel de TutorMaker.
2. Pulsa **Descargar** (⬇). El repositorio del equipo queda como una carpeta en tu
   computador; el panel te ofrece abrirla, o puedes usar el botón **Carpeta** (📂).
3. Abre `index.html` en el navegador. El sketch se dibuja solo: no hay que instalar nada
   más, `p5.js` se carga desde una red de distribución de contenido (CDN).
4. Si el navegador muestra la pantalla en blanco, abre la consola (F12) antes que nada:
   ahí aparece cualquier error en rojo, y es el primer lugar donde hay que mirar.

## El flujo de trabajo con el repositorio, por etapas

Todo se hace con los **botones del panel de TutorMaker**, no con la terminal. Son cuatro y
conviene aprender qué hace cada uno, porque son los términos de verdad:

- **Commit** (💾) guarda un punto tuyo al que puedes volver. Todavía **no** está en el
  repositorio.
- **Push** (↑) sube tus commits al repositorio. Es lo único que pone tu trabajo a salvo.
- **Pull** (↓) trae lo que hayan subido tus compañeros y lo junta con lo tuyo.
- **Historial** (🕘) lista tus puntos guardados y permite volver a uno.

**Clases 1 a 3 (individual):** cada quien trabaja el desafío de la clase sobre su propia
copia. Haz **Commit** al cerrar cada clase, con un mensaje que diga qué hiciste, y
**Push** antes de irte.

**Desde la Clase 4 (en equipo):** acá empieza el trabajo real de equipo sobre un solo
archivo. Todos trabajan sobre la misma versión, así que el orden importa:

- **Pull antes de empezar a trabajar.** Siempre. Es lo que evita la mayoría de los
  problemas: trae lo que hicieron los demás antes de que tú cambies nada.
- Haz **Commit** seguido — cuando algo funciona, no cuando está "terminado del todo".
- El mensaje del commit dice qué cambió: **"agrego variación de tamaño" sirve, "cambios"
  no.**
- **Push apenas tengas algo que funcione.** Que lo haga cada integrante, no una sola
  persona por todos: es lo que deja tu aporte visible en el historial.
- Si dos personas cambiaron lo mismo, va a aparecer un **conflicto**. No es un error: es
  el sistema avisando que alguien tiene que decidir. La extensión te muestra una tarjeta
  para elegir, archivo por archivo, qué versión queda. **La decisión es del equipo**,
  conversénla entre los dos que tocaron esa parte.
- Trabajen de a una parte por vez. Si dos personas van a tocar `sketch.js` al mismo
  tiempo, pónganse de acuerdo primero sobre quién hace qué: es más barato repartir que
  resolver conflictos.

## Cómo se verifica el aporte de cada integrante

**Esta unidad no tiene defensa oral por sorteo.** El aporte individual se verifica en el
**historial de commits del repositorio**: cada integrante tiene que tener commits propios,
con su nombre y un mensaje que describa qué hizo. Un aporte que nadie puede ubicar en el
historial no cuenta, sin importar cuánto se haya trabajado en la pantalla compartida.

Por eso: haz tus propios commits. No le pidas a un compañero que suba tu parte por ti.

## La bitácora

`BITACORA.md`, en esta misma carpeta, se llena al cierre de cada clase — tres minutos
bastan. La sección que más pesa en el informe final es **lo que se probó y se descartó,
con la razón del descarte**: regístrenlo ahí mismo, mientras lo tienen fresco, no el
domingo antes de entregar.

## Antes de la entrega del desafío (domingo 4 de octubre)

- Todos hicieron **Push**: el repositorio tiene los aportes de los cuatro integrantes y el
  historial muestra quién hizo cada uno.
- La versión final está subida (**Push**), no solo guardada en el computador de alguien.
- La bitácora tiene una entrada por clase, con al menos una idea descartada y su razón.
- Guardaron evidencia comparativa: la misma condición inicial del enjambre con dos valores
  distintos de un mismo parámetro (por ejemplo, dos radios de vecindad), no dos capturas de
  momentos distintos.
