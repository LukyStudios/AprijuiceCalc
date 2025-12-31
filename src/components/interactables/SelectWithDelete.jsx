import { Button } from "@mui/material";
import EasySelect from "./EasySelect";

export default function SelectWithDelete({
  value,
  setter,
  label,
  id,
  items,
  ...props
}) {
//   console.log(items);
//   console.log(value);

  const resetSelection = (event) => {
    console.log("Resetting Value");
    setter("");
  };

  return (
    items && (
      <>
        <EasySelect
          value={value}
          setter={setter}
          label={label}
          id={id}
          items={items}
          props={props}
        />
        <Button onClick={resetSelection}>X</Button>
      </>
    )
  );
}
