import type { FooterType, NavBarType, projectType, teamType } from "../type/type";

export const categoriesColor = [
  { name: "Design", background: "bg-[#F9F5FF]", text: "text-[#6941C6]" },
  { name: "Leadership", background: "bg-[#F9F5FF]", text: "text-[#6941C6]" },
  { name: "Research", background: "bg-[#EEF4FF]", text: "text-[#3538CD]" },
  { name: "Presentation", background: "bg-[#FDF2FA]", text: "text-[#C11574]" },
  { name: "Interface", background: "bg-[#FDF2FA]", text: "text-[#C11574]" },
  { name: "Tools", background: "bg-[#FDF2FA]", text: "text-[#C11574]" },
  { name: "Management", background: "bg-[#F8F9FC]", text: "text-[#363F72]" },
  { name: "Product", background: "bg-[#F0F9FF]", text: "text-[#026AA2]" },
  { name: "Frameworks", background: "bg-[#FFF6ED]", text: "text-[#C4320A]" },
  {
    name: "Software Development",
    background: "bg-[#ECFDF3]",
    text: "text-[#027A48]",
  },
  { name: "SaaS", background: "bg-[#FFF1F3]", text: "text-[#C01048]" },
];
export const NavBarData: Array<NavBarType> = [
  { label: "Blog", path: "blog/detail/1" },
  { label: "Projects", path: "projects" },
  { label: "About", path: "about" },
  { label: "Newsletter", path: "newsletter" },
];
export const footerData: Array<FooterType> = [
  { link: "noorhan@twitter.com", content: "Twitter" },
  { link: "noorhan@linkedin.com", content: "LinkedIn" },
  { link: "noorhan@example.com", content: "Email" },
  { link: "#", content: "RSS feed" },
  { link: "#", content: "Add to Feedly" },
];
export const projects : Array< projectType > = [
    {
      title: "Insight Blog Engine",
      description:
        "A custom-built blog system with markdown support, real-time editor preview, and category-based filtering.",
      image: "/blogs/Bill.jpg",
      link: "#",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An AI-powered tool that helps users generate blog content with prompts and tone selection.",
      image: "/blogs/breaking.png",
      link: "#",
    },
    {
      title: "Newsletter Analytics",
      description:
        "A dashboard that tracks open rates, click-throughs, and subscriber growth over time.",
      image: "/blogs/Building.jpg",
      link: "#",
    },
    {
      title: "Newsletter Analytics",
      description:
        "A dashboard that tracks open rates, click-throughs, and subscriber growth over time.",
      image: "/blogs/grid-part.png",
      link: "#",
    },
  ];

export const team : Array< teamType > = [
  {image: "/mem.jpg", name:"Sarah Ahmad", position:"Editor UI/UX" },
  {image: "/mem.jpg", name:"Omar Elbaz", position:"Front end Developer" },
  {image: "/mem.jpg", name:"Layla Mansour", position:"Community Manager" },
  {image: "/mem.jpg", name:"Khaled Ahmad", position:"Backend Developer" },
]