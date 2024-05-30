import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form = () => {
  const [fullName, setfullName] = useState('')
    const [sonOfName, setsonOfName] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [gender, setgender] = useState('')
    const [currentAddress, setcurrentAddress] = useState('')
    const [Address, setAddress] = useState('')
    const [country, setcountry] = useState('')
    const [state, setstate] = useState('')
    const [district, setdistrict] = useState('')
    const [nativeDistrict, setnativeDistrict] = useState('')
    const [occupation, setoccupation] = useState('')
    const [checkBox, setcheckBox] = useState(false)
    const [yourName, setyourName] = useState('')
    const [isSubmitting, setisSubmitting] = useState('')

     const handleFullName = (e) => {

        setfullName(e.target.value)
     }
     const handleEmail = (e) => {

        setemail(e.target.value)
    }
const handleSonOfName = (e) => {
        setsonOfName(e.target.value)
    }
     const handleNumber = (e) => {

         setnumber(e.target.value)
 }
    const handleGender = (e) => {

        setgender(e.target.value)
    }
    const handleCurrentAddress = (e) => {

     setcurrentAddress(e.target.value)
    }
    const handelAddress = (e) => {

        setAddress(e.target.value)
     }
     const handleState = (e) => {
         setstate(e.target.value)
     }
     const handleDistrict = (e) => {

         setdistrict(e.target.value)
     }
    const handleNativeDistrict = (e) => {

        setnativeDistrict(e.target.value)
     }
     const handleOccupation = (e) => {

         setoccupation(e.target.value)
     }
     const handleYourName = (e) => {

         setyourName(e.target.value)
     }
     const handleCheckBox = (e) => {

         setcheckBox(e.target.value)
     }
    const handleCountry = (e) => {

         setcountry(e.target.value)
     }

     const handleSubmit = (e) => {
         e.preventDefault()
         // console.log(fullName, sonOfName, number)
     }

     const handleReset = () => {
         setfullName('')
         setemail('')
         setsonOfName('')
         setnumber('')
         setcurrentAddress('')
         setgender('')
         setAddress('')
         setnativeDistrict('')
     setdistrict('')
         setcountry('')
        setstate('')
        setoccupation('')
         setyourName('')

     }


    return (
        <div className="max-w-screen-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <Form  >

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div role="group" className="space-y-2">
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    // value={fullName}
                                    // onChange={(e) => handleFullName(e)}
                                    type="text"
                                    id="fullname"
                                    placeholder="Full Name"
                                    required
                                    aria-required="true"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div role="group" className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    // value={email} onChange={(e) => handleEmail(e)}
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    aria-required="true"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">

                            <div role="group" className="space-y-2">
                                <label htmlFor="relation" className="block text-sm font-medium text-gray-700">
                                    S/o, W/o, D/o
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    // value={sonOfName} onChange={(e)=>handleSonOfName(e)}
                                    type="text"
                                    id="relation"
                                    placeholder="S/o, W/o, D/o Name"
                                    required
                                    aria-required="true"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div role="group" className="space-y-2">
                                <label htmlFor="mobilenumber" className="block text-sm font-medium text-gray-700">
                                    Mobile Number
                                    <span className="text-red-500">*</span>
                                </label>
                                <PhoneInput
                                    country={'in'}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,

                                        className: 'mt-1 block w-11/12 ml-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    }}
                                    // value={number}
                                    // onChange={(e)=>handleNumber(e)}
                                    containerClass="mt-1 block w-full"
                                    inputClass="w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {/* <div className="mt-1 flex rounded-md shadow-sm border border-gray-300"> */}
                                {/* <select aria-label="Phone number country" className="inline-flex items-center px-3 py-2 border border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="ZZ">International</option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AC">Ascension Island</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Sint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, Democratic Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Cote d'Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FM">Federated States of Micronesia</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French Part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TA">Tristan da Cunha</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                                </select> */}
                                {/* <input  value = onChange={}
                                    type="tel"
                                    id="mobileNumberInput"
                                    placeholder="Mobile Number"
                                    className="flex-1 block w-full rounded-none rounded-r-md px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                /> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                    <div role="group" className="space-y-2 w-[30%]">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="gender"
                            required
                            aria-required="true"
                            // value={gender}
                            // onChange={(e)=>handleGender(e)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div role="group" className="space-y-2">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Current Address
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2 space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                    // value='India' onChange={(e)=>handleCurrentAddress(e)}
                                    type="radio"
                                    name="location"

                                    required
                                    aria-required="true"
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">India</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    // value='Abroad' onChange={(e)=>handleCurrentAddress(e)}
                                    type="radio"
                                    name="location"

                                    required
                                    aria-required="true"
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Abroad</span>
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className=" grid grid-cols-6  gap-5">
                            <div role="group" className="space-y-2 col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Address
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    // value={Address} onChange={(e)=>handelAddress(e)}
                                    type="text"
                                    id="address"
                                    placeholder="Current Address"
                                    required
                                    aria-required="true"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                           {currentAddress === "India" ?
                               (
                                    <div className='flex col-span-3 justify-around'>
                                        <div role="group" className="space-y-2 w-[45%]">
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                State
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="state"
                                                required
                                                aria-required="true"
                                                // value={state}
                                                // onChange={(e)=>handleState(e)}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">-- Select State --</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="Uttarakhand">Uttarakhand</option><option value="West Bengal">West Bengal</option><option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option><option value="Chandigarh">Chandigarh</option><option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option><option value="Delhi">Delhi</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option>
                                            </select>
                                        </div>
                                        <div role="group" className="space-y-2 w-[45%]">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                District
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="city"
                                                required
                                                aria-required="true"
                                                // value={district}
                                                // onChange={(e)=>handleDistrict(e)}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">-- Select District --</option>
                                                <option value="Anantapur">Anantapur</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>
                               )
                               :
                                (
                                    <div role="group" className="space-y-2 w-[45%]">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            Country
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="city"
                                            required
                                            aria-required="true"
                                            // value={country}
                                            // onChange={(e)=>handleCountry(e)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">-- Select Country --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua And Barbuda">Antigua And Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas The">Bahamas The</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option><option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji Islands">Fiji Islands</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia The">Gambia The</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey and Alderney">Guernsey and Alderney</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard and McDonald Islands">Heard and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea North">Korea North</option><option value="Korea South">Korea South</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau S.A.R.">Macau S.A.R.</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Man (Isle of)">Man (Isle of)</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="Netherlands The">Netherlands The</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option><option value="Panama">Panama</option><option value="Papua new Guinea">Papua new Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Island">Pitcairn Island</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic Of The Congo">Republic Of The Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Smaller Territories of the UK">Smaller Territories of the UK</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia">South Georgia</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad And Tobago">Trinidad And Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks And Caicos Islands">Turks And Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands (British)">Virgin Islands (British)</option><option value="Virgin Islands (US)">Virgin Islands (US)</option><option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select>

                                    </div>
                               )
                            }


                        </div>

                    </div>

                    <div className="space-y-2 w-1/2">
                        <p className="text-sm font-medium text-gray-700">NATIVE ADDRESS IN RAJASTHAN</p>
                        <div role="group" className="space-y-2">
                            <label htmlFor="field-:ru:" className="block text-sm font-medium text-gray-700">
                                District
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="field-:ru:"
                                required
                                aria-required="true"
                                // value={nativeDistrict}
                                // onClick={(e)=>handleNativeDistrict(e)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">-- Select District --</option><option value="Ajmer">Ajmer</option><option value="Alwar">Alwar</option><option value="Anupgarh">Anupgarh</option><option value="Balotra">Balotra</option><option value="Banswara">Banswara</option><option value="Baran">Baran</option><option value="Barmer">Barmer</option><option value="Beawar">Beawar</option><option value="Bharatpur">Bharatpur</option><option value="Bhilwara">Bhilwara</option><option value="Bikaner">Bikaner</option><option value="Bundi">Bundi</option><option value="Chittorgarh">Chittorgarh</option><option value="Churu">Churu</option><option value="Dausa">Dausa</option><option value="Dheeg">Dheeg</option><option value="Dholpur">Dholpur</option><option value="Didwana-Kuchaman">Didwana-Kuchaman</option><option value="Dudu">Dudu</option><option value="Dungarpur">Dungarpur</option><option value="Gangapur City">Gangapur City</option><option value="Hanumangarh">Hanumangarh</option><option value="Jaipur">Jaipur</option><option value="Jaipur (Rural)">Jaipur (Rural)</option><option value="Jaisalmer">Jaisalmer</option><option value="Jalore">Jalore</option><option value="Jhalawar">Jhalawar</option><option value="Jhunjhunu">Jhunjhunu</option><option value="Jodhpur">Jodhpur</option><option value="Jodhpur (Rural)">Jodhpur (Rural)</option><option value="Karauli">Karauli</option><option value="Kekri">Kekri</option><option value="Khairthal-Tijara">Khairthal-Tijara</option><option value="Kota">Kota</option><option value="Kotputli-Bahrod">Kotputli-Bahrod</option><option value="Nagaur">Nagaur</option><option value="Neem Ka Thana">Neem Ka Thana</option><option value="Pali">Pali</option><option value="Phalodi">Phalodi</option><option value="Pratapgarh">Pratapgarh</option><option value="Rajsamand">Rajsamand</option><option value="Salumbar">Salumbar</option><option value="Sanchore">Sanchore</option><option value="Sawai Madhopur">Sawai Madhopur</option><option value="Shahpura">Shahpura</option><option value="Sikar">Sikar</option><option value="Sirohi">Sirohi</option><option value="Sri Ganganagar">Sri Ganganagar</option><option value="Tonk">Tonk</option><option value="Udaipur">Udaipur</option>

                            </select>
                        </div>
                    </div>

                    <div role="group" className="space-y-2 w-2/5 ">
                        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                            Occupation
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            // value={occupation} onChange={(e)=>handleOccupation(e)}
                            type="text"
                            id="occupation"
                            placeholder="Occupation"
                            required
                            aria-required="true"
                            className="mt-1 block w-full px-3 py-2 border bg-slate-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4 space-y-2">
                        <label className="inline-flex items-start">
                            <input
                                // value={checkBox} onChange={(e)=>handleCheckBox(e)}
                                type="checkbox"
                                name="checkbox"
                                required

                                className="form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
                            />
                            <span className="ml-2 text-sm text-gray-700">

                                <span className="ml-2">
                                    By submitting this form, I consent to Founder General Secretary of <i>MARWADI INTERNATIONAL FEDERATION (MIF)</i> for using my name and details for records of MIF and its office bearers list. I have read and understood all the terms and conditions of MIF.
                                </span>
                            </span>
                        </label>
                    </div>

                    <div role="group" className="space-y-2 w-1/2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            // value={yourName} onChange={(e)=>handleYourName(e)}
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            required
                            aria-required="true"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-6 flex space-x-4">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            // onClick={handleReset}
                            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Form;
