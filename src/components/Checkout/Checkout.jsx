import { useState } from "react";
import './Checkout.css'

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        poblation: '',
        postal: '',
        street: '',
        num: '',
        piso: '',
        door: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});

        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio';
        }

        if (formData.name.length < 2) {
            newErrors.name = 'El nombre no es válido';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'El apellido es obligatorio';
        }

        if (!formData.phone) {
            newErrors.phone = 'El teléfono es obligatorio';
        }

        if (formData.phone.length < 7) {
            newErrors.phone = 'El teléfono es obligatorio';
        }

        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (!formData.country) {
            newErrors.country = 'El país es obligatorio';
        }
        if (!formData.poblation) {
            newErrors.poblation = 'La ciudad es obligatoria';
        }
        if (!formData.postal) {
            newErrors.postal = 'El código postal es necesario';
        }

        if (formData.postal.length < 4) {
            newErrors.postal = 'El código postal no es válido';
        }
        if (!formData.street) {
            newErrors.street = 'La calle es necesaria';
        }
        if (!formData.num) {
            newErrors.num = 'El número de calle es necesario';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        

    };

    return (
        <div>
        <form onChange={handleSubmit}>
            <div id="formName">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>

            <div id="formLastName">
                <label htmlFor="lastName">Apellidos:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
            </div>

            <div id="formPhone">
                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
            </div>

            <div id="formEmail">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>

            <div id="formCountry">
                <label htmlFor="country">País</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
                {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
            </div>

            <div id="box-city">
                <div id="formPoblation">
                    <label htmlFor="poblation">Población</label>
                    <input
                        type="text"
                        id="poblation"
                        name="poblation"
                        value={formData.poblation}
                        onChange={handleInputChange}
                    />
                    {errors.poblation && <div style={{ color: 'red' }}>{errors.poblation}</div>}
                </div>

                <div id="formPostal">
                    <label htmlFor="postal">Código postal</label>
                    <input
                        type="text"
                        id="postal"
                        name="postal"
                        value={formData.postal}
                        onChange={handleInputChange}
                    />
                    {errors.postal && <div style={{ color: 'red' }}>{errors.postal}</div>}
                </div>

            </div>

            <div id="box-street">

                <div id="formStreet">
                    <label htmlFor="street">Calle</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                    {errors.street && <div style={{ color: 'red' }}>{errors.street}</div>}
                </div>

                <div id="formNum">
                    <label htmlFor="num">Número</label>
                    <input
                        type="text"
                        id="num"
                        name="num"
                        value={formData.num}
                        onChange={handleInputChange}
                    />
                    {errors.num && <div style={{ color: 'red' }}>{errors.num}</div>}
                </div>

                <div id="formPiso">
                    <label htmlFor="piso">Piso</label>
                    <input
                        type="text"
                        id="piso"
                        name="piso"
                        value={formData.piso}
                        onChange={handleInputChange}
                    />
                </div>

                <div id="formDoor">
                    <label htmlFor="door">Puerta</label>
                    <input
                        type="text"
                        id="door"
                        name="door"
                        value={formData.door}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

        </form>

    </div>
    )
}

export default Checkout