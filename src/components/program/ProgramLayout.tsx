import type { ReactNode } from 'react'
import ProgramHeader from './ProgramHeader'
import '../../pages/program/ProgramPage.css'

export default function ProgramLayout({ title, description, children }: Readonly<{ title: string; description: string; children: ReactNode }>) {
  return <main className="program-page" lang="en" dir="ltr"><ProgramHeader title={title} description={description} />{children}</main>
}
