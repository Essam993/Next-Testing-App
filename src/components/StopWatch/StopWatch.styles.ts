import { Col } from 'antd'
import styled from 'styled-components'

export const WattchWrapper = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 400px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid lightgray;
        box-shadow: 0 2px 14px 0 lightgray;
        border-radius: 10px;
        font-size: 50px;
        font-weight: bold;
    }
`

export const ActionWrapper = styled(Col)`
    margin-top: 20px;
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    button{
        width: 30%;
        padding: 6px;
        border-radius: 10px;
        border: none;
        :first-child{
            background: #0ab30ac7;
            color: white;
        }
        :nth-of-type(3){
            background: #ff0000c4;
            color: white;
        }
    }
`
