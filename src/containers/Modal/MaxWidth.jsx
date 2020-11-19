import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import { MaxWidthModalForm } from './style'

function MaxWidth ({ open, handleClose }) {
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('sm')

  const handleMaxWidthChange = event => setMaxWidth(event.target.value)
  const handleFullWidthChange = event => setFullWidth(event.target.checked)

  return (
    <Dialog
      open={open}
      maxWidth={maxWidth}
      onClose={handleClose}
      fullWidth={fullWidth}
    >
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
        <MaxWidthModalForm noValidate>
          <FormControl>
            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            <Select
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}
            >
              <MenuItem value={false}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            label="Full width"
            control={
              <Switch
                checked={fullWidth}
                onChange={handleFullWidthChange}
                value="fullWidth"
              />
            }
          />
        </MaxWidthModalForm>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

MaxWidth.defaultProps = {
  open: false
}

MaxWidth.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
}

export default memo(MaxWidth)
