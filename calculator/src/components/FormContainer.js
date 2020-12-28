import React, { useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';


const Container = styled.div`
    display: flex;
    justify-container: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    max-width: 900px;
    margin: auto;

    h1 {
        font-size: 35px;
        font-weight: 500;
        color: #2a6279;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    h3{
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin-top: 3rem;
        background: #ffff;
        padding: 3rem;
        color: #2a6279;
        box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 
        0 6px 6px -1px rgba(8, 11, 14, 0.1);
        border-radius: 1rem;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 1rem;

    }
`;

const InputSection = styled.div`
    width: 45%;
    min-width: 350px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    label{
        text-transformation: uppercase;
        font-weight: 400;
        color: grey;
        margin-bottom: 0.5rem;
    }

    input{
        background: rgba(255, 255, 255, 0.3);
        height: 35px;
        border: none;
        border-radius: 10px;
        padding: 0 1px;
        color: #2a6279;
        font-weight: 400;
        box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 
        0 6px 6px -1px rgba(8, 11, 14, 0.1);
        transition: all 1.3s ease-in-out;
        &:hover,
        &:focus {
            box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 
        0 16px 16px -1px rgba(8, 11, 14, 0.1);
        }
    }

`;

const SubmitButton = styled.button`
    background-color: #d8a051;
    color: #ffff;
    border: none;
    width: 150px;
    height: 36px;
    font-size: 14px;
    letter-spacing: 0.03rem;
    line-height: 36px;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 1rem;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 
        0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 1.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 
    0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
`;

const Error = styled.h4`
    color:red;
    font-size: 13px;
    margin-bottom: 1rem;
`;

const FormContainer = () => {

    const [purchaePrice, setpurchaePrice] = useState("");
    const [downPayment, setdownPayment] = useState("");
    const [loanTerm, setloanTerm] = useState("");
    const [loanApr, setloanApr] = useState("");
    const [monthlyPayments, setmonthlyPayments] = useState(0.0);

    const submitCalculation = async (e) => {
        e.preventDefault();
            
        const validatePrice = await validateField(purchaePrice, setpurchaePrice);
        const validatePayment = await validateField(downPayment, setdownPayment);
        const validateLoanTerm = await validateField(loanTerm, setloanTerm);
        const validateApr = await validateField(loanApr, setloanApr);

        if (validateApr && validatePrice && validatePayment && validateLoanTerm) {
            console.log("Form is fully validated");
            calculateValues();
        }
    }

    const calculateValues = () => {
        let principal = purchaePrice - downPayment;
        let monthlyInterest = loanApr / 100 / 12;
        let numberOfPayments = loanTerm * 12;
        let monthlyPrice = (principal * [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments] / [(1 + monthlyInterest) ** numberOfPayments - 1]);
        setmonthlyPayments(monthlyPrice);
        console.log({principal});
    };

    const validateField = (field, setValue) => {
        let int = parseFloat(field);
        if (field === "" || field === 0) {
            setValue({ ...field.values, error: "please enter a value"});
            return false;
        } else if (isNaN(int)) {
            setValue({ ...field.values, error: "please enter a number"});
            return false;
        } else {
            setValue(int);
            return true;
        }
    };

    

    return (

        <Container>
            <h1>Mortgage Calculator</h1>             
            <form>          
                <InputSection>
                    <label>Purchase Price</label>
                    <Error>{purchaePrice.error}</Error>
                    <input onChange={(e) => setpurchaePrice(e.target.value)} type="text" />                    
                </InputSection>                    
                <InputSection>
                    <label>Down Payment</label>
                    <Error>{downPayment.error}</Error>
                    <input onChange={(e) => setdownPayment(e.target.value)} type="text" />
                </InputSection>
                <InputSection>
                    <label>Loan Term (Years)</label>
                    <Error>{loanTerm.error}</Error>
                    <input onChange={(e) => setloanTerm(e.target.value)} type="text" />
                </InputSection>
                <InputSection>
                    <label>APR (%)</label>
                    <Error>{loanApr.error}</Error>
                    <input onChange={(e) => setloanApr(e.target.value)} type="text" />
                </InputSection>
                <SubmitButton onClick = {(e) => submitCalculation(e)}>
                    <label>Calculate</label>
                </SubmitButton>
            </form>
            <h3>Estimated Monthly Payments: {numeral(monthlyPayments).format("$0.00")}</h3>
        </Container>
    )
}


export default FormContainer
