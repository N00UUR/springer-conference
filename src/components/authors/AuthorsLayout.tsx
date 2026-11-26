import type { ReactNode } from 'react'
import ProgramHeader from '../program/ProgramHeader'
import './AuthorsLayout.css'

export default function AuthorsLayout({ title, description, children }: Readonly<{ title: string; description: string; children: ReactNode }>) {
  return <main className="authors-page" lang="en" dir="ltr"><ProgramHeader activeGroup="Authors" title={title} description={description} />{children}</main>
}
