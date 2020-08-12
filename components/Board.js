import { Container, Row, Col, Input, InputGroup } from 'reactstrap';

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            N : 6
        }
        this.row = this.row.bind(this);
        this.col_even = this.col_even.bind(this);
        this.col_odd = this.col_odd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let first_r = document.getElementById(1);
        first_r.childNodes.forEach((e) => {
            console.log(e)
        })
        // console.log(first_r.childNodes[1])
    }

    col_even = (e) => {
        let dot = false
        if(e < 2){
            dot = true
        }
        let my_col = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 0){
                my_col.push(<Col className="tiles black"><div className={dot ? "red_piece" : "" }></div></Col>)
            }else{
                my_col.push(<Col className="tiles"><div className={dot ? "red_piece" : "" }></div></Col>)
            }
        }
        return my_col;
    }

    col_odd = (e) => {
        let dot = false
        if(e < 2){
            dot = true
        }
        let my_col = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 1){
                my_col.push(<Col className="tiles black"><div className={dot ? "red_piece" : "" }></div></Col>)
            }else{
                my_col.push(<Col className="tiles"><div className={dot ? "red_piece" : "" }></div></Col>)
            }
           
        }
        return my_col;
    }

    row(){
        let my_row = [];
        for (let index = 0; index < this.state.N; index++) {
            const col_even = this.col_even(index).map((e,i) => {
                return(e)
            })
            const col_odd = this.col_odd(index).map((e,i) => {
                return(e)
            })
            if(index % 2 === 0){
                my_row.push(<Row key={index} id={index}>{col_even}{index}</Row>)
            }
            else{
                my_row.push(<Row key={index} id={index}>{col_odd}{index}</Row>)
            }
        }
        return my_row;
    }

    handleChange = (e) => {
        this.setState({N:e.target.value})
    }


    render(){
        const items = this.row().map((e,i) => {
            return(e)
        })
        return(
            <Container>
                <InputGroup className="input-field" >
                    Change Layout:
                    <Input type='number' value={this.state.N}  onChange={this.handleChange} ></Input>
                </InputGroup>
                <Container className="board">
                    {items}
                </Container>
            </Container>
        )
    }
}