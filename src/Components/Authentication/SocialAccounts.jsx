import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import {ThirPartyContainer } from '../../styles/Signin'

function SocialAccounts() {
  return (
    <ThirPartyContainer>
            <IconButton><Avatar src="facebook.png" style={{
                border: '1px solid lightgray',
                backgroundColor: "#396fd6",
                padding: 5,
            }}></Avatar>
            </IconButton>
            <IconButton>
                <Avatar src="googleplus.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "#396fd6",
                    padding: 5,
                }}>
                </Avatar>
            </IconButton>
            <IconButton>
                <Avatar src="linkedin.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "#396fd6",
                    padding: 5,
                }}></Avatar>
            </IconButton>
        </ThirPartyContainer>
  )
}

export default SocialAccounts