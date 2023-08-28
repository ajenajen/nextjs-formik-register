import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import MainLayout from "@/components/_layout/main";
import IconButton from "@/components/_common/IconButton";

export default function ThankyouPage({ name, email }) {
  const router = useRouter();

  return (
    <MainLayout>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "calc(100vh - 48px)" }}
      >
        <Grid item xs={12} md={10} lg={8} xl={6} className="fadeInUp">
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              src="/icon-success.svg"
              alt="button next page"
              onClick={() => router.push("/")}
              sx={{ mb: 3 }}
              width={80}
              height={80}
            />
            <Typography variant="h4">
              Thank You
              <br />
              {name}
            </Typography>
            <Typography variant="body">
              Our special deal has been sent to {email}.<br />
              if you have not received, please contact us.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
