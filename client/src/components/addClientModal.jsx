import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

function AddClientModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
        const { clients } = cache.readQuery({ query: GET_CLIENTS });
        cache.writeQuery({
            query: GET_CLIENTS,
            data: { clients: [...clients, addClient] },
        });
    }
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || phone === '') {
        return alert('Please fill in all fields');
    }
    addClient(name, email, phone);
    handleClose();
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <FaUser className='icon' />
        Add Client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddClientModal;
