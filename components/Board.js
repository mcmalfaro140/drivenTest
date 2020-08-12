import { Container, Row, Col, Input, InputGroup } from 'reactstrap';

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            N : 6
        }
        this.col = this.col.bind(this);
        this.row_even = this.row_even.bind(this);
        this.row_odd = this.row_odd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    row_even(){
        let my_row = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 0){
                my_row.push(<Col className="tiles black"></Col>)
            }else{
                my_row.push(<Col className="tiles"></Col>)
            }
           
        }
        return my_row;
    }

    row_odd(){
        let my_row = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 1){
                my_row.push(<Col className="tiles black"></Col>)
            }else{
                my_row.push(<Col className="tiles"></Col>)
            }
           
        }
        return my_row;
    }

    col(){
        let my_col = [];
        const rows_even = this.row_even().map((e,i) => {
            return(e)
        })
        const rows_odd = this.row_odd().map((e,i) => {
            return(e)
        })
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 0){
                my_col.push(<Row>{rows_even}</Row>)
            }
            else{
                my_col.push(<Row>{rows_odd}</Row>)
            }
        }
        return my_col;
    }

    handleChange = (e) => {
        this.setState({N:e.target.value})
    }


    render(){
        const items = this.col().map((e,i) => {
            return(e)
        })
        return(
            <Container>
                <InputGroup className="input-field" >
                    Change Layout:
                    <Input type='number' value={this.state.N}  onChange={this.handleChange} ></Input>
                </InputGroup>
                <Container>
                    {items}
                </Container>
            </Container>
        )
    }
}