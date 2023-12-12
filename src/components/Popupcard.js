import "./card.css"
import { useState } from "react";

const Popupcard = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            email: '',
            phoneNumber: '',
            projectDescription: '',
        });
        try {
            const response = await fetch('https://serverfile.appnotrics.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                toast.success('Email sent successfully');
            } else {
                // Handle error, e.g., show an error message
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phoneNumber: '',
        projectDescription: '',
    });

    return (
        <div>

            <div className="khaplu_modal" id="khaplu_modal" bis_skin_checked="1" style={{ display: "block" }}></div><div className="main_khaplu_popup" id="main_khaplu_popup" bis_skin_checked="1" style={{ top: "50%", opacity: "1" }}><div className="khaplu_popup" bis_skin_checked="1"><a href="/"><button className="khaplu_secondary_btn" id="khaplu_close_btn " fdprocessedid="d670xg"><img src="cancel.png" alt="" /></button></a><div className="khaplu_header" bis_skin_checked="1"><h2 className="khaplu_title">Get in touch</h2><p className="khaplu_para">To schedule a consultation, <span>please send us your details.</span></p>
            </div>
                <div className="khaplu_body" bis_skin_checked="1">
                    <form id="contact-form">
                        <div className="khaplu_group">
                            <div className="khaplu_field" id="khaplu_fld1">
                                <input type="text" name="name" placeholder="Enter Your Name*" fdprocessedid="cey873" value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                            </div>
                            <div className="khaplu_field" id="khaplu_fld2">
                                <input type="email" name="email" placeholder="Enter Email Address*" fdprocessedid="bwmf8" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                        </div>
                        <div className="khaplu_field" id="khaplu_fld3">
                            <input type="number" name="phone" placeholder="Enter Phone Number*" fdprocessedid="fanf5" value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                        </div>
                        <div className="khaplu_field" id="khaplu_fld4">
                            <textarea name="message" placeholder="Write a message*" value={formData.projectDescription}
                                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}></textarea>
                        </div>
                        <div className="khaplu_field" id="khaplu_fld5">
                            <input type="submit" className="khaplu_submit" name="submit" fdprocessedid="jm4kmc" value="Submit Now" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Popupcard