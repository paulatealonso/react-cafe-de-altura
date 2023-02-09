import React, { useState } from 'react';
import './PaymentMethod.css'
import bizum from '../assets/bizum.png'

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showDebitForm, setShowDebitForm] = useState(false);

    const handleRadioChange = event => {
        setSelectedMethod(event.target.value);
        if (event.target.value === 'debit') {
            setShowDebitForm(true);
        } else {
            setShowDebitForm(false);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
    });


    const [errors, setErrors] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
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
        let debtError = '';
        let dateError = '';
        let cvcError = '';

        if (!formData.name) {
            nameError = 'Name is required';
        }

        if (formData.name.length < 2) {
            nameError = 'Name is required';
        }

        if (!formData.debt) {
            debtError = 'Tarjet number is required';
        } else if (/\S+@\S+\.\S+/.test(formData.debt)) {
            debtError = 'Tarjet number is not valid';
        } else if (formData.debt.length < 15) {
            debtError = 'Tarjet number is not valid';
        }

        if (!formData.date) {
            dateError = 'Date is required';
        }

        if (!formData.cvc) {
            cvcError = 'CVC is required';
        }

        if (formData.cvc < 3) {
            cvcError = 'CVC is required';
        }

        if (nameError || debtError || cvcError || dateError) {
            setErrors({ name: nameError, debt: debtError, date: dateError, cvc: cvcError, });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();
        if (isValid) {
            console.log(formData);
            setFormData({ name: '', debt: '', date: '', cvc: '' });
        }
    };

    return (
        <div id='conteiner-paid'>
            <h3>Checkout</h3>
            <h5>Seleccionar método de pago</h5>
            <div id='conteiner-debit'>
                <input
                    type="radio"
                    id="debit"
                    name="paymentMethod"
                    value="debit"
                    checked={selectedMethod === "debit"}
                    onChange={handleRadioChange}
                />
                <label className='label-bold'>Tarjeta de débito <br /> <span className='span-separ'>Opción estándar sin seguimiento </span></label>
            </div>
            {showDebitForm && (
                <form onChange={handleSubmit}>
                    <div id='titular-form'>
                        <label>Titular</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder='Nombre del titular'
                            onChange={handleChange}
                            id='titular'
                        />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </div>

                    <div id='target-form'>
                        <label>Número de tarjeta</label>
                        <br />
                        <input
                            type="text"
                            name="debt"
                            placeholder="1234 1234 1234 1234"
                            value={formData.debt}
                            onChange={handleChange}
                            id='debt'
                        />
                        {errors.debt && <div style={{ color: 'red' }}>{errors.debt}</div>}
                    </div>
                    <div id='expiration-cvc'>
                        <div id='expiration-form'>
                            <label>Fecha de caducidad</label>
                            <br />
                            <input
                                type="text"
                                name="date"
                                placeholder="MM / YY"
                                value={formData.date}
                                onChange={handleChange}
                                id='tel'
                            />
                            {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
                        </div>

                        <div id='secret-form'>
                            <label>CVC</label>
                            <br />
                            <input
                                type="text"
                                name="cvc"
                                placeholder="123"
                                value={formData.cvc}
                                onChange={handleChange}
                                id='cvc'
                            />
                            {errors.cvc && <div style={{ color: 'red' }}>{errors.cvc}</div>}
                            <br/>
                        </div>
                    </div>
                </form>
            )}

            <div id='conteiner-transferencia'>
                <input
                    type="radio"
                    id="trans"
                    name="paymentMethod"
                    value="trans"
                    checked={selectedMethod === "trans"}
                    onChange={handleRadioChange}
                />
                <label className='label-bold'>Transferencia bancaria a la cuenta ES12 1234 1234 123457890 <br /><span className='span-separ'> Será necesario recibir el comprobante de la transferencia para preparar tu pedido </span></label>
            </div>
            <div id='conteiner-bizum'>
                <input
                    type="radio"
                    id="bizum"
                    name="paymentMethod"
                    value="bizum"
                    checked={selectedMethod === "bizum"}
                    onChange={handleRadioChange}
                />
                <label className='label-bold'>Bizum</label>
                <img src={bizum} alt='bizum' id='img-bizum'/>
            </div>

        </div>
    );
};
export default PaymentMethod