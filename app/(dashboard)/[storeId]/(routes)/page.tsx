import prismadb from '@/lib/prismadb'

export default async function DashBoard({
  params,
}: {
  params: {
    storeId: string
  }
}) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  })

  return <div>The Active Store is {`${store?.name}`}</div>
}
