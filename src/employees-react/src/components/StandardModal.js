import Modal from 'react-modal';
import moment from "moment";

import '../styles/Modal.css';

Modal.setAppElement('#root');

// Include photo, full name, email, full address, phone number, and date of birth

const StandardModal = ({
  modalIsOpen,
  closeModal,
  currentEmployee
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    className='modal'
  >
    {currentEmployee && (
      <div>
        <img src={currentEmployee.picture.medium} alt="current employee" />
        <p>
          <strong>{`${currentEmployee.name.first} ${currentEmployee.name.last}`}</strong>
        </p>
        <p>
          <small>{moment(currentEmployee.dob.date).format("MMMM Do, YYYY")}</small>
        </p>
        <div className="employee-contact">
          <p>
            <small>{currentEmployee.email}</small>
          </p>
          <p>
            <small>{currentEmployee.phone}</small>
          </p>
        </div>
        <div className="employee-address">
          <small>
            <p>{`${currentEmployee.location.street.number} ${currentEmployee.location.street.name}`}</p>
            <p>{`${currentEmployee.location.city}, ${currentEmployee.location.state} ${currentEmployee.location.country}`}</p>
            <p>{`${currentEmployee.location.postcode}`}</p>
          </small>
        </div>
          <button type="button" onClick={closeModal}>Close</button>
      </div>
    )}
  </Modal>
);

export default StandardModal;