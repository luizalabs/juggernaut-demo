import React, { useState, useEffect, useRef } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { FormContainerStyled, FormStyled, FormControlStyled, AvatarStyled, ErrorStyled } from './style'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
  age: Yup.number().required('Required')
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  age: '',
  allowExtraEmails: false
}

function SignUpWithFormik() {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainerStyled>
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values)
          }}
          render={({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
            <FormStyled onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoComplete="fname"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName ? (<ErrorStyled>{errors.firstName}</ErrorStyled>) : null}
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName ? (<ErrorStyled>{errors.lastName}</ErrorStyled>) : null}
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <FormControlStyled variant="outlined" fullWidth>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      Age
                    </InputLabel>
                    <Select
                      native
                      onChange={handleChange('age')}
                      onBlur={handleBlur}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                    {errors.age && touched.age ? (<ErrorStyled>{errors.age}</ErrorStyled>) : null}
                  </FormControlStyled>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (<ErrorStyled>{errors.email}</ErrorStyled>) : null}
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (<ErrorStyled>{errors.password}</ErrorStyled>) : null}
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="allowExtraEmails"
                        value="allowExtraEmails"
                        color="primary"
                        onChange={handleChange}
                      />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="mt-3 mb-2 mx-0"
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                   </Link>
                </Grid>
              </Grid>
            </FormStyled>
          )}
        />
      </FormContainerStyled>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Juggernaut Demo - '}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  )
}

export default SignUpWithFormik
