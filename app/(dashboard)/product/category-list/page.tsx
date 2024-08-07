
import { DataTable } from './_components/data-table'
import { User, columns } from './column'

async function getUsers(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/api/category', {
    cache: 'no-cache'
  })
  const data = await res.json()
  return data;
}
export default async function page (){ 
// export default async function page () {
  const data = await getUsers()
  return (
    <div>
      <h1>Manage Category</h1>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
