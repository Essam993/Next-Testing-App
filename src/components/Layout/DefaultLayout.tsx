import { ConfigProvider } from 'antd'
import Head from 'next/head'
import React, { FC } from 'react'
import { LayoutWrapper, StyledContent } from './DefaultLayout.styles'

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
}

const DefaultLayout: FC<LayoutProps> = ({ title, children }) => (
  <LayoutWrapper>
    <ConfigProvider>
      <Head>
        <title>{title || 'Multi Purposes App'}</title>
      </Head>
      <StyledContent>{children}</StyledContent>
    </ConfigProvider>
  </LayoutWrapper>
)

export default DefaultLayout
