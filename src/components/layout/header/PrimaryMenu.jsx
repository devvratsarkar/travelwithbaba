import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { navItems } from '../../../data/homeContent'

function isCurrent(to, pathname, hash) {
  if (to === '/') return pathname === '/' && !hash
  const [path, fragment] = to.split('#')
  return pathname === path && hash === `#${fragment}`
}

export default function PrimaryMenu({ mobile = false, onNavigate }) {
  const { pathname, hash } = useLocation()
  const [openItem, setOpenItem] = useState(null)

  return (
    <ul className={mobile ? 'flex flex-col gap-1' : 'flex items-center justify-center'}>
      {navItems.map((item) => {
        const current = isCurrent(item.to, pathname, hash)
        const hasChildren = Boolean(item.children?.length)
        const expanded = openItem === item.label
        return (
          <li
            key={item.label}
            className={mobile ? '' : 'relative'}
            onMouseEnter={() => !mobile && setOpenItem(item.label)}
            onMouseLeave={() => !mobile && setOpenItem(null)}
          >
            <div className={mobile ? 'flex items-center gap-1' : 'flex items-center'}>
              <Link
                to={item.to}
                onClick={onNavigate}
                className={`font-sans transition-colors hover:text-gold ${
                  mobile
                    ? 'block min-w-0 flex-1 rounded-lg px-3 py-3.5 text-[15px] font-medium'
                    : 'px-3 py-6 text-sm xl:px-5 xl:py-8 xl:text-base'
                } ${current ? (mobile ? 'bg-gold/15 text-gold' : 'text-gold') : 'text-white'}`}
              >
                {item.label}
              </Link>
              {hasChildren && mobile && (
                <button
                  type="button"
                  aria-label={`${item.label} submenu`}
                  aria-expanded={expanded}
                  className={`grid size-10 shrink-0 place-items-center rounded-lg transition-colors ${
                    expanded ? 'bg-gold/15 text-gold' : 'text-white'
                  }`}
                  onClick={() => setOpenItem(expanded ? null : item.label)}
                >
                  <FiChevronDown className={`size-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
            {hasChildren && expanded && (
              <ul
                className={
                  mobile
                    ? 'mb-1 ml-3 space-y-0.5 border-l-2 border-gold py-1 pl-2'
                    : 'absolute left-0 top-full z-20 min-w-52 bg-black/90 py-2 shadow-lg'
                }
              >
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.to}
                      onClick={onNavigate}
                      className={`block text-sm transition-colors hover:text-gold ${
                        mobile ? 'rounded-md px-3 py-2.5' : 'px-5 py-3'
                      } ${isCurrent(child.to, pathname, hash) ? 'text-gold' : 'text-white'}`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}
