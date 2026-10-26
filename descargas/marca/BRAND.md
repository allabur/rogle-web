# Guía de la marca ROGLE para asistentes de IA

Esta guía dice cómo usar la marca del grupo de investigación ROGLE al generar documentos, presentaciones, páginas web, vídeos u objetos. Léela entera antes de producir nada. La versión pública está en https://rogle.webs.upv.es/descargas/marca/BRAND.md y el manual completo con imágenes, en https://rogle.webs.upv.es/es/recursos/marca.html.

**English summary.** ROGLE is a research group of the Department of Business Organization (Departamento de Organización de Empresas) of the Universitat Politècnica de València (UPV), Spain, founded in 2006. Brand: five people in a circle, Oxford Blue (#002147) and indigo, bold Palatino for the name and titles, Gill Sans only for secondary text, amber (#F5B000) only on Oxford Blue. Always use the logo files, never typeset the logo. Write in Spanish unless asked otherwise.

## Contenido y estilo de escritura

- Escribe en español, con frases cortas de una sola idea. La web y los documentos tienen también versión en inglés.
- Escribe el nombre siempre en mayúsculas: **ROGLE**. Su desarrollo oficial es el inglés, *Reengineering Operations GroupWork Logistics Excellence*. La traducción, *Reingeniería, Organización, trabajo en Grupo y Logística Empresarial*, solo acompaña.
- Escribe el nombre propio del departamento siempre en castellano, también en textos en inglés: **Departamento de Organización de Empresas**. Dirección: Edificio 7D, Camino de Vera, s/n, 46022 València. Correo del grupo: rogle@upv.es.
- El grupo se creó en **2006** y cumple **20 años** en 2026. Escribe «20 años» o «2006 · 2026».
- No uses emoji ni adornos tipográficos en los títulos.
- Los títulos de acción de las presentaciones son una frase con la conclusión («La reorganización de rutas reduce un 18 % la distancia recorrida»), no una etiqueta («Resultados»).

## Significado de la marca

- En valenciano, *rogle* es el corro de personas. «Fer rogle» es reunirse en círculo.
- El isotipo son cinco personas en corro. Cada una abraza al grupo con una media luna. Las medias lunas giran: expresan el trabajo en grupo y el ciclo continuo de mejora de las operaciones.

## Marca vigente

La marca vigente es la **alternativa C** del 20 aniversario, adoptada el 6 de octubre de 2026: el nombre ROGLE va en **Palatino negrita** (TeX Gyre Pagella Bold, convertido a trazados). La alternativa A, que usaba las letras del logotipo de la UPV, se descartó porque el Área de Comunicación de la UPV no aprueba su tipografía personalizada en marcas internas. No uses A ni B.

La marca es **indeformable e indivisible**: isotipo y logotipo forman un conjunto fijo. Usa siempre los archivos, nunca texto compuesto.

### Archivos

Con nombres por rol, en `brand/logos/` del repositorio `allabur/rogle` (siguen la alternativa vigente):

| Archivo | Úsalo para |
|---|---|
| `logo/rogle-logo-color.svg` | Versión por defecto: documentos, web y presentaciones |
| `logo/rogle-logo-reverse.svg` | Sobre fondo `oxford-blue` o fondos oscuros |
| `logo/rogle-logo-black.svg` | Impresión a un color, grabado, láser y sellos |
| `logo/rogle-logo-notagline-color.svg`, `…-reverse.svg` | Sin descriptor |
| `symbol/rogle-symbol-color.svg`, `…-reverse.svg` | Isotipo solo: sellos e iconos, si el nombre ya está cerca |
| `wordmark/rogle-wordmark-color.svg`, `…-reverse.svg` | Solo el nombre |

Variantes de la alternativa C en `brand/marca/alternativa-C/`: `rogle-C-horizontal-descriptor.svg` (portadas), `rogle-C-integrado.svg` (el isotipo hace de «O»), `rogle-C-vertical.svg` (espacios estrechos), `rogle-C-horizontal-digital.svg` (solo pantalla), `rogle-C-upv-convivencia.svg` (junto a la marca UPV), y para el 20 aniversario `rogle-C-20-aniversario.svg` (sobre `oxford-blue`), `rogle-C-20-since.svg`, `rogle-C-20-blanco.svg` y `rogle-C-20-blanco-digital.svg` (sobre blanco).

### Reglas de uso

- Deja alrededor de la marca un espacio libre igual a 0,25 veces la altura del isotipo.
- Tamaño mínimo: isotipo, 16 px en pantalla y 5 mm impreso; horizontal, 160 px o 30 mm de ancho; con descriptor, 320 px o 60 mm.
- Con la UPV: en documentos oficiales usa la firma institucional (marca UPV con el nombre del grupo en gris `gris-upv-431`). Si aparecen juntas, la UPV a la izquierda y ROGLE a la derecha, a la misma altura, y ROGLE nunca mayor. No modifiques la marca UPV.
- Los logotipos y las plantillas son para materiales del grupo ROGLE y de la UPV.

## Color

| Token | Valor | Úsalo para |
|---|---|---|
| `oxford-blue` | #002147 | Personas del isotipo, logotipo y texto. Fondo de portadas, separadores y negativos |
| `indigo` | #3F4AA8 | Descriptor, enlaces, botones y titulares de apoyo |
| `indigo-medio` | #5B67C7 | Medias lunas de la versión principal |
| `indigo-claro` | #A9B0E0 | Degradado digital, medias lunas en negativo y texto sobre `oxford-blue` |
| `ambar` | #F5B000 | La cifra del 20 aniversario, filetes y etiquetas, junto a `oxford-blue` |
| `gris-upv-431` | #5B6770 | Pies y notas, y el nombre del grupo en la firma UPV |
| `tinte-claro` | #F3F4FA | Secciones alternas, menú lateral y código |
| `tinte-mensaje` | #E3E3F1 | Barra de mensaje clave de las diapositivas |
| `separador` | #CFCFCF | Línea entre la marca UPV y la marca ROGLE |

1. Pon `ambar` solo sobre `oxford-blue` o junto a él. Sobre fondo claro no se lee (1,89:1). Excepción: la cifra grande «20» del logotipo para fondos blancos.
2. No pongas `oxford-blue` en contacto directo con `indigo` (2,11:1). Sepáralos con aire blanco.
3. Usa el degradado solo en pantalla. En impresión, la versión plana.
4. En el tema oscuro de la web, el fondo es `oxford-night` y los enlaces `indigo-claro`.

## Tipografía

- **Documentos y presentaciones.** Palatino para el texto y para todos los títulos, estos en negrita. Gill Sans solo para lo secundario: menú de seguimiento, etiquetas, fuente, pie, número de página, cabeceras de tabla y leyendas. Fórmulas en Pagella y código en Inconsolata. Fuentes libres de respaldo: TeX Gyre Pagella y Gillius ADF.
- **Web.** Poppins Bold para titulares e Inter para todo lo demás, autoalojadas, sin Google Fonts.
- Ancho del texto corrido: unos 65 a 70 caracteres.
- No escribas textos nuevos en Futura: es comercial y la firma institucional ya la lleva convertida a trazados.

## Presentaciones

Estilo de consultora: contenido en blanco, título de acción, menú de seguimiento y barra de mensaje clave.

- Portada y contraportada: campo `oxford-blue` de 4/5, filete `ambar` al corte y, debajo, franja blanca con la UPV y ROGLE en positivo a la misma altura. Alternativa: toda oscura, con los logotipos en blanco.
- Separadores: `oxford-blue` con el número de sección grande en `ambar`.
- Contenido: título de acción, cuerpo, mensaje clave en `tinte-mensaje`, fuente y pie «Grupo de Investigación ROGLE · UPV» con el número.
- Menú de seguimiento (lateral, superior, inferior, pasos o ninguno): sección actual en `indigo`, las demás en `gris-upv-431`. Nunca `ambar` sobre blanco.

## Usos incorrectos

1. Deformar, inclinar o girar la marca.
2. Cambiar los colores o el número de personas del isotipo.
3. Añadir sombras, contornos, brillos u otros efectos.
4. Usar el degradado en impresión a una tinta.
5. Cambiar la separación entre isotipo y logotipo.
6. Colocar la marca sobre fotografías o fondos con poco contraste.
7. Usar el isotipo de la UPV o su pictograma dentro de la marca ROGLE.
8. Poner `ambar` como color de texto sobre fondo claro.

## Accesibilidad

La UPV exige al menos el nivel AA. Texto a 4,5:1 (3:1 desde 24 px), foco visible, un solo `h1` por página y texto alternativo en cada imagen. Pares de la marca: `oxford-blue` sobre blanco 16,05:1; `indigo` sobre blanco 7,62:1; `gris-upv-431` sobre blanco 5,80:1; `ambar` sobre `oxford-blue` 8,48:1; `indigo-claro` sobre `oxford-blue` 7,62:1.

## Plantillas

En `plantillas/` del repositorio `allabur/rogle`: Word (`.dotx`) y PowerPoint (`.potx`) con tema, presentaciones Quarto (Reveal.js y Beamer), informe técnico (Quarto a PDF), póster A0 (Typst) y carta con membrete (LaTeX). Para Quarto: `quarto use brand allabur/rogle`. La marca está en `_brand.yml` y las descargas, en https://rogle.webs.upv.es/es/recursos/marca.html.
