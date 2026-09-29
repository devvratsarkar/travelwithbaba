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
        return (
          <li
            key={item.label}
            className={mobile ? '' : 'relative'}
            onMouseEnter={() => !mobile && setOpenItem(item.label)}
            onMouseLeave={() => !mobile && setOpenItem(null)}
          >
            <div className="flex items-center">
              <Link
                to={item.to}
                onClick={onNavigate}
                className={`font-sans text-base font-normal transition-colors hover:text-gold ${
                  mobile ? 'block px-2 py-3' : 'px-5 py-8'
                } ${current ? 'text-gold' : 'text-white'}`}
              >
                {item.label}
              </Link>
              {hasChildren && mobile && (
                <button
                  type="button"
                  aria-label={`${item.label} submenu`}
                  className="p-2 text-white"
                  onClick={() => setOpenItem(openItem === item.label ? null : item.label)}
                >
                  <FiChevronDown className="size-4" />
                </button>
              )}
            </div>
            {hasChildren && (mobile ? openItem === item.label : openItem === item.label) && (
              <ul
                className={
                  mobile
                    ? 'mb-2 ml-4 border-l border-white/20 pl-3'
                    : 'absolute left-0 top-full z-20 min-w-52 bg-black/90 py-2 shadow-lg'
                }
              >
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.to}
                      onClick={onNavigate}
                      className="block px-5 py-3 text-sm text-white transition-colors hover:text-gold"
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
