// PriorityDropdown.tsx
import React from 'react'
import { Select } from 'antd'

const { Option } = Select

interface PriorityDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const PriorityDropdown: React.FC<PriorityDropdownProps> = ({ value, onChange }) => {
  const priorities = ['Low', 'Medium', 'High']

  return (
    <Select value={value} onChange={onChange} style={{ marginRight: '8px' }}>
      {priorities.map((priority) => (
        <Option key={priority} value={priority}>
          {priority}
        </Option>
      ))}
    </Select>
  )
}

export default PriorityDropdown
