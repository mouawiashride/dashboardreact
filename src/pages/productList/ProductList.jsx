import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../testData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './productList.css'
export default function ProductList() {
    const [data,setData ] = useState(productRows)
    
    const handleDelete =(id) =>{
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'product', width: 130,renderCell: (params)=>{
            return (
               <div className='productListItem'> 
                    <img  className='productListImg' src={ params.row.img } alt="" /> 
                   { params.row.name }
               </div> 
            )
        } },
        { field: 'stock', headerName: 'stock', width: 130 },
        {
          field: 'status',
          headerName: 'status',
          width: 90,
        },
        {
            field: 'price',
            headerName: 'price',
            width: 160,
          },
          {
              field:'actions',
              headerName:'Action',
              width:150,
              renderCell:(params)=>{
                  return(
                      <>
                      <Link to={"/product/"+params.row.id}>
                      <button className='productListEdit'>Edit</button>
                      </Link>
                      <DeleteOutline
                       onClick={()=>handleDelete(params.row.id)}
                       className='productListDelete' />
                      </>)
              }
          }
        
      ];
      
    return (
        <div className='productList'>
             <DataGrid
                disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
