import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';

class InitiativeModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            title: '',
            body: ''
        }
    }

    //Modal window methods
    setOpen = () => { this.setState({ open: !this.state.open }) };

    addInitiative = async () => {
        const product = {
            userId: this.props.userId,
            title: this.state.title,
            body: this.state.body
        }

        this.props.addInitiative(product)
        
        this.setOpen()
    }


    onChangeValue1 = event => {
        this.setState({ title: event.target.value })
    }

    onChangeValue2 = event => {
        this.setState({ body: event.target.value })
    }


    render() {

        return (
            <Modal show={this.state.open} onHide={this.setOpen} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Your initiative</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Title
          <InputGroup size="lg">
                        <FormControl required aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeValue1} value={this.state.title} />
                    </InputGroup>

                    Body
          <InputGroup size="lg">
                        <FormControl required aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeValue2} value={this.state.body} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button' variant="primary" onClick={this.addInitiative} type="submit" value='addItem'>Post</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default InitiativeModal