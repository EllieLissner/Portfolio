import styled from '@emotion/styled'
import { color, space, typography, layout, flexbox, grid, background, border, position, shadow, compose } from 'styled-system'

const Box = styled('div')(
    compose(color, space, typography, layout, flexbox, grid, background, border, position, shadow)
)
  


export default Box