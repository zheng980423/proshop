import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckOutSteps from '../components/CheckOutSteps';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckOutSteps step1 step2 />
      <h1>邮寄</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>地址</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入地址"
            value={address}
            required
            onChange={e => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>城市</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入城市"
            value={city}
            required
            onChange={e => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>邮寄编码</Form.Label>
          <Form.Control
            type="text"
            placeholder="输入邮寄编码"
            value={postalCode}
            required
            onChange={e => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>选择国家</Form.Label>
          <Form.Control
            type="text"
            placeholder="请输入国家"
            value={country}
            required
            onChange={e => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          继续
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
