import React, { useState } from 'react'
// import './Home.css'
import { Container, Nav } from 'react-bootstrap'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';
import img from '../../assets/img.jpg'
import picBg from '../../assets/picBg.svg'
import * as FiIcons from 'react-icons/fi'
import * as  AiIcons from 'react-icons/ai'
import * as  GoIcons from 'react-icons/go'

function Home() {

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const [imgUrl, setImgUrl] = useState(null)
  const getImg = (e) => {
    setImgUrl(URL.createObjectURL(e))

  }
  const removeImg = () => {
    setImgUrl(null)
  }
  return (
    <div className="container-fluid px-0">
      <div className="nav-wrap bg-light">
        <Container> <Nav className="nav d-flex justify-content-between align-items-center">
          <h4>Home</h4>
          <h5>Log out</h5>
        </Nav></Container>
      </div>
      <Container>

        <div className="home-wrap">
          <div className="header px-3 d-flex flex-row align-items-center justify-content-between">
            <span className="heading-text">Music List</span>
            <span className="icon-btn" onClick={toggleShow}><GoIcons.GoPlus /></span>
          </div>
          <div className="card-wrap">
            <div className="card d-flex flex-row">
              <div className="w-25 img-wrap">
                <img src={img} alt="" />
              </div>
              <div className="w-75 px-3 d-flex flex-row align-items-center justify-content-between">
                <div className=" d-flex flex-column">
                  <div className="d-flex flex-row mb-3"><span className="name-label">Song Name</span><span className="field-content">: {'Shah ji'}</span>  </div>
                  <div className="d-flex flex-row"><span className="name-label">Singer's Name</span><span className="field-content">: {'Prem Dhillon'}</span>  </div>
                </div>
                <div className="edit-btns-wrap  d-flex  align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <span className="icon-btn mb-3 edit"><FiIcons.FiEdit /></span>
                    <span className="icon-btn delete"><AiIcons.AiOutlineDelete /></span>
                  </div>
                </div>
              </div>
            </div>
            {/* second card */}
            <div className="card d-flex flex-row">
              <div className="w-25 img-wrap">
                <img src={img} alt="" />
              </div>
              <div className="w-75 px-3 d-flex flex-row align-items-center justify-content-between">
                <div className=" d-flex flex-column">
                  <div className="d-flex flex-row mb-3"><span className="name-label">Song Name</span><span className="field-content">: {'Shah ji'}</span>  </div>
                  <div className="d-flex flex-row"><span className="name-label">Singer's Name</span><span className="field-content">: {'Prem Dhillon'}</span>  </div>
                </div>
                <div className="edit-btns-wrap  d-flex  align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <span className="icon-btn mb-3 edit"><FiIcons.FiEdit /></span>
                    <span className="icon-btn delete"><AiIcons.AiOutlineDelete /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* end of second card */}
          </div>
        </div>
      </Container>
      <>


        <MDBModal staticBackdrop tabIndex='-1' show={centredModal} getOpenState={(e) => setCentredModal(e)}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add File</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form>
                  <div className="d-flex flex-column">
                    <div className="mb-3 input-img-wrap w-75 mx-auto">
                      <input onChange={e => e.target.files.length > 0 ? getImg(e.target.files[0]) : ''} className="w-100" type='file' accept=".png,.jpg" />
                      <img src={imgUrl ? imgUrl : picBg} />
                      {imgUrl ? <span onClick={removeImg} className="cross-btn">x</span> : ''}
                    </div>
                    <div>  <MDBInput className="mb-3 w-100" label='Song Name' id='form1' type='text' /></div>
                    <div> <MDBInput className="mb-3 w-100" label='Singer Name' type='text' /></div>
                    <div> <MDBInput className="mb-3 w-100" type='file' accept=".mp3" /></div>

                  </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>

                <MDBBtn>Upload</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    </div>
  )
}

export default Home
