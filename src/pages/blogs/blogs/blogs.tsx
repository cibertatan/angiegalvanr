import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { BlogsSection, BlogPost } from "@constants/blogs";
import { BlogCard } from "@/components";

export const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags from blogs
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BlogsSection.forEach(blog => {
      blog.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter blogs based on search term and selected tag
  const filteredBlogs = useMemo(() => {
    return BlogsSection.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-[calc(100vh-260px)] flex flex-col">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center" style={{ padding: "20px, 10px" }}>
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center" style={{ marginBottom: "20px" }}>
          
        <div style={{ marginTop: "40px", marginBottom: "10px" }}>
            <img
              src="/assets/img/blog.png"
              alt="Blog"
              className="w-50 h-50 mx-auto mb-6 object-contain"
            />
          </div>
          <p className="text-lg text-(--color-texto-header) max-w-2xl mx-auto" style={{ fontSize: "1.5rem" }}>
            Descubre consejos, estrategias y tendencias en marketing digital y gestión de redes sociales
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="flex flex-col items-center justify-center" style={{ marginBottom: "20px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96 bg-white rounded-2xl">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#a97c8a] focus:border-[#355C7D] focus:outline-none text-[#5d5d5d] placeholder-[#a97c8a]"
                style={{ fontFamily: "Playfair Display, serif", padding: "3px 20px", fontSize: "1.2rem" }}
              />
            </div>

            {/* Tag Filter */}
            <div className="relative w-full md:w-64">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#a97c8a] focus:border-[#355C7D] focus:outline-none text-[#5d5d5d] bg-white"
                style={{ fontFamily: "Playfair Display, serif",padding: "3px 20px", fontSize: "1.2rem" }}
              >
                <option value="">Todas las categorías</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto" style={{ marginBottom: "40px" }}>
          {filteredBlogs.length === 0 ? (
            <div className="text-center flex flex-col items-center justify-center min-h-[20vh] w-full h-full">
              <p className="text-xl text-[#5d5d5d]">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ padding: "0 10px" }}>
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onClick={() => handleBlogClick(blog.slug)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col items-center justify-center bg-[#faeded]" style={{ padding: "10px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: "#355C7D" }}>
                {BlogsSection.length}
              </div>
              <div className="text-[#5d5d5d]">Artículos publicados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: "#355C7D" }}>
                {allTags.length}
              </div>
              <div className="text-[#5d5d5d]">Categorías</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: "#355C7D" }}>
                {BlogsSection.reduce((total, blog) => total + parseInt(blog.readTime), 0)} min
              </div>
              <div className="text-[#5d5d5d]">Tiempo total de lectura</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};