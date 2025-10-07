// Utility function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
};

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  colorTitle: string;
  description: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

export const BlogsSection: BlogPost[] = [
  {
    id: 1,
    title: "Cómo organizar una parrilla de contenido paso a paso",
    slug: "como-organizar-una-parrilla-de-contenido-paso-a-paso",
    colorTitle: "#355C7D",
    description: "Aprende a darle orden a lo que publicas cada semana",
    content: `
      <div style="font-family: serif; line-height: 1.6; color: #333; text-align: left;">
        <p style="margin-bottom: 16px;">En redes sociales, la improvisación rara vez da buenos resultados. Para mantener coherencia, constancia y creatividad, la mejor herramienta es la <strong>parrilla de contenido</strong>. Este recurso permite planificar cada publicación con antelación, garantizando que los mensajes estén alineados con los objetivos y que haya un equilibrio entre lo informativo, lo creativo y lo promocional.</p>
        
        <p style="margin-bottom: 24px;">Si quieres mejorar la gestión de tus redes, aquí te muestro cómo organizar una parrilla de contenido paso a paso.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 1: DEFINE LOS OBJETIVOS DE TUS REDES</h2>
        <p style="margin-bottom: 16px;">El primer paso es tener claridad sobre <strong>qué quieres lograr con tus publicaciones</strong>. Puede ser aumentar seguidores, lograr más interacción, atraer clientes potenciales o fortalecer tu marca personal.</p>
        <p style="margin-bottom: 24px;">Tener metas concretas te ayudará a decidir qué tipo de publicaciones incluir en la parrilla.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 2: CONOCE BIEN A TU AUDIENCIA</h2>
        <p style="margin-bottom: 16px;">Las redes sociales funcionan cuando el contenido conecta con las personas correctas. Investiga datos como:</p>
        <ul style="margin: 16px 0; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">Edad, ubicación y estilo de vida de tu comunidad.</li>
          <li style="margin-bottom: 8px; display: list-item;">Qué tipo de publicaciones consumen más (videos, reels, carruseles).</li>
          <li style="margin-bottom: 8px; display: list-item;">Los temas que más generan interacción.</li>
        </ul>
        <p style="margin-bottom: 24px;">Cuanto mejor conozcas a tu público, más fácil será diseñar contenido que despierte interés.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 3: ELIGE LOS FORMATOS ADECUADOS</h2>
        <p style="margin-bottom: 16px;">No todas las ideas se comunican igual. Para redes sociales es recomendable <strong>variar los formatos</strong>:</p>
        <ul style="margin: 16px 0; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">Reels o videos cortos para dar consejos rápidos.</li>
          <li style="margin-bottom: 8px; display: list-item;">Carruseles para explicar procesos paso a paso.</li>
          <li style="margin-bottom: 8px; display: list-item;">Historias para cercanía y contenido espontáneo.</li>
          <li style="margin-bottom: 8px; display: list-item;">Publicaciones estáticas para mensajes claros y directos.</li>
        </ul>
        <p style="margin-bottom: 24px;">Esta combinación mantiene el perfil activo y atractivo.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 4: ESTABLECE LA FRECUENCIA DE PUBLICACIÓN</h2>
        <p style="margin-bottom: 16px;">La constancia es la clave del crecimiento en redes sociales. Define <strong>cuántas veces por semana publicarás</strong> en cada plataforma. Por ejemplo:</p>
        <ul style="margin: 16px 0; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">Instagram: de 3 a 5 veces por semana.</li>
          <li style="margin-bottom: 8px; display: list-item;">Facebook: entre 2 y 4 publicaciones.</li>
          <li style="margin-bottom: 8px; display: list-item;">TikTok: mínimo 3 videos semanales.</li>
        </ul>
        <p style="margin-bottom: 24px;">Lo más importante es que la frecuencia sea realista y sostenible a largo plazo.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 5: ESTRUCTURA LA PARRILLA EN UN CALENDARIO</h2>
        <p style="margin-bottom: 16px;">Tu parrilla debe ser clara y fácil de entender. Puedes organizarla en Excel, Google Sheets o en herramientas como Trello, Notion o Later. Incluye:</p>
        <ul style="margin: 16px 0; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">Fecha y hora de publicación.</li>
          <li style="margin-bottom: 8px; display: list-item;">Plataforma (Instagram, Facebook, TikTok, etc.).</li>
          <li style="margin-bottom: 8px; display: list-item;">Tipo de formato.</li>
          <li style="margin-bottom: 8px; display: list-item;">Tema o idea principal.</li>
          <li style="margin-bottom: 8px; display: list-item;">Objetivo de la publicación.</li>
        </ul>
        <p style="margin-bottom: 24px;">Así tendrás una visión completa de lo que se publicará y podrás mantener el equilibrio entre distintos tipos de contenido.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 6: PLANIFICA CON ANTICIPACIÓN</h2>
        <p style="margin-bottom: 16px;">La mejor forma de trabajar redes sociales es <strong>preparar la parrilla al menos con un mes de antelación</strong>. Esto te da tiempo para diseñar, redactar y programar con calma, evitando la presión de última hora.</p>
        <p style="margin-bottom: 24px;">Eso sí, la parrilla no debe ser rígida: siempre conviene dejar espacio para tendencias o noticias de última hora que valga la pena aprovechar.</p>
        
        <h2 style="font-weight: bold; font-size: 18px; margin: 24px 0 16px 0; text-transform: uppercase;">PASO 7: MIDE Y MEJORA</h2>
        <p style="margin-bottom: 16px;">Una parrilla no es estática: cada mes debes revisar el rendimiento de las publicaciones. Mira qué tipo de contenido generó más interacciones, cuáles atrajeron más seguidores y cuáles no funcionaron tan bien.</p>
        <p style="margin-bottom: 24px;">Con esta información, puedes ajustar la próxima parrilla para que cada vez sea más efectiva.</p>
      </div>
    `,
    image:
      "https://drive.google.com/file/d/1j5FqkNAifmw9HRtlU59czHbo53CEMbX2/view?usp=drive_link",
    author: "Angie Galván R",
    publishDate: "2024-01-15",
    readTime: "5 min",
    tags: ["Marketing Digital", "Contenido", "Estrategia"],
  },
  {
    id: 2,
    title: "Ventajas de tener un Community Manager en tu marca",
    slug: "ventajas-de-tener-un-community-manager-en-tu-marca",
    colorTitle: "#355C7D",
    description: "Delegar es una decisión estratégica. Te cuento por qué",
    content: `
          <h2>¿Qué hace un Community Manager?</h2>
          <p>Un Community Manager es el responsable de gestionar la presencia de tu marca en las redes sociales, creando y manteniendo relaciones con tu audiencia.</p>
          
          <h3>Ventajas principales:</h3>
          <ul>
            <li><strong>Consistencia:</strong> Mantiene una voz y estilo coherente en todas las plataformas</li>
            <li><strong>Engagement:</strong> Responde a comentarios y mensajes de manera oportuna</li>
            <li><strong>Estrategia:</strong> Desarrolla y ejecuta planes de contenido efectivos</li>
            <li><strong>Análisis:</strong> Monitorea métricas y ajusta estrategias según resultados</li>
          </ul>
          
          <h3>¿Cuándo necesitas un Community Manager?</h3>
          <p>Si tu negocio está creciendo y no tienes tiempo para gestionar las redes sociales de manera profesional, es momento de considerar esta inversión.</p>
        `,
    image:
      "https://drive.google.com/file/d/1wW10O8ZZP5uDqMJzUXNrTj70UOICcDVy/view?usp=drive_link",
    author: "Angie Galván R",
    publishDate: "2024-01-10",
    readTime: "4 min",
    tags: ["Community Manager", "Redes Sociales", "Marketing"],
  },
  {
    id: 3,
    title: "Por qué tener un blog fortalece tu presencia digital",
    slug: "por-que-tener-un-blog-fortalece-tu-presencia-digital",
    colorTitle: "#e57373",
    description: "Es posicionamiento, confianza y contenido que trabaja por ti",
    content: `
          <h2>El poder del contenido de valor</h2>
          <p>Un blog es una herramienta fundamental para cualquier estrategia digital. No solo mejora tu SEO, sino que establece tu autoridad en el sector.</p>
          
          <h3>Beneficios del blogging:</h3>
          <ul>
            <li><strong>SEO:</strong> Contenido fresco que mejora tu posicionamiento en buscadores</li>
            <li><strong>Autoridad:</strong> Demuestra tu expertise y conocimiento</li>
            <li><strong>Lead Generation:</strong> Atrae visitantes cualificados a tu sitio</li>
            <li><strong>Engagement:</strong> Proporciona valor a tu audiencia</li>
          </ul>
          
          <h3>Tips para un blog exitoso:</h3>
          <p>Mantén la consistencia, escribe sobre temas que dominas y siempre piensa en el valor que aportas a tus lectores.</p>
        `,
    image:
      "https://drive.google.com/file/d/1VIQ0yk-juxMhCBetwFkwLcfCQCol20Bn/view?usp=drive_link",
    author: "Angie Galván R",
    publishDate: "2024-01-05",
    readTime: "3 min",
    tags: ["Blog", "SEO", "Contenido"],
  },
  {
    id: 4,
    title: "Errores comunes al pautar en redes y cómo evitarlos",
    slug: "errores-comunes-al-pautar-en-redes-y-como-evitarlos",
    colorTitle: "#e57373",
    description:
      'Pautar no es darle "promocionar publicación". Aquí te explico cómo hacerlo bien',
    content: `
          <h2>¿Qué es realmente pautar en redes sociales?</h2>
          <p>Pautar va más allá de simplemente "promocionar" una publicación. Es una estrategia integral que requiere planificación, segmentación y análisis.</p>
          
          <h3>Errores más comunes:</h3>
          <ul>
            <li><strong>Falta de segmentación:</strong> Dirigir el mismo mensaje a toda la audiencia</li>
            <li><strong>Sin objetivos claros:</strong> Pautar sin saber qué quieres lograr</li>
            <li><strong>Contenido inadecuado:</strong> Usar contenido que no funciona orgánicamente</li>
            <li><strong>Ignorar métricas:</strong> No analizar el rendimiento de las campañas</li>
          </ul>
          
          <h3>Cómo pautar correctamente:</h3>
          <p>Define objetivos SMART, segmenta tu audiencia, crea contenido específico para cada campaña y analiza constantemente los resultados para optimizar.</p>
        `,
    image:
      "https://drive.google.com/file/d/1ubKsVCTwjtOJ14drdBu5B3E7oyPWKbiU/view?usp=drive_link",
    author: "Angie Galván R",
    publishDate: "2024-01-01",
    readTime: "6 min",
    tags: ["Publicidad", "Redes Sociales", "Marketing Digital"],
  },
];

// Function to get blog by slug
export const getBlogBySlug = (
  slug: string
): BlogPost | undefined => {
  return BlogsSection.find((blog) => blog.slug === slug);
};

// Function to get all blog slugs
export const getAllBlogSlugs = (): string[] => {
  return BlogsSection.map((blog) => blog.slug);
};