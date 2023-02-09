// import { useState } from "react"
import { useState } from "react";
import Button from "../Button/Button"
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
  
      setErrors({
        ...errors,
        [event.target.name]: '',
      });
    };
  
    const validate = () => {
      let nameError = '';
      let emailError = '';
      let phoneError = '';
      let messageError = '';
  
      if (!formData.name) {
        nameError = 'Name is required';
      }
  
      if (!formData.email) {
        emailError = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        emailError = 'Email is not valid';
      }
  
      if (!formData.message) {
        messageError = 'Message is required';
      }

      if (!formData.phone) {
        phoneError = 'Number phone is required';
      }
  
      if (nameError || emailError || messageError || phoneError) {
        setErrors({ name: nameError, email: emailError, message: messageError , phone: phoneError});
        return false;
      }
  
      return true;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const isValid = validate();
      if (isValid) {
        console.log(formData);
        setFormData({ name: '', email: '', message: '', phone: ''});
      }
    };
  
    return (
        <div id="contact-box">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    id='username'
                />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>

            <div>
            <label>Email</label>
                <br/>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id='email'
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>

            <div>
            <label>Teléfono</label>
                <br/>
                <input
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 987-6543"
                    value={formData.phone}
                    onChange={handleChange}
                    id='tel'
                />
                {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
            </div>

            <div>
                <textarea
                    name="message"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
            </div>

            <Button type='submit' className={'btn-form'} text={'Enviar'} />
        </form>
      </div>
    );
  };
  
  export default ContactForm;

// const ContactForm = (props) => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({
//         name: '',
//         email: '',
//         message: '',
//       });

//       const handleChange = (event) => {
//         setFormData({
//           ...formData,
//           [event.target.name]: event.target.value,
//         });
    
//         setErrors({
//           ...errors,
//           [event.target.name]: '',
//         });
//       };




//     return (
//         <div id="contact-box">
//             <form>
//                 <div className="userForm">
//                     <label for="username">Nombre completo</label>
//                     <br />
//                     <input type="text" id="username" />
//                 </div>

//                 <div className="userForm">
//                     <label for="inputEmail">Email</label>
//                     <br />
//                     <input type="text" id="email" />
//                 </div>

//                 <div id="country">
//                     <label>Teléfono</label>
//                     <br />
//                     <select className="form-select" aria-label="Default select example">
//                         <option selected>US</option>
//                         <option value="1">ESP</option>
//                         <option value="2">UK</option>
//                         <option value="3">FR</option>
//                         <option value="4">JAP</option>
//                         <option value="5">ITA</option>
//                         <option value="6">AND</option>
//                         <option value="7">CAN</option>
//                         <option value="8">ARG</option>
//                         <option value="9">CRI</option>
//                         <option value="10">EGY</option>
//                         <option value="11">GIB</option>
//                         <option value="12">GNQ</option>
//                         <option value="13">ISL</option>
//                         <option value="14">FLK</option>
//                         <option value="15">JAM</option>
//                         <option value="16">NPL</option>
//                         <option value="17">ATF</option>
//                         <option value="18">VUT</option>
//                         <option value="19">TUN</option>
//                         <option value="20">TJK</option>
//                         <label for="tel">Teléfono</label>
//                     </select>
//                     <input type="text" id="tel" name="tel" placeholder="+1 (555) 987-6543" />
//                 </div>

//                 <div id="texti">
//                     <textarea name="textarea" id="textarea"
//                         placeholder="¿En qué podemos ayudarte?"></textarea>
//                 </div>

//                 <div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="check" />
//                         <label className="form-check-label" for="gridCheck">
//                             Acepto la <u> <strong>Política de Privacidad</strong></u> y los
//                             <u><strong>Términos y condiciones</strong></u>.
//                         </label>
//                     </div>
//                 </div>

//                 <Button className={'btn-form'} text={'Enviar'} />


//             </form>
//         </div>
//     )
// }

// export default ContactForm