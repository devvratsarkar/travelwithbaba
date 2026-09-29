import { Link } from 'react-router-dom'
import { posts } from '../../data/homeContent'

export default function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-28 bg-white px-4 pt-6 pb-10 sm:px-6">
      <div className="mx-auto max-w-[1140px]">
        <h2 className="mb-8 text-center font-sans text-[32px] leading-[32px] font-medium text-ink">Blogs</h2>
        <ul className="grid gap-x-[30px] gap-y-9 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title}>
              <article>
                <Link to="/#blog" className="block overflow-hidden">
                  <img src={post.image} alt="" className="h-60 w-full object-cover" />
                </Link>
                <h3 className="mt-4 font-sans text-[18px] leading-[21.6px] font-medium text-ink">
                  <Link to="/#blog" className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[12px] leading-[15.6px] font-normal text-date">{post.date}</p>
                <p className="mt-3 text-[16px] leading-[24px] font-normal text-ink">{post.excerpt}</p>
                <Link to="/#blog" className="mt-3 inline-block text-[12px] leading-[18px] font-bold text-read">
                  Read More »
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            to="/#blog"
            className="inline-block bg-gold px-7 py-3 font-sans text-[15px] leading-[13px] font-normal text-black"
          >
            Discover More Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
