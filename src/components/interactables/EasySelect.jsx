import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export default function EasySelect({
  value,
  setter,
  label,
  id,
  items,
  ...props
}) {
  //   console.log(label);
  //   console.log(items);
  //   console.log(value);

  const handleChange = (event) => {
    setter(event.target.value);
  };

  return (
    items && (
      <FormControl sx={{ minWidth: 120, width: '25%' }}>
        <InputLabel id={id + "-label"}>{label}</InputLabel>
        <Select
          labelId={id + "-label"}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {items.map((element) => {
            return <MenuItem value={element.name ? element.name : element}>{element.name ? element.name : element}</MenuItem>;
          })}
        </Select>
      </FormControl>
    )
  );
}
