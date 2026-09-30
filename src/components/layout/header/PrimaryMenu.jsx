import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { navItems } from '../../../data/homeContent'

function isCurrent(to, pathname, hash) {
  if (to === '/') return pathname === '/' && !hash
  const [path, fragment] = to.split('#')
  if (!fragment) return pathname === path || pathname.startsWith(`${path}/`)
  return pathname === path && hash === `#${fragment}`
}

function groupChildren(children) {
  const groups = []
  for (const child of children) {
    const name = child.group || 'More'
    const existing = groups.find((group) => group.name === name)
    if (existing) existing.items.push(child)
    else groups.push({ name, items: [child] })
  }
  return groups
}

function groupTitle(name) {
  return name.replace(/^Packages by /, '')
}

function menuLabel(label) {
  return label.replace(/ Tours$/, '')
}

function CategoryLink({ child, pathname, hash, mobile, onClick }) {
  const current = isCurrent(child.to, pathname, hash)
  return (
    <Link
      to={child.to}
      onClick={onClick}
      className={
        mobile
          ? `block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-white/10 hover:text-gold ${
              current ? 'bg-gold/15 font-medium text-gold' : 'text-white'
            }`
          : `block rounded-lg px-3 py-2 text-sm leading-5 transition-colors hover:bg-[#e8f2ff] hover:text-primary ${
              current ? 'bg-[#e8f2ff] font-medium text-primary' : 'text-[#1d2939]'
            }`
      }
    >
      {menuLabel(child.label)}
    </Link>
  )
}

export default function PrimaryMenu({ mobile = false, onNavigate }) {
  const { pathname, hash } = useLocation()
  const [openItem, setOpenItem] = useState(null)

  const close = () => {
    onNavigate?.()
    setOpenItem(null)
  }

  return (
    <ul className={mobile ? 'flex flex-col gap-1' : 'flex items-center justify-center'}>
      {navItems.map((item) => {
        const current = isCurrent(item.to, pathname, hash)
        const hasChildren = Boolean(item.children?.length)
        const expanded = openItem === item.label
        const groups = hasChildren ? groupChildren(item.children) : []
        return (
          <li
            key={item.label}
            className={mobile ? '' : 'relative'}
            onMouseEnter={() => !mobile && hasChildren && setOpenItem(item.label)}
            onMouseLeave={() => !mobile && setOpenItem(null)}
          >
            <div className={mobile ? 'flex items-center gap-1' : 'flex items-center'}>
              <Link
                to={item.to}
                onClick={close}
                className={`font-sans transition-colors hover:text-gold ${
                  mobile
                    ? 'block min-w-0 flex-1 rounded-lg px-3 py-3.5 text-[15px] font-medium'
                    : `py-6 text-sm xl:py-8 xl:text-base ${hasChildren ? 'pr-0.5 pl-3 xl:pl-5' : 'px-3 xl:px-5'}`
                } ${current ? (mobile ? 'bg-gold/15 text-gold' : 'text-gold') : 'text-white'}`}
              >
                {item.label}
              </Link>
              {hasChildren && (
                <button
                  type="button"
                  aria-label={`${item.label} submenu`}
                  aria-expanded={expanded}
                  className={`grid shrink-0 place-items-center text-white transition-colors hover:text-gold ${
                    mobile ? 'size-10 rounded-lg' : 'ml-1 mr-2 size-5'
                  } ${expanded ? 'text-gold' : ''}`}
                  onClick={() => setOpenItem(expanded ? null : item.label)}
                >
                  <FiChevronDown className={`size-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
            {hasChildren && expanded &&
              (mobile ? (
                <div className="mb-2 ml-3 space-y-4 border-l-2 border-gold py-2 pl-3">
                  {groups.map((group) => (
                    <section key={group.name}>
                      <h2 className="px-3 pb-1 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                        {groupTitle(group.name)}
                      </h2>
                      <ul>
                        {group.items.map((child) => (
                          <li key={child.label}>
                            <CategoryLink child={child} pathname={pathname} hash={hash} mobile onClick={close} />
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="absolute top-full left-1/2 z-30 w-[min(52rem,calc(100vw-2rem))] -translate-x-1/2 -mt-1 xl:-mt-2">
                  <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_18px_48px_rgba(15,23,42,0.18)] ring-1 ring-black/8">
                    <div className="grid grid-cols-3 gap-1 p-4">
                      {groups.map((group) => (
                        <section key={group.name} className="rounded-xl bg-[#f6f8fb] px-3 py-3">
                          <h2 className="px-3 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                            {groupTitle(group.name)}
                          </h2>
                          <ul className="mt-2">
                            {group.items.map((child) => (
                              <li key={child.label}>
                                <CategoryLink child={child} pathname={pathname} hash={hash} onClick={close} />
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                    <Link
                      to="/packages"
                      onClick={close}
                      className="inline-flex items-center gap-2 border-t border-black/6 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-[#f6f8fb]"
                    >
                      All packages
                      <FiArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
          </li>
        )
      })}
    </ul>
  )
}
