import { Link } from 'react-router-dom'
import { posts } from '../../data/homeContent'

export default function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-28 bg-white px-2.5">
      <div className="mx-auto flex w-full max-w-285 flex-col gap-5 py-2.5">
        <h2 className="text-center font-sans text-[32px] leading-8 font-medium text-ink">Blogs</h2>
        <ul className="grid gap-x-7.5 gap-y-9 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title} className="overflow-hidden">
              <article className="flex flex-col">
                <Link to="/#blog" className="relative mb-5 block overflow-hidden pb-66" tabIndex={-1}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute top-[calc(50%+1px)] left-[calc(50%+1px)] h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 scale-[1.01] transition-[filter] duration-300"
                  />
                </Link>
                <h3 className="font-sans text-ink">
                  <Link to="/#blog" className="text-read">
                    {post.title}
                  </Link>
                </h3>
                <p className="my-3 text-[12px] leading-[1.3] font-normal text-date">{post.date}</p>
                <p className="mb-2.5 text-base font-normal text-ink">{post.excerpt}</p>
                <Link to="/#blog" className="self-start text-sm text-read">
                  Read More »
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full max-w-285 mt-10 pb-10 text-center">
        <Link
          to="/#blog"
          className="inline-block rounded-xs bg-gold px-6 py-3 font-sans text-sm font-normal tracking-normal text-black"
        >
          Discover More Blogs
        </Link>
      </div>
    </section>
  )
}
