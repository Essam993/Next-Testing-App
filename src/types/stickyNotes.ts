export interface StickyNote {
  id: number;
  title: string;
  content: string;
  priority: string;
}

export interface StickyNotesState {
  notes: StickyNote[];
}
