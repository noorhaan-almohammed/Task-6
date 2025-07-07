import { type ReactNode } from "react"

function SectionCountainer({title, children} : {title:string , children:ReactNode}) {
  return (
    <section className="mt-8">
      <h2 className="py-8 text-2xl font-semibold text-[#1A1A1A] dark:text-white">
        {title}
      </h2>
      {children}
      </section>
  )
}

export default SectionCountainer
