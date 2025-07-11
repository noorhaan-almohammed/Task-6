function Hero({ title }: { title?: string }) {
  const text = title || "";
  const characters = text.split("");

  return (
    <p
      className="relative text-7xl 2xl:text-[160px] 3xl:text-[243.8px] font-bold text-center text-dark-text dark:text-white leading-[100%] py-2 2xl:py-9 3xl:py-11
        before:content-[''] before:absolute before:top-0 before:left-[-30px] 3xl:before:left-0 before:w-screen before:h-px before:bg-[#00000057] dark:before:bg-white
        after:content-[''] after:absolute after:bottom-0 after:left-[-30px] 3xl:after:left-0 after:w-screen after:h-px after:bg-[#00000057] dark:after:bg-white
        3xl:before:h-[2px] 3xl:after:h-[2px] 3xl:before:w-full 3xl:after:w-full"
    >
      {characters.map((char, index) => (
        <span
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          data-aos-duration="600"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}

export default Hero;
