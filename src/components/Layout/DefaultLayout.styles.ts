import { Layout } from 'antd'
import styled from 'styled-components'

const LayoutWrapper = styled(Layout)`
  background-color: transparent;
`
const StyledContent = styled(Layout.Content)`
  height: 100vh;
  overflow: hidden;
`

export { LayoutWrapper, StyledContent }
