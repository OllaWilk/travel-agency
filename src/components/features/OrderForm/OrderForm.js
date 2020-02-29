import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import { parseOptionPrice } from '../../../utils/parseOptionPrice';

const OrderForm = (props) => (

  <Row>
    {pricing.map(option =>
      <Col md={4} key={option.id}>
        <OrderOption {...option}
          currentValue={props.options[option.id]}
        />
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;