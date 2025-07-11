export function SocialIcons() {
  return (
    <div
      className="mb-4 flex justify-center items-center gap-[2rem] text-(--color-principal)"
      style={{ fontSize: '3rem' }}
    >
      <a href="#">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#">
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
  );
}