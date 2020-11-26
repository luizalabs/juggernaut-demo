import React from 'react'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Inbox as InboxIcon, Drafts as DraftsIcon } from '@material-ui/icons'
import { Container } from './style'

function SimpleList () {
  return (
    <Container
      container
      alignItems="center"
      justify="space-around"
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem >
      </List>
    </Container>
  )
}

export default SimpleList
