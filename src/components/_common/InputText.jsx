import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function InputText(props) {
  const {
    label,
    value,
    inputProps,
    name = "",
    helperText,
    isPreview,
    ...restProps
  } = props;

  return (
    <Box sx={{ mb: 3 }}>
      <InputLabel htmlFor={`input-${name || ""}`} sx={{ fontSize: "0.8em" }}>
        {label}
      </InputLabel>
      {!isPreview ? (
        <TextField
          id={`input-${name || ""}`}
          fullWidth
          name={name}
          variant="standard"
          value={value ?? ""}
          InputProps={{ "aria-label": name.toLowerCase() }}
          helperText={helperText ?? ""}
          {...restProps}
        />
      ) : (
        <Typography variant="body" color="#1B1D22" pt={1} display="block">
          {value}
        </Typography>
      )}
    </Box>
  );
}
