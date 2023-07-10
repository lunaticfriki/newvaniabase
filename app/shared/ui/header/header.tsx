import { HeaderContent } from '@/app/content'
import { FC } from 'react'

export const Header: FC = () => {
  const {title} = HeaderContent
  
  return (
    <header className="w-full py-2 flex items-center justify-center">
      <h1 className="text-4xl">{title}</h1>
    </header>
  )
}
