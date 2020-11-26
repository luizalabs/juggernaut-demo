import React, { useState, useEffect, useRef } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, OutlinedInput, InputLabel, Typography, Container, Select } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Form from 'components/Form'
import Avatar from 'components/Avatar'
import FormContainer from 'components/Form/Container'
import { FormControl, Error } from './style'

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

function SignUpWithFormik () {
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={console.log}
          render={({ handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
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
                  <ErrorMessage component={Error} name="firstName" />
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
                  <ErrorMessage component={Error} name="lastName" />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      Age
                    </InputLabel>
                    <Select
                      native
                      onChange={handleChange}
                      onBlur={handleBlur}
                      input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                    >
                      <option value="" />
                      <option value="10">Ten</option>
                      <option value="20">Twenty</option>
                      <option value="30">Thirty</option>
                    </Select>
                  </FormControl>
                  <ErrorMessage component={Error} name="age" />
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
                  <ErrorMessage component={Error} name="email" />
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
                  <ErrorMessage component={Error} name="password" />
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
            </Form>
          )}
        />
      </FormContainer>
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
