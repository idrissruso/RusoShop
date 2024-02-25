import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    storeId: string
  }
}) {
  const { userId } = auth()
  if (!userId) redirect('/sign-in')

  const store = prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  })

  if (!store) redirect('/')

  return (
    <div>
      <h1>this will be the navbar</h1>
      {children}
    </div>
  )
}
