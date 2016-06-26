import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import { Modal } from 'react-overlays'

let rand = ()=> (Math.floor(Math.random() * 20) - 10);

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = {
  position: 'absolute',
  width: 600,
  height: 400,
  top: "50%",
  left: "50%",
  transform: 'translate(-50%, -50%)',
  border: '1px solid #e5e5e5',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
  padding: 20
};


class Relationships extends Component {

  constructor(props){
    super(props);

    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }


  render() {

    return (
      <div className="relationships-container">
        <PageTitle main="Relationships"/>
        <p className="lead">
          Relationships are the ability to capture "yes or no"
          relationship status between arbitrary objects.
        </p>
        <p className="lead">
          Much like Objects, Relationships by themselves are not fairly
          interesting.  They deal with cryptic links between unknown
          identifiers, that fails to apply much meaning to our everyday lives.
        </p>
        <div className='modal-example'>
          <button type="button" onClick={this.open}>Open Modal</button>
          <p>Example of using vendor component like `react-overlays`</p>
          <Modal style={modalStyle}
                 backdropStyle={backdropStyle}
                 show={this.state.showModal}
                 onHide={this.close}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={this.close}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc egestas condimentum tellus, sit amet posuere odio
                    bibendum at. Integer eget malesuada magna. Suspendisse vel
                    dignissim tellus. Etiam mollis molestie elit et placerat.
                    Mauris odio elit, tincidunt sed feugiat et, egestas placerat
                    arcu. Phasellus ac nibh libero. Vivamus ut varius sem. Duis
                    hendrerit nulla felis, at consectetur nisi placerat vitae.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.close}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );

  }

}

export default Relationships;
