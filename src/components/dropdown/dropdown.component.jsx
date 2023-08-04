
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'
import { DropDownContainer } from './dropdown.style'


const DropDown = () => {

  
const data = [
  {label: 'Laptops', value: "laptop"},
  {label: 'Smartphone', value: "smartphone"},
  {label: 'Women Dresses', value: "womendresses"},
  {label: 'Ex opt 4', value: 4},
]


  return (
    <DropDownContainer>
    <SimpleDropdown
    options={data}
    labels={
      { seachInputPlaceholder : "Search Category" , notSelected : "Category" }
      
      
    }
    clearable
    searchable
    configs={
      { position: { y: 'bottom', x: 'center' }, fullWidthParent : true }
    }
    
  />
  </DropDownContainer>
  
  )
}

export default DropDown