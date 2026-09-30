import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import EnquireForm from '../../components/forms/EnquireForm'
import { getCategory, packageCategories, packageIntro, packages, packagesInCategory } from '../../data/packages'

const defaultTitle = 'Travel with Baba - Passport & Visa Services in Varanasi'

export default function PackagesPage() {
  const { category: categorySlug } = useParams()
  const category = categorySlug ? getCategory(categorySlug) : null
  const list = category ? packagesInCategory(category) : packages
  const heading = category ? category.title : 'Tour Packages'

  useEffect(() => {
    document.title = categorySlug && !category ? 'Tour Packages | Travel with Baba' : `${heading} | Travel with Baba`
    return () => {
      document.title = defaultTitle
    }
  }, [category, categorySlug, heading])

  if (categorySlug && !category) {
    return (
      <section className="band-navy pt-32 pb-20 text-white">
        <div className="custom_container">
          <h1 className="font-sans text-3xl font-medium">Category not found</h1>
          <Link to="/packages" className="mt-6 inline-block text-gold">
            Back to tour packages
          </Link>
        </div>
      </section>
    )
  }

  const groups = [...new Set(packageCategories.map((item) => item.group))]

  return (
    <>
      <section className="band-navy pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <div className="custom_container">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            {category ? (
              <Link to="/packages" className="hover:text-gold">
                Tour Packages
              </Link>
            ) : (
              <span>Tour Packages</span>
            )}
            {category && (
              <>
                <span className="px-2">/</span>
                <span>{category.title}</span>
              </>
            )}
          </p>
          <h1 className="mt-4 font-sans text-3xl font-medium sm:text-5xl">{heading}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">{packageIntro}</p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="custom_container grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <ul className="order-2 space-y-5 lg:order-1">
            {list.map((item) => (
              <li key={item.slug}>
                <article className="grid gap-4 rounded-lg border border-black/10 p-4 sm:grid-cols-[11rem_minmax(0,1fr)_9.5rem] sm:items-center">
                  <Link to={`/packages/${item.slug}`} className="block overflow-hidden rounded-md">
                    <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" />
                  </Link>
                  <div>
                    <h2 className="font-sans text-lg font-semibold leading-snug text-primary">
                      <Link to={`/packages/${item.slug}`} className="hover:underline">
                        {item.title}
                      </Link>
                    </h2>
                    <dl className="mt-2 space-y-1 text-sm leading-6 text-ink">
                      <div>
                        <dt className="inline font-semibold">Duration : </dt>
                        <dd className="inline">{item.duration}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold">Destination Covered : </dt>
                        <dd className="inline">{item.destinations.join(', ')}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold">Tour Activities : </dt>
                        <dd className="inline">{item.activities.join(', ')}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold">Tour Themes : </dt>
                        <dd className="inline">{item.themes.join(', ')}</dd>
                      </div>
                    </dl>
                    <p className="mt-2 text-sm text-muted">{item.meal}</p>
                  </div>
                  <div className="sm:text-center">
                    <p className="text-sm font-medium text-primary">Price</p>
                    <p className="font-semibold text-[#101828]">On Request</p>
                    <Link
                      to={`/packages/${item.slug}#enquire`}
                      className="mt-3 inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white hover:brightness-95"
                    >
                      Book Your Tour
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <aside className="order-1 space-y-6 lg:order-2 lg:sticky lg:top-28">
            <div>
              <Link
                to="/packages"
                className={`block rounded-md border px-3 py-2.5 text-sm ${
                  category
                    ? 'border-black/15 text-ink hover:border-primary hover:text-primary'
                    : 'border-primary bg-primary text-white'
                }`}
              >
                All packages
              </Link>
            </div>
            {groups.map((group) => (
              <div key={group} className="rounded-lg border border-black/10 p-4">
                <h2 className="border-b border-primary/30 pb-2 font-sans text-base font-semibold text-primary">{group}</h2>
                <ul className="mt-3 space-y-2">
                  {packageCategories
                    .filter((item) => item.group === group)
                    .map((item) => {
                      const active = category?.slug === item.slug
                      return (
                        <li key={item.slug}>
                          <Link
                            to={`/packages/category/${item.slug}`}
                            className={`block rounded-md border px-3 py-2 text-sm leading-5 ${
                              active
                                ? 'border-primary bg-primary text-white'
                                : 'border-black/15 text-ink hover:border-primary hover:text-primary'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </div>
            ))}
          </aside>
        </div>
        <div id="enquire" className="custom_container mt-12 scroll-mt-28">
          <EnquireForm subject={category ? category.title : 'Tour packages'} />
        </div>
      </section>
    </>
  )
}
