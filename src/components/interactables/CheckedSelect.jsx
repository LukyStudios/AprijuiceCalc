import { Select, MenuItem, InputLabel, FormControl, Chip, Box } from "@mui/material";

export default function CheckedSelect({
  values,
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
          multiple
          value={values}
          label={label}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          onChange={handleChange}
        >
          {items.map((element) => {
            return <MenuItem value={element.name}>{element.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    )
  );
}
