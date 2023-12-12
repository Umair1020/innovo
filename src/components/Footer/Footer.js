import { FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    return (
        <>
            <Desktop>
                <div className='row gray '>
                    {/* Left section */}
                    <div className='col-lg-6 d-flex align-items-center' >
                        {/* <img src="/circles.svg"  /> */}
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 201, 62, 1)',
                                borderRadius: '65px',
                                height: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                                // alignItems: 'center',
                                flexDirection: 'column',
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontSize: '20px',
                                width: "500px",
                                margin: "auto"
                            }}
                        >
                            <p className='text-dark fw-bold w-75 mx-4'>Sign Up to Receive Product Updates and More</p>
                            <div
                                style={{
                                    // display: 'flex',
                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                    marginLeft: '30px',
                                    marginTop: '20px',
                                }}
                            >
                                <input
                                    type='email'
                                    placeholder='youremail@gmail.com'
                                    style={{
                                        border: 'none',
                                        borderBottom: '1px solid rgba(52, 67, 103, 1)',
                                        backgroundColor: 'transparent',
                                        padding: '5px',
                                    

                                        color: 'rgba(52, 67, 103, 1)',
                                    }}
                                />

                                <FaChevronRight className='fas fa-chevron-right' style={{ color: 'rgba(52, 67, 103, 1)', cursor: 'pointer' }} />
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6  d-flex align-items-center justify-content-start' >
                        <br />
                        <div className="align-items-start">
                            <br />
                            <h4 >Office</h4>

                            545, St 12, Block F <br />
                            California USA

                        </div>
                        <br />
                        <div className="align-items-center mx-auto ">
                            <br />
                            <h4 >Contact</h4>
                            090078601 <br />
                            abcxyz@gmail.com
                        </div>
                    </div>
                    {/* <div className="row "> */}
                    <div className="col-lg-6 copyright mx-auto d-flex ms-auto justify-content-center">  <br />
                        © All Rights Reserved
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center copyright text-center">
                        <br />
                        <span style={{ marginRight: '10px' }}>Terms & Conditions</span>
                        <span className="mx-5">Privacy</span>
                    </div>

                    {/* </div> */}
                </div>
            </Desktop>
            <Mobile>
                <div className='row gray '>
                    {/* Left section */}
                    <div className='col-lg-6 d-flex align-items-center' >
                        {/* <img src="/circles.svg"  /> */}
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 201, 62, 1)',
                                borderRadius: '65px',
                                height: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontSize: '20px',
                                width: "500px",
                                margin: "auto"
                            }}
                        >
                            <p className='text-dark fw-bold w-75'>Sign Up to Receive Product Updates and More</p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                }}
                            >
                                <input
                                    type='email'
                                    placeholder='youremail@gmail.com'
                                    style={{
                                        border: 'none',
                                        borderBottom: '1px solid rgba(52, 67, 103, 1)',
                                        backgroundColor: 'transparent',
                                        padding: '5px',
                                        // marginRight: '10px',

                                        color: 'rgba(52, 67, 103, 1)',
                                    }}
                                />

                                <FaChevronRight className='fas fa-chevron-right' style={{ color: 'rgba(52, 67, 103, 1)', cursor: 'pointer' }} />
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6 col-lg-12  d-flex align-items-center justify-content-center' >
                        <br />
                        <div className="align-items-center mx-5">
                            <br />
                            <h4 >Office</h4>
                            <br />
                            545, St 12, Block F
                            California USA

                        </div>
                        <br />
                        <div className="align-items-start mx-4">
                            <br />
                            <h4 >Contact</h4>
                            <br />
                            090078601
                            abcxyz@gmail.com
                        </div>
                    </div>
                    {/* <div className="row "> */}
                    <div className="col-lg-6 copyright mx-auto d-flex ms-auto justify-content-center">  <br />
                        © All Rights Reserved
                    </div>
                    <div className="col-lg-6 d-flex copyright text-center">  <br />
                        <p className="mx-auto">   Terms & Conditions  Privacy</p>
                    </div>
                    {/* </div> */}
                </div>
            </Mobile>
        </>
    );
};

export default Footer;
