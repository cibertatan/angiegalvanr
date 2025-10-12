import { BlogCardProps } from "./types";

export const BlogCard = ({ blog, onClick }: BlogCardProps) => {
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };
  
    return (
      <article 
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
        onClick={onClick}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
  
        {/* Content */}
        <div style={{ padding: '10px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2" style={{ marginBottom: '5px' }}>
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
  
          {/* Title */}
          <h2 
            className="text-xl font-bold mb-3 line-clamp-2 group-hover:underline"
            style={{ color: '#355C7D', marginBottom: '5px' }}
          >
            {blog.title}
          </h2>
  
          {/* Description */}
          <p className="text-[#5d5d5d] text-sm line-clamp-3 text-center" style={{ marginBottom: '5px' }}>
            {blog.description}
          </p>
  
          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-[#a97c8a]">
            <div className="flex items-cente gap-2">
              <span>•</span>
              <span>{formatDate(blog.publishDate)}</span>
              <span>•</span>
              <span>{blog.readTime} lectura</span>
              <span>•</span>
            <div className="font-semibold">
              {blog.author}
            </div>
            </div>
          </div>
        </div>
      </article>
    );
  };