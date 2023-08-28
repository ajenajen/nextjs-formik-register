import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import MainLayout from "@/components/_layout/main";
import IconButton from "@/components/_common/IconButton";

export default function HomePage() {
  const router = useRouter();

  return (
    <MainLayout>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "calc(100vh - 48px)" }}
      >
        <Grid item xs={12} md={10} lg={8} xl={6}>
          <Box sx={{ textAlign: "center" }} className="fadeInUp">
            <Typography variant="h5">We Have</Typography>
            <Typography variant="h1">A Speacial Deal</Typography>
            <Typography variant="h2">For you</Typography>
          </Box>
          <IconButton
            src="/icon-button.png"
            alt="button next page"
            onClick={() => router.push("/form")}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}
