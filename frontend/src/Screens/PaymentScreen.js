import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckOutSteps from '../components/CheckOutSteps';
import { savePaymentMethod } from '../actions/cartActions';
const PaymentScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('./placeorder');
  };
  return (
    <FormContainer>
      <CheckOutSteps step1 step2 step3 />
      <h1>支付方式</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">选择方式</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or CreditCard"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={e => {
                setPaymentMethod(e.target.value);
              }}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={e => {
                setPaymentMethod(e.target.value);
              }}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          继续
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
