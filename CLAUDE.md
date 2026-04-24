# Reglas del proyecto

## Blogs (`src/constants/blogs/blogs.ts`)

Al agregar o editar el `content` de cualquier blog, siempre aplicar este formato sin excepción:

1. **Wrapper obligatorio**: todo el contenido va dentro de `<div style="font-size: 24px; line-height: 1.2;">...</div>`
2. **Espaciado**: agregar `<br />` entre cada párrafo (`</p>`) y la siguiente sección (`<p>`, `<h2>`, `<h3>`, `<ul>`, `<img>`)
3. **Imagen**: usar `style="max-width: 100%; height: auto;"` — nunca `width=""` ni `height=""` como atributos; siempre incluir un `alt` descriptivo
4. **Listas**: `<ul style="list-style-type: disc; padding-left: 20px;">`
5. **Títulos**: `<h2><strong>TÍTULO</strong></h2>` o `<h3><strong>Título</strong></h3>` — el `<strong>` va dentro, no fuera
6. **Entidades HTML**: reemplazar siempre por caracteres reales (`&aacute;` → `á`, `&ntilde;` → `ñ`, `&amp;` → `&`, `&ldquo;`/`&rdquo;` → `"`, `&mdash;` → `—`, `&iquest;` → `¿`, etc.)
7. **Enlace de WhatsApp**: usar `%20` (no `%2520`) para los espacios en el `text=` del query string
8. **Todos los enlaces**: agregar `rel="noopener noreferrer"` y `style="color: #0066cc; text-decoration: underline;"`
9. **Párrafo final de contacto**: separar el texto del enlace — el `<strong>` solo envuelve el texto del enlace, no el párrafo completo
