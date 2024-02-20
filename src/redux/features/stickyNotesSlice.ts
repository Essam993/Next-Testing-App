import { StickyNote, StickyNotesState } from '@/types/stickyNotes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StickyNotesState = {
  notes: [
    { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', priority: 'Low' },
    { id: 2, title: 'Note 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', priority: 'Low' },
    { id: 3, title: 'Note 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', priority: 'High' },
    { id: 4, title: 'Note 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', priority: 'Medium' },
    { id: 5, title: 'Note 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', priority: 'Low' },
    { id: 6, title: 'Note 6', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', priority: 'Low' },
    { id: 7, title: 'Note 7', content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.', priority: 'High' },
    { id: 8, title: 'Note 8', content: 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora.', priority: 'Medium' },
    { id: 9, title: 'Note 9', content: 'Incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', priority: 'Low' },
    { id: 10, title: 'Note 10', content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.', priority: 'Low' }
  ]
}

const stickyNotesSlice = createSlice({
  name: 'stickyNotes',
  initialState,
  reducers: {
    editNote: (state, action: PayloadAction<StickyNote>) => {
      const { id, title, content, priority } = action.payload
      const existingNote = state.notes.find((note: { id: number; }) => note.id === id)
      if (existingNote) {
        existingNote.title = title
        existingNote.content = content
        existingNote.priority = priority
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      const noteId = action.payload
      state.notes = state.notes.filter((note: { id: number; }) => note.id !== noteId)
    }
  }
})

export const { editNote, deleteNote } = stickyNotesSlice.actions

export default stickyNotesSlice.reducer
