import { Select } from "@mui/material"

export default function SelectWithDelete(value, setter, label, id, items) {

    console.log(items)

    const handleChange = (event) => {
        setter(event.target.value)
    }

    return (
        items && <Select 
            labelId={id+"-label"}
            id={id}
            value={value}
            label={label}
            onChange={handleChange}
        >
            {items.map((element) => {<MenuItem value={element.name}>{element.name}</MenuItem>})}
            
        </Select>
    )
}
