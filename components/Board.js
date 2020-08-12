import { Container, Row, Col, Input, InputGroup, ButtonGroup, Button } from 'reactstrap';

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
        this.changeColor = this.changeColor.bind(this);
        this.changeShape = this.changeShape.bind(this);
    }
    col_even = (e) => {
        let dot = false
        let my_id = ""
        let myclass = "red_piece"

        if(e < 2){
            dot = true
            my_id = "red"
        }else if(this.state.N-3 < e){
            myclass = "black_piece"
            dot = true
            my_id = "black"
        }

        let my_col = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 0){
                my_col.push(<Col className="tiles black">{dot ? (<div id={my_id} className={dot ? myclass : "" }>
                </div>) : (<></>)}</Col>)
            }else{
                my_col.push(<Col className="tiles">{dot ? (<div id={my_id} className={dot ? myclass : "" }>
                </div>) : (<></>)}</Col>)
            }
        }
        return my_col;
    }

    col_odd = (e) => {
        let dot = false
        let myclass = "red_piece"
        let my_id = ""
        if(e < 2){
            dot = true
            my_id = "red"
        }else if(this.state.N-2 < e){
            myclass = "black_piece"
            dot = true
            my_id = "black"
        }
        let my_col = [];
        for (let index = 0; index < this.state.N; index++) {
            if(index % 2 === 1){
                my_col.push(<Col className="tiles black">{dot ? (<div id={my_id} className={dot ? myclass : "" }>
                </div>) : (<></>)}</Col>)
            }else{
                my_col.push(<Col className="tiles">{dot ? (<div id={my_id} className={dot ? myclass : "" }>
                </div>) : (<></>)}</Col>)
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
                my_row.push(<Row key={index} id={index}>{col_even}</Row>)
            }
            else{
                my_row.push(<Row key={index} id={index}>{col_odd}</Row>)
            }
        }
        return my_row;
    }

    handleChange = (e) => {
        this.setState({N:e.target.value})
    }

    changeColor = (i, my_id) => {
        let my_div = document.getElementById(my_id)
        my_div.classList.remove(...my_div.classList)
            switch (i) {
                case 0:
                    my_div.classList.add("red_piece")
                    break;
                case 1:
                    my_div.classList.add("black_piece")
                    break;
                case 2:
                    my_div.classList.add("blue_piece")
                    break;
                default:
                    break;
            }
    }
    changeShape = (i, my_id) => {
        let my_div = document.getElementById(my_id)
        console.log(my_div)
            switch (i) {
                case 0:
                    my_div.style.borderRadius = '60px'
                    break;
                case 1:
                    my_div.style.borderRadius = '0px'
                    break;
                default:
                    break;
            }
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
                    <Container>
                        Change Color:
                        <Row>
                            <Col>Top</Col>
                            <Col><Input type="radio" name="color1" onClick={() => this.changeColor(0, "red")}/>Red</Col>
                            <Col><Input type="radio" name="color2" onClick={() => this.changeColor(1, "red")}/>Black</Col>
                            <Col><Input type="radio" name="color3" onClick={() => this.changeColor(2, "red")}/> Blue</Col>
                        </Row>
                        <Row>
                            <Col>Bottom</Col>
                            <Col><Input type="radio" name="color1" onClick={() => this.changeColor(0, "black")}/>Red</Col>
                            <Col><Input type="radio" name="color2" onClick={() => this.changeColor(1, "black")}/>Black</Col>
                            <Col><Input type="radio" name="color3" onClick={() => this.changeColor(2, "black")}/>Blue</Col>
                        </Row>
                    </Container>
                    <Container>
                        Change Shape:
                        <Row>
                            <Col>Top</Col>
                            <Col><Input type="radio" name="color1" onClick={() => this.changeShape(0, "red")}/>Circle</Col>
                            <Col><Input type="radio" name="color2" onClick={() => this.changeShape(1, "red")}/>Square</Col>
                        </Row>
                        <Row>
                            <Col>Bottom</Col>
                            <Col><Input type="radio" name="color1" onClick={() => this.changeShape(0, "black")}/>Circle</Col>
                            <Col><Input type="radio" name="color2" onClick={() => this.changeShape(1, "black")}/>Square</Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}