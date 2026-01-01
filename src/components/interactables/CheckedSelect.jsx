import { Select, MenuItem, InputLabel, FormControl, OutlinedInput, Checkbox, ListItemText} from "@mui/material";

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
    const {
      target: { value },
    } = event;
    setter(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    items && (<FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={id+"-multiple-checkbox-label"}>{label}</InputLabel>
        <Select
          labelId={id+"-multiple-checkbox-label"}
          id={id+"-multiple-checkbox"}
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={values.includes(item)} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
}
