'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'phosphor-react'
import { routes } from '../../routes/routes'

const ComponentUI = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="my-5 flex items-center justify-between">
          <div className="mx-auto mb-4 px-5 text-center md:max-w-xl md:px-0">
            <h2 className="mb-3 text-body-1 !font-semibold text-black lg:text-heading-5 dark:text-white">
              Design Excellence with Our React Component Library
            </h2>
            <p className="text-body-5 font-normal leading-6 text-metal-600 md:text-body-3 dark:text-metal-300">
              Explore our library of 40+ open-source React UI components and interactive elements, empowering you to
              create stunning web projects effortlessly.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {routes.slice(0, 20).map((item) => {
            const { href, id, Icon } = item
            return (
              <Link
                href={href}
                key={id}
                className="flex items-center gap-2.5 rounded-xl border border-dashed border-metal-200 bg-white px-5 py-2.5 transition-all duration-300 hover:bg-metal-900 hover:text-white md:px-8 md:py-4 dark:bg-metal-900 dark:hover:bg-metal-800">
                {Icon && <Icon size="18" />}
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="mt-9 flex items-center justify-center">
          <Link
            href="/docs/getting-started/installation"
            className="flex items-center gap-2 rounded-lg border border-dashed border-metal-200 bg-white px-6 py-2.5 transition-all duration-300 hover:bg-metal-900 hover:text-white dark:bg-metal-900 dark:hover:bg-metal-800">
            View All Component <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ComponentUI
