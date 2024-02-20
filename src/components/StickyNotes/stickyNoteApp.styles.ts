// stickyNoteApp.styles.ts
import styled from 'styled-components'

const StickyNoteWrapper = styled.div<{ priority: string }>`
  display: block;
  width: 95%;
  padding: 20px;
  margin-bottom: 10px;
  background: ${(props) => getBackgroundColor(props.priority)};
  border-radius: 8px;
  border: 1px solid #1677ff3b;

  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .ant-input {
    height: 50px;
    margin-bottom: 5px;
  }

  button {
    margin-right: 8px;
  }

  .DisabledBtn{
    border: none;
    color: black;
  }

  .action{
    background: black;
  }
`

const getBackgroundColor = (priority: string): string => {
  switch (priority) {
    case 'Low':
      return '#7fff7f4a' // Green color for Low priority
    case 'Medium':
      return '#ffd70045' // Yellow color for Medium priority
    case 'High':
      return '#ff63474f' // Red color for High priority
    default:
      return '#d3d3d336' // Default color if priority is unknown
  }
}

export { StickyNoteWrapper, getBackgroundColor }
