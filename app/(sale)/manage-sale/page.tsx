
import { DataTable } from './_components/data-table'
import { User, columns } from './column'

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://653e80049e8bd3be29df63ce.mockapi.io/users', {
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
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
