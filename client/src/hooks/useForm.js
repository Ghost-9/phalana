import { useState, useEffect } from "react";


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        select: '',
    });


    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
      
      e.preventDefault();
      console.log(values.email);
      submitEmail(values.email);
        setErrors(validate(values));
        setIsSubmitting(true);
      };
  const storeEmailToSpreadsheet = async (email) => {
    const scriptUrl = "https://script.googleapis.com/v1/scripts/AKfycbz99MjD0duq9qS-VkOYfiajLbJs9ynmCPaQYB7Lwd4DneQXE49DG8zkPcMftk3svigD:run";
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        }),
      }).then(response => {
        console.log('Success!', response);
      }).catch(error => console.error('Error!', error.message));
        } catch (error) {
            throw new Error('Error storing email');
        }
  };
  
  const submitEmail = async (email) => { 
    const url = "https://script.google.com/macros/s/AKfycbwFMlVXrfp9S066Od6cY__z1McPcBR-Yvv4xXA3NoIdbV0D9loX_2kiaXrN94aYc01U/exec";
    try {
      await fetch(url, {
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
        //   'Access-Control-Allow-Origin': '*'
        // },
        method: 'POST',
        body: JSON.stringify({
          Email: email
        })
      },).then(response => { 
        console.log('Success!', response);
      }).catch(error => console.error('Error!', error.message));
    } catch (error) {
      
    }
  };
      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
      }, [errors, isSubmitting, callback]);
    
      return { handleChange, handleSubmit, values, errors };
};
    
export default useForm;