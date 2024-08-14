'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { buttonVariants } from './ui/button'

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-5 w-5 text-zinc-700'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
              <>
                <li>
                  <Link
                        onClick={() =>
                        closeOnCurrent('/docs')
                        }
                        href='/docs'
                    className={buttonVariants({
                        variant: "ghost",
                        size: "sm"
                    })}>
                    Documentation
                </Link>
                </li>
                <li className='my-3 h-px w-full bg-gray-300' />
                <li>
                    <Link
                        onClick={() =>
                        toggleOpen()
                        }
                        href='https://t.me/+bn_7kVHdDSNmY2Q0'
                        target='_blank'
                    className={buttonVariants({
                        variant: "ghost",
                        size: "sm"
                    })}>
                    Community
                    </Link>
                </li>
                <li className='my-3 h-px w-full bg-gray-300' />
                <li>
                    <Link
                        onClick={() =>
                        toggleOpen()
                        }
                        href='https://t.me/emeka_test_bot/emeka_test'
                        target='_blank'
                        className={buttonVariants({
                            size: "sm",
                            variant: "ghost"
                        })}>
                        Get Started
                    </Link>
                </li>
              </>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav