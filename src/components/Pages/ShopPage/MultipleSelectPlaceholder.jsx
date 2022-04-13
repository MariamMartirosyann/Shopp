import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


const options = [{
  name: "Newest",
  id: 1,
},{
  name: "Name A-Z",
  id: 2,
},{ name: "Name Z-A",
id: 3},
{ name: "Price(low to high)",
id: 4},
{ name: "Price(high to low)",
id: 5},
{ name: "creationDate",
id: 6},
]



const MultipleSelectPlaceholder=({onChange})=> {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    onChange(event)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width:200, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Sort by</em>
          </MenuItem>
          {options.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default MultipleSelectPlaceholder