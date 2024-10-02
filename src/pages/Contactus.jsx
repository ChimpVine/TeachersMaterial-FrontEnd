import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { FaArrowRight, FaEraser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../spinner/Spinner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; 

function Contactus() { 
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo, Republic of the", "Congo, Democratic Republic of the", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast (Côte d'Ivoire)",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
    "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See)", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const btnStyle = {
    backgroundColor: '#FF683B',
    color: 'white',
  };

  const cancelStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
  };

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    country: '',
    profession: '',
    organization: '',
    tools_categories: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha(); 

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, country, profession, organization, tools_categories, description } = formData;
  
    if (!full_name || !country || !profession || !tools_categories || !description) {
      toast.error('Please fill in all required fields.');
      return;
    }
  
    if (!executeRecaptcha) {
      toast.error('Failed to load reCAPTCHA.');
      return;
    }
  
    try {
      // Execute reCAPTCHA
      const token = await executeRecaptcha('submit');
      setRecaptchaToken(token);
  
      // Set default values if email or organization is not provided
      const emailValue = email || 'Not-Provided';
      const organizationValue = organization || 'Not-Provided';
  
      // Prepare JSON payload
      const dataToSend = {
        full_name,
        email: emailValue,  
        country,
        profession,
        organization: organizationValue,  
        tools_categories,
        description,
        recaptchaToken: token  
      };
  
      setIsLoading(true);
  
      const response = await axios.post('https://teachertools-api.chimpvine.com/google_sheet', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setFormData({
        full_name: '',
        email: '',
        country: '',
        profession: '',
        organization: '',
        tools_categories: '',
        description: ''
      });
  
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      <NavBar id="main-nav" />
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          {isLoading ? (
            <div className="col-md-5 text-center">
              <Spinner />
            </div>
          ) : (
            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
              <form onSubmit={handleSubmit}>
                <h4 className="text-center mb-3">Request for Tools</h4>

                {/* Full Name */}
                <div className="mb-2">
                  <label htmlFor="full_name" className="form-label">
                    Full Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. Alex"
                  />
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm mb-2"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. example@mail.com"
                  />
                </div>

                {/* Country */}
                <div className="mb-2">
                  <label htmlFor="country" className="form-label">
                    Country <span style={{ color: 'red' }}>*</span>
                  </label>
                  <select
                    className="form-select form-select-sm mb-2"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">Select your country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Profession */}
                <div className="mb-2">
                  <label htmlFor="profession" className="form-label">
                    Profession <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. Educator"
                  />
                </div>

                {/* Organization */}
                <div className="mb-2">
                  <label htmlFor="organization" className="form-label">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. ABC Organization"
                  />
                </div>

                {/* Tools Categories */}
                <div className="mb-2">
                  <label htmlFor="tools_categories" className="form-label">
                    Tools Category <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    id="tools_categories"
                    name="tools_categories"
                    value={formData.tools_categories}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. Tic Tac Toe"
                  />
                </div>

                {/* Description */}
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Description <span style={{ color: 'red' }}>*</span>
                  </label>
                  <textarea
                    className="form-control form-control-sm mb-2"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Eg. Description about the category"
                  ></textarea>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <button type="submit" className="btn btn-sm" style={btnStyle} disabled={isLoading}>
                    Submit <FaArrowRight />
                  </button>
                  <button type="button" className="btn btn-sm" style={cancelStyle} onClick={() => setFormData({
                    full_name: '',
                    email: '',
                    country: '',
                    profession: '',
                    organization: '',
                    tools_categories: '',
                    description: ''
                  })} disabled={isLoading}>
                    <FaEraser /> Reset
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contactus;
