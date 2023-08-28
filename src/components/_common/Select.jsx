import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function SelectForm(props) {
  const {
    label,
    value,
    name = "",
    options,
    handleChange,
    isPreview,
    ...restProps
  } = props;

  return (
    <Box sx={{ mb: 3 }}>
      <InputLabel htmlFor={`input-${name || ""}`} sx={{ fontSize: "0.8em" }}>
        {label}
      </InputLabel>
      {!isPreview ? (
        <Select
          id={`input-${name || ""}`}
          variant="standard"
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
          renderValue={(selected) =>
            options?.find(({ value }) => value === selected)?.value
          }
          {...restProps}
        >
          {options?.map((item, index) => (
            <MenuItem
              key={item.label + index}
              value={item.value}
              sx={{ fontSize: "0.75em" }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Typography variant="body" color="#1B1D22" pt={1} display="block">
          {value}
        </Typography>
      )}
    </Box>
  );
}
