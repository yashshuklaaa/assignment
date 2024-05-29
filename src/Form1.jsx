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
     
    const handleReset=()=>{
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
            <Form onSubmit={handleSubmit} >

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
                            onClick={handleReset}
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
