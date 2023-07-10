import { FooterContent } from '@/app/content'
import { FC } from 'react'

export const Footer: FC = () => {
    const {signature, year} = FooterContent
  return (
    <footer className="w-full h-full flex justify-center items-center">
      <p>{signature} <span>{year}</span></p>
    </footer>
  )
}
