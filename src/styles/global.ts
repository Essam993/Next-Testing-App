import { Tabs } from 'antd'
import styled from 'styled-components'

export const StyledClock = styled.p`
    position: absolute;
    right: 35px;
    top: 20px;
    font-weight: bold;
    font-size: 25px;
    span{
        color: orange
    }
`
export const Styledtabs = styled(Tabs)`
    padding: 10px;
    height: 100vh;
    overflow: hidden;
    .ant-tabs-nav{
        width: 15%;
    }

    .ant-tabs-tab-active{
        background: #add8e67d;
        width: 95%;
        border-radius: 10px;
        .ant-tabs-tab-btn{
            color: black !important;
            font-weight: bold;
        }
    }
    .ant-tabs-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        #rc-tabs-1-panel-1,
        #rc-tabs-1-panel-2{
            width: 100%;
        }
    }
`
