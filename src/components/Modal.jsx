import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import MenuData from './MenuData';


function Example({ isModal, toggleModal, openModal, selectedMeal}) {
  return (
    <div className='modal'>
      <Modal isOpen={isModal} toggle={toggleModal} className='modal-content'>
        <ModalHeader toggle={toggleModal}>{openModal}</ModalHeader>
        <ModalBody>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem veritatis quod sint reprehenderit placeat, vero dignissimos nisi consequuntur dolorem nihil sapiente enim sequi soluta temporibus odio quam saepe delectus officia. Iste quam laboriosam deserunt est perspiciatis dolorum unde totam, facilis</p>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
