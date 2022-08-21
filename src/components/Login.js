import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import posts from "../constants/Developers";
import Card from './Card';
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Login API Integration
    const authenticateUser = () =>{

    }

    return(
        <>
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                <u> LogIn Page </u>
            </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        {/* <FormExtra/> */}
        <FormAction handleSubmit={handleSubmit} text="Login"/>
        <div className="text-sm text-center">
            Don’t have an account? 
            <a href={'/signup'} className="font-medium text-purple-600 hover:text-purple-500"> <u>Sign Up</u> </a>
        </div>    
      </form>
      

      </> 
    )
}