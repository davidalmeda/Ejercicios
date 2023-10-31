import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from '../../hooks/useStore'
import { AUTO_LANGUAGE } from '../../constants'
import { ArrowsIcon } from '../Icons'
import { LanguageSelector } from '../LanguageSelector'
import { SectionType } from '../../types.d'
import { TextArea } from '../textArea'
function App () {
  const { fromLanguage, loading, interChangeLanguages, setFromLanguage, setToLanguage, toLanguage, result, fromText, setFromText, setResult } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col xs='auto'>
          <Stack gap={2} >
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}/>
            <TextArea loading={loading }type={SectionType.From} value={fromText} onChange={setFromText}/>
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={ () => { interChangeLanguages() }} >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col xs='auto'>
        <Stack gap={2} >
          <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
          <TextArea loading={loading} type={SectionType.To} value={result} onChange={setResult}/>
          </Stack>
        </Col>
      </Row>

    </ Container>

  )
}

export default App
