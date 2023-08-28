import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@mui/material";

export default function Nav() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/")}
      sx={{ position: "fixed", top: 24, left: 24 }}
    >
      <Image src="/logo.svg" width={80} height={30} alt="logo nav" />
    </Button>
  );
}
