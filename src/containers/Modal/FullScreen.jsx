import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Container } from './style'

const NAME = 'FULLSCREEN MODAL'

const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
))

const FullScreen = ({ open, openModal, handleClose }) => (
    <Container item xs={12} md={3}>
        <Button variant="outlined" color="primary" onClick={openModal(NAME)}>
            Open full-screen modal
        </Button>
        <Dialog
            fullScreen
            open={open === NAME}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar style={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flex: 1 }}>
                        Sound
                    </Typography>
                    <Button color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                </ListItem>
            </List>
        </Dialog>
    </Container>
)

FullScreen.propTypes = {
    open: PropTypes.string,
    handleClose: PropTypes.func,
    openModal: PropTypes.func
}

export default FullScreen
