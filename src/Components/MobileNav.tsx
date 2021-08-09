import Box from './Box'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { useState } from 'react'
import styled from '@emotion/styled'

const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 2em;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: rgba( 0, 0, 0, 0.09)
    }
`

export default function MobileNav() {
    const [open, setOpen] = useState('none')
    return (
        <Box display={['block', 'none']} position="relative" width="max-content">
            <NavButton onClick={() => {
                if (open === "none") {
                    setOpen('grid')
                } else {
                    setOpen('none')
                }    
            }}>
                <BiMenu />
            </NavButton>
            <Box
                display={open} 
                position="absolute" 
                top="0" 
                right="100%" 
                textAlign="right"
                background="rgba(0, 0, 0, 0.09)"
                padding={2}
                border='1px solid'
                borderColor="rgba(0, 0, 0, 0.18)"
                marginTop={2}
            >
                <Link 
                    activeClass="active"
                    to="tech" 
                    spy={true}
                    smooth={true}
                    offset={-172}
                    duration={500}
                >
                    Tech
                </Link>
        
                <Link 
                    activeClass="active"
                    to="projects" 
                    spy={true}
                    smooth={true}
                    offset={-172}
                    duration={500}
                >
                    Projects
                </Link>
        
                <Link 
                    activeClass="active"
                    to="contact" 
                    spy={true}
                    smooth={true}
                    offset={-172}
                    duration={500}
                >
                    Contact
                </Link>
            </Box>
        </Box>
    )
}