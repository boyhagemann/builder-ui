import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  color: ${ props => props.theme.color.primary.default };
`
