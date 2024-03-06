"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// @ts-ignore
const Navlink = ({link}) => {

    const pathName = usePathname()
  return (
    <div>
      <Link className={`rounded-md px-1 py-1 ${pathName === link.url && "bg-neutral-300 text-black"}`} href={link.url}>{link.title}</Link>
    </div>
  )
}

export default Navlink
