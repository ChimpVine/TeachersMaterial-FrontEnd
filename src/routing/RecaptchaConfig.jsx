import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Contactus from '../pages/Contactus';

export default function RecaptchaConfig() {

 const RECAPTCHA_SITE_KEY = '6LfwpE8qAAAAAAwErhTxDwBxt9ADpiUr9L8EJaD2'; 
  return (
    <>
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <Contactus/>
    </GoogleReCaptchaProvider>
    </>
  )
}