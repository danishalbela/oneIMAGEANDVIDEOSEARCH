import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import { columnsDef } from './columns'
import tabledata from './table.json'

function TanOne() {

    let [ filteringData, setFilteringData] = useState('')

 const tableInstance =  useReactTable({
    columns:columnsDef,
    data:tabledata,
    getCoreRowModel:getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),

    state:{
        // for fultering Data
        globalFilter:filteringData
    },
     onGlobalFilterChange:setFilteringData
 })

// console.log(tableInstance.getHeaderGroups());
console.log(tableInstance.getCoreRowModel().rows);
  return (
    <div>

       <input
        type='text'
        className='from-control'
        value={filteringData}
        onChange={(e)=>setFilteringData(e.target.value)}
       />

      <table className="table">
        <thead>
           {
            tableInstance.getHeaderGroups().map(ele1=>{
                return (
                    <tr key={ele1.id}>
                      {
                        ele1.headers.map(ele2=>{
                        return (
                            <th key={ele2.id} colSpan={ele2.colSpan}>
                                {
                                   flexRender(
                                    ele2.column.columnDef.header,
                                    ele2.getContext()
                                   )
                                }
                            </th>
                        )
                      })
                      }
                    </tr>
                )
            })
           }
        </thead>

        <tbody>
            {
                tableInstance.getRowModel().rows.map(ele1=>{
                    return <tr key={ele1.id}>
                        {
                            ele1.getVisibleCells().map(ele2=>{
                                return <td key={ele2.id}>
                                    {
                                        flexRender(
                                            ele2.column.columnDef.cell,
                                            ele2.getContext()
                                        )
                                    }
                                </td>
                                
                            })
                        }
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default TanOne