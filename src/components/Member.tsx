function Member({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:-translate-y-2 " data-aos="fade-up">
      <img src={image} alt={name} className="size-40 2xl:size-56 rounded-full mb-4 object-cover object-center transition-transform duration-300 group-hover:scale-105"></img>
      <h3 className="text-xl font-semibold text-dark-text dark:text-white">{name}</h3>
      <span className="text-sm text-grey-text dark:text-dark-blog-text">{position}</span>
    </div>
  );
}

export default Member;
