import { useCallback, useState } from "react";
import { FormGroup, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputText from "@/components/_common/InputText";
import Select from "@/components/_common/Select";
import IconButton from "@/components/_common/IconButton";

export default function Form({
  formik,
  submitRequest,
  isPreview,
  setIsPreview,
}) {
  const { values, errors, setFieldValue, handleSubmit } = formik;

  const handleValueChange = useCallback(
    (event) => {
      const { value, name } = event?.target || {};
      setFieldValue(name, value);
    },
    [setFieldValue]
  );

  return (
    <FormGroup sx={{ background: "#fff", borderRadius: 4, p: 4 }}>
      <Grid container justifyContent="space-between" position="relative" mb={2}>
        <Typography variant="title">Profile</Typography>
        {isPreview && (
          <IconButton
            src="/icon-edit.svg"
            alt="edit form"
            width={30}
            height={30}
            onClick={() => setIsPreview(false)}
            sx={{ position: "absolute", right: 0, top: "-8px", m: 0 }}
          />
        )}
      </Grid>
      <InputText
        label="First name"
        placeholder="Enter first name"
        name="firstname"
        value={values.firstname}
        helperText={errors?.firstname}
        onChange={handleValueChange}
        isPreview={isPreview}
      />
      <InputText
        label="Last name"
        placeholder="Enter last name"
        name="lastname"
        value={values.lastname}
        helperText={errors?.lastname}
        onChange={handleValueChange}
        isPreview={isPreview}
      />
      <InputText
        label="Email"
        placeholder="Enter email"
        name="email"
        type="email"
        value={values.email}
        helperText={errors?.email}
        onChange={handleValueChange}
        isPreview={isPreview}
      />
      <Grid container>
        <Grid item xs={4} pr={2}>
          <Select
            label="Country code"
            name="countryCode"
            value={values.countryCode}
            helperText={errors?.countryCode}
            handleChange={(e) => setFieldValue("countryCode", e.target?.value)}
            options={values?.countrys}
            isPreview={isPreview}
          />
        </Grid>
        <Grid item xs={8}>
          <InputText
            label="Phone number"
            placeholder="Enter phone number"
            name="phone"
            value={values.phone}
            helperText={errors?.phone}
            onChange={handleValueChange}
            isPreview={isPreview}
          />
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        disabled={
          !values?.firstname ||
          !values.lastname ||
          !values.email ||
          !values.phone
        }
        onClick={isPreview ? submitRequest : handleSubmit}
        sx={{ width: "25%", ml: "auto" }}
      >
        {isPreview ? "Confirm" : "Next"}
      </Button>
    </FormGroup>
  );
}
