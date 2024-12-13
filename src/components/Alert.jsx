import PropTypes from 'prop-types';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Alerts = (props) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      props.alert && <Alert variant="success" onClose={() => setShow(false)} >
        <Alert.Heading className="h6">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </Alert.Heading>
      </Alert>
    );
  }
};

Alerts.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }).isRequired,
};

export default Alerts;
