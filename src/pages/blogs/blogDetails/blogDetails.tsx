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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.description}
        keywords={blog.tags.join(', ')}
      />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <a href="/blog" className="hover:text-gray-700 transition-colors">
                ← Volver al blog
              </a>
            </div>
            
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ color: blog.colorTitle }}
            >
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {blog.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>Por {blog.author}</span>
              <span>•</span>
              <span>{formatDate(blog.publishDate)}</span>
              <span>•</span>
              <span>{blog.readTime} de lectura</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{ textAlign: 'left' }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AG
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                <p className="text-gray-600 text-sm">
                  Especialista en Marketing Digital y Community Management
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <a 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← Ver más artículos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};