// StickyNote.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import { editNote, deleteNote } from '@/redux/features/stickyNotesSlice';
import { StickyNoteWrapper } from './stickyNoteApp.styles';
import PriorityDropdown from './PriorityDropdown';

const { TextArea } = Input;

const StickyNote = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedPriority, setEditedPriority] = useState(note.priority);

  const handlePriorityChange = (value: string) => {
    setEditedPriority(value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editNote({ ...note, title: editedTitle, content: editedContent, priority: editedPriority }));
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <StickyNoteWrapper priority={editedPriority}>
      {isEditing ? (
        <>
          <Input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <TextArea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
          <PriorityDropdown value={editedPriority} onChange={handlePriorityChange} />
          <Button type="primary" className='action' onClick={handleSaveClick} style={{ marginTop: '8px' }}>
            Save
          </Button>
        </>
      ) : (
        <>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
          <Button className='DisabledBtn' type="primary" disabled>
            {editedPriority}
          </Button>
          <Button type="default" onClick={handleEditClick}>
            Edit
          </Button>
          <Button className='action' type="primary" onClick={handleDeleteClick}>
            Delete
          </Button>
        </>
      )}
    </StickyNoteWrapper>
  );
};

export default StickyNote;
