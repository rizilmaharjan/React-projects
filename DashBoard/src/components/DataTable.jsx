import { DataGrid} from '@mui/x-data-grid';
import { userRows, column } from '../data/Data';



const DataTable = () => {
  const actionColumn = [{field: "action", headerName:"Action", width: 200, renderCell:()=>{
    return(
      <div className='flex items-center gap-5'>
        <div className='border-2 py-0.5 px-2 rounded-md text-purple-700 cursor-pointer'>
          View
          </div>
        <div className='border-2 py-0.5 px-2 rounded-md text-red-500 cursor-pointer'>Delete</div>
      </div>
    )
  }}]
  return (
    <>
      <DataGrid

        rows={userRows}
        columns={column.concat(actionColumn)}
        checkboxSelection
      />
    </>
  )
}

export default DataTable
