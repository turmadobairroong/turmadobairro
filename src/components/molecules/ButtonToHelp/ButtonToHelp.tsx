import { ButtonToHelpProps } from '@/@types'
import Link from 'next/link'
import React from 'react'

export const ButtonToHelp = ({ path, content }: ButtonToHelpProps) => {
  return (
    <>
      <Link
        href={path}
        className="rounded-2xl bg-secondary px-8 py-3 text-2xl text-black-100 md-5:text-xl md-7:text-base"
      >
        {content}
      </Link>
    </>
  )
}
