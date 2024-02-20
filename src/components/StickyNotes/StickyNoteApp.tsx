// components/StickyNoteApp.js
import React from 'react'
import { useSelector } from 'react-redux'
import StickyNote from './StickyNote'
import { RootState } from '@/redux/store'
import { Col, Row } from 'antd'

const StickyNoteApp = () => {
  const notes = useSelector((state: RootState) => state.stickyNotes.notes)

  return (
    <Row>
      {notes.map((note) => (
        <Col span={8}>
          <StickyNote key={note.id} note={note} />
        </Col>
      ))}
    </Row>
  )
}

export default StickyNoteApp
