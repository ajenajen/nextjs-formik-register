import Image from "next/image";
import { IconButton as IconButtonMUI } from "@mui/material";

export default function IconButton({
  width = 40,
  height = 40,
  src,
  alt,
  onClick,
  sx,
}) {
  return (
    <IconButtonMUI
      sx={{
        display: "block",
        mx: "auto",
        my: 3,
        img: { transition: "all 0.3s" },
        "&:hover": {
          background: "transparent",
          img: { transform: "scale(1.05)" },
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <Image quality="100" width={width} height={height} src={src} alt={alt} />
    </IconButtonMUI>
  );
}
