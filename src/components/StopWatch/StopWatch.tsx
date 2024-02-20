import { Card, Col, Row, Table } from 'antd'
import React, { useState, useEffect } from 'react'
import { ActionWrapper, WattchWrapper } from './StopWatch.styles'

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [records, setRecords] = useState<{ key: number; startTime: string; endTime: string; period: string }[]>([])
  const [recordKey, setRecordKey] = useState(0)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const startStopwatch = () => {
    setIsRunning(true)
  }

  const stopStopwatch = () => {
    setIsRunning(false)
    setRecords((prevRecords) => [
      ...prevRecords,
      {
        key: recordKey,
        startTime: new Date().toLocaleTimeString(),
        endTime: new Date(Date.now() + elapsedTime * 1000).toLocaleTimeString(),
        period: `${Math.floor(elapsedTime / 60)}:${elapsedTime % 60}`
      }
    ])
    setRecordKey(recordKey + 1)
  }

  const resetStopwatch = () => {
    setIsRunning(false)
    setElapsedTime(0)
    setRecords([])
    setRecordKey(0)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'Starting Time',
      dataIndex: 'startTime',
      key: 'startTime'
    },
    {
      title: 'Ending Time',
      dataIndex: 'endTime',
      key: 'endTime'
    },
    {
      title: 'Period',
      dataIndex: 'period',
      key: 'period'
    }
  ]

  return (
    <>
      <Row justify="center">
        <WattchWrapper span={24}>
          <div>{`${Math.floor(elapsedTime / 60)}:${elapsedTime % 60}`}</div>
        </WattchWrapper>
        <ActionWrapper span={10}>
          <button onClick={startStopwatch} disabled={isRunning}>
            Start
          </button>
          <button onClick={stopStopwatch} disabled={!isRunning}>
            Pause
          </button>
          <button onClick={resetStopwatch}>Stop</button>
        </ActionWrapper>
      </Row>

      <Row>
        <Col span={24}>
          <Card title="Breaks" bordered={false}>
            <Table dataSource={records} columns={columns} pagination={false} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Stopwatch
>
                </Col>
            </Row>
        </>
    );
};

export default Stopwatch;
