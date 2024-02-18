import { Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { ActionWrapper, WattchWrapper } from './StopWatch.styles';

const Stopwatch: React.FC = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <Row justify={'center'}>
            <WattchWrapper span={24}>
                <div>{formatTime(elapsedTime)}</div>
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
    );
};

export default Stopwatch;
