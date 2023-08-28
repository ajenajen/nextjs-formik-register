import { useState } from "react";
import { useFormik } from "formik";
import { Grid, Typography } from "@mui/material";
import MainLayout from "@/components/_layout/main";
import ThankyouPage from "@/components/_pages/ThankyouPage";
import Form from "./Form";
import { initialValues, validationSchema } from "./_schema";

export default function FormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const onSubmit = (values) => {
    values && setIsPreview(true);
    formik.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit,
  });

  if (isSubmitted)
    return (
      <ThankyouPage
        name={formik.values?.firstname}
        email={formik.values.email}
      />
    );

  return (
    <MainLayout bg={"bg2"}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "calc(100vh - 48px)" }}
        className="fadeInUp"
      >
        <Grid
          item
          xs={11}
          md={10}
          lg={6}
          xl={5}
          sx={{ textAlign: "left", mt: { xs: "auto", md: 0 }, mb: 4 }}
        >
          <Typography variant="h4" width={["100%", "100%", "80%"]}>
            Enter Your Information To
          </Typography>
          <Typography variant="h3">Get A Special Deal</Typography>
        </Grid>
        <Grid
          item
          xs={11}
          md={10}
          lg={6}
          xl={5}
          sx={{ mb: { xs: "auto", md: 0 } }}
        >
          <Form
            formik={formik}
            submitRequest={() => setIsSubmitted(true)}
            isPreview={isPreview}
            setIsPreview={setIsPreview}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}
