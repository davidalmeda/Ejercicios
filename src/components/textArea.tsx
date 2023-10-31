import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control onChange={handleChange} value={value} autoFocus={type === SectionType.From} as ='textarea' placeholder={getPlaceholder({ type, loading })} style={{ height: '150px' }}/>
  )
}
