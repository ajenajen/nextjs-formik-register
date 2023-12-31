import Head from "next/head";
import Box from "@mui/material/Box";
import Nav from "./Nav";

export default function MainLayout({ children, bg = "" }) {
  return (
    <main className={`mainLayout`}>
      <div className={`bg ${bg}`}></div>
      <Head>
        <title>Sertis FE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: "100%",
          p: 3,
          mx: "auto",
          position: "relative",
          maxWidth: "1280px",
          minHeight: "100vh",
        }}
      >
        <Nav />
        {children}
      </Box>
    </main>
  );
}
