import { useParams, Navigate } from 'react-router';
import { getBlogBySlug } from '@constants/blogs/blogs';
import { SEO } from '@components/atoms';

export const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.description}
        keywords={blog.tags.join(', ')}
      />
      <div className="min-h-screen bg-(--color-fondo) flex flex-col items-center justify-center" style={{ padding: "20px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">            
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ color: '#355C7D', marginBottom: "10px" }}
            >
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600" style={{ marginBottom: "20px" }}>
              {blog.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500" style={{ marginBottom: "10px" }}>
              <span>Por {blog.author}</span>
              <span>•</span>
              <span>{blog.publishDate}</span>
              <span>•</span>
              <span>{blog.readTime} de lectura</span>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ marginBottom: "10px", borderRadius: "20px" }}>
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{ textAlign: 'left', padding: "10px" }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200" style={{ marginTop: "10px",paddingTop: "10px", borderTop: "1px solid #355C7D" }}>
            <h3 className="text-lg font-semibold" style={{ marginBottom: "10px" }}>Categorías</h3>
            <div className="flex flex-wrap justify-center gap-2" style={{ marginBottom: "10px" }}>
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold rounded-full"
                  style={{ 
                    backgroundColor: '#355C7D' + "20",
                    color: '#355C7D',
                    padding: '3px 10px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="flex justify-center items-center" style={{ marginTop: "20px" }}>
            <div className="flex w-[400px] shadow-sm overflow-hidden" style={{ borderRadius: "20px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}>
              <img src="/assets/img/firma-correo-angie.jpg" alt="Angie Galván R" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};