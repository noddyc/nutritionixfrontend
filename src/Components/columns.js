import _ from 'lodash'

export const COLUMNS = [
  {
    Header: 'upc',
    Footer: 'upc',
    accessor: 'upc',
    // disableFilters: true,
    // disableSortBy: true,
    sticky: 'left',
  },
  {
    Header: 'Description',
    Footer: 'Description',
    accessor: 'description',
    sticky: 'left',
    Cell: (row)=>{
      if(row.value){
        if(row.value.length > 20){
          return _.startCase(_.lowerCase(row.value)).substring(0,30)+"..."
        }else{
          return _.startCase(_.lowerCase(row.value))
        }
      }else{
        return "-"
      }
    }
  },
  {
    Header: 'Product Name',
    Footer: 'Product Name',
    accessor: 'name',
    sticky: 'left',
    Cell: (row)=>{
      if(row.value){
        if(row.value.length > 10){
          return _.startCase(_.lowerCase(row.value)).substring(0,30)+"..."
        }else{
          return _.startCase(_.lowerCase(row.value))
        }
      }else{
        return "-"
      }
    }
  },
  {
    Header: 'Good Choice',
    Footer: 'Good Choice',
    accessor: 'goodChoice',
    sticky: 'left',
    Cell:(row)=>{
        if(row.row.original.tag == 16){
          return "-";
        }else{
          return row.value?'True':'False'
        }
    },
  },
]