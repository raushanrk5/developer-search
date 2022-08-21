import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
        <>
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                <u> SignUp Page </u>
            </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-px">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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

        <FormAction handleSubmit={handleSubmit} text="Signup" />    
        <div className="text-sm text-center">
            Already have an account? 
            <a href={'/login'} className="font-medium text-purple-600 hover:text-purple-500"> <u> Log in </u> </a>
        </div> 
      </form>
      </>
    )
}