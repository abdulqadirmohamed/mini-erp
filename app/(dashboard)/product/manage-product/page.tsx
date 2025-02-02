
import { DataTable } from './_components/data-table'
import { TProduct, columns } from './column'

async function getProducts(): Promise<TProduct[]> {
  const res = await fetch('http://localhost:3000/api/product', {
    cache: 'no-cache'
  })
  const data = await res.json()
  return data;
}
export default async function page (){ 
// export default async function page () {
  const data = await getProducts()
  return (
    <div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
