import { Container, Row, Col } from 'reactstrap';
import Board from '../components/Board'

export default function Home() {
  return (
    <Container>
      <h1 className="header">Checkers Board</h1>
      <Board/>
    </Container>
  )
}
