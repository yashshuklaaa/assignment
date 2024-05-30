import React, { useState } from 'react';
import { districtArray } from './data';


const RegisterForm = () => {

    const [fullName, setfullName] = useState('')
    const [sonOfName, setsonOfName] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState()
    const [gender, setgender] = useState('')
    const [currentAddress, setcurrentAddress] = useState('')
    const [Address, setAddress] = useState('')
    const [country, setcountry] = useState('')
    const [countryState, setcountryState] = useState('')
    const [state, setstate] = useState('')
    const [district, setdistrict] = useState('')
    const [nativeDistrict, setnativeDistrict] = useState('')
    const [occupation, setoccupation] = useState('')
    const [checkBox, setcheckBox] = useState(true)
    const [yourName, setyourName] = useState('')
    const [isSubmitting, setisSubmitting] = useState(false)

    console.log(currentAddress);
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
        setcheckBox(prev => !prev)
    }
    const handleCountry = (e) => {

        setcountry(e.target.value)
    }

    const handlecountryState = (e) => {

        setcountry(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(fullName,
            sonOfName,
            email,
            number,
            gender,
            currentAddress,
            Address,
            country,
            state,
            district,
            nativeDistrict,
            checkBox,
            occupation,
            yourName,

        )
        try {
            const result = await fetch('http://localhost:8000/api/user',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    sonOfName,
                    email,
                    number,
                    gender,
                    currentAddress,
                    Address,
                    country,
                    state,
                    district,
                    nativeDistrict,
                    checkBox,
                    occupation,
                    yourName,
                })
            })
            console.log(result)
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
            setisSubmitting(false)
        } catch (error) {

            console.log(error)
        }
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
        <div className="max-w-screen-xl mx-auto">
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div role="group" className="space-y-2">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                Full Name
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={fullName}
                                onChange={(e) => handleFullName(e)}
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
                                value={email} onChange={(e) => handleEmail(e)}
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
                                value={sonOfName} onChange={(e) => handleSonOfName(e)}
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
                            <input
                                value={number} onChange={(e) => handleNumber(e)}
                                type="text"
                                id="mobilenumber"
                                placeholder="+91 86576-65862"
                                required
                                aria-required="true"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div role="group" className="space-y-2 w-[35%]">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                        <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="gender"
                        required
                        aria-required="true"
                        value={gender}
                        onChange={(e) => handleGender(e)}
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
                                type="radio"
                                name="location"
                                value="India"
                                required
                                aria-required="true"
                                className="form-radio text-indigo-600"
                                onChange={(e) => handleCurrentAddress(e)}
                            />
                            <span className="ml-2">India</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="location"
                                value="Abroad"
                                required
                                aria-required="true"
                                onChange={(e) => { setcurrentAddress(e.target.value) }}
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Abroad</span>
                        </label>
                    </div>
                </div>

                <div className="">
                    <div className=" grid grid-cols-6  gap-5">
                        {currentAddress !== '' && (
                            <>
                                <div role="group" className="space-y-2 col-span-3">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={Address} onChange={(e) => handelAddress(e)}
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
                                        <div className='flex col-span-3 gap-10 justify-start'>
                                            <div role="group" className="space-y-2 w-[45%]">
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                    State
                                                    <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="state"
                                                    required
                                                    aria-required="true"
                                                    value={state}
                                                    onChange={(e) => handleState(e)}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">-- Select State --</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="Uttarakhand">Uttarakhand</option><option value="West Bengal">West Bengal</option><option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option><option value="Chandigarh">Chandigarh</option><option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option><option value="Delhi">Delhi</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option>
                                                </select>
                                            </div>
                                            {state !== '' && (
                                                <div role="group" className="space-y-2 w-[45%]">
                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                        District
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        id="city"
                                                        required
                                                        aria-required="true"
                                                        value={district}
                                                        onChange={(e) => handleDistrict(e)}
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">-- Select District --</option>
                                                        {districtArray.map((district, index) => {
                                                            console.log("state show", state)
                                                            return (
                                                                <>
                                                                    {district.name === state ?
                                                                        (
                                                                            <>
                                                                                {district.district.map((disctictName) => (
                                                                                    <option key={disctictName} value={disctictName}>{disctictName}</option>

                                                                                ))}
                                                                            </>

                                                                        ) :
                                                                        null
                                                                    }
                                                                </>
                                                            )
                                                        }
                                                        )}
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='flex col-span-3 gap-10 justify-start '>
                                            <div role="group" className="space-y-2 w-[45%]">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                    <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="city"
                                                    required
                                                    aria-required="true"
                                                    value={country}
                                                    onChange={(e) => handleCountry(e)}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">-- Select Country --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua And Barbuda">Antigua And Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas The">Bahamas The</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option><option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji Islands">Fiji Islands</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia The">Gambia The</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey and Alderney">Guernsey and Alderney</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard and McDonald Islands">Heard and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea North">Korea North</option><option value="Korea South">Korea South</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau S.A.R.">Macau S.A.R.</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Man (Isle of)">Man (Isle of)</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="Netherlands The">Netherlands The</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option><option value="Panama">Panama</option><option value="Papua new Guinea">Papua new Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Island">Pitcairn Island</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic Of The Congo">Republic Of The Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Smaller Territories of the UK">Smaller Territories of the UK</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia">South Georgia</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad And Tobago">Trinidad And Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks And Caicos Islands">Turks And Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands (British)">Virgin Islands (British)</option><option value="Virgin Islands (US)">Virgin Islands (US)</option><option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select>

                                            </div>
                                            {country !== '' && (

                                                <div role="group" className="space-y-2 w-[45%]">
                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                        State
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        id="city"
                                                        required
                                                        aria-required="true"
                                                        value={countryState}
                                                        onChange={(e) => handlecountryState(e)}
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">-- Select District --</option>
                                                        <option value="Anantapur">Anantapur</option>
                                                    </select>
                                                </div>
                                            )
                                            }
                                        </div>
                                    )
                                }
                            </>
                        )}
                    </div>

                </div>

                <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-900">NATIVE ADDRESS IN RAJASTHAN</p>
                </div>

                <div role="group" className="space-y-2 w-1/2">
                    <label htmlFor="native-district" className="block text-sm font-medium text-gray-700">
                        District
                        <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="native-district"
                        required
                        aria-required="true"
                        value={nativeDistrict}
                        onChange={(e) => handleNativeDistrict(e)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">-- Select District --</option><option value="Ajmer">Ajmer</option><option value="Alwar">Alwar</option><option value="Anupgarh">Anupgarh</option><option value="Balotra">Balotra</option><option value="Banswara">Banswara</option><option value="Baran">Baran</option><option value="Barmer">Barmer</option><option value="Beawar">Beawar</option><option value="Bharatpur">Bharatpur</option><option value="Bhilwara">Bhilwara</option><option value="Bikaner">Bikaner</option><option value="Bundi">Bundi</option><option value="Chittorgarh">Chittorgarh</option><option value="Churu">Churu</option><option value="Dausa">Dausa</option><option value="Dheeg">Dheeg</option><option value="Dholpur">Dholpur</option><option value="Didwana-Kuchaman">Didwana-Kuchaman</option><option value="Dudu">Dudu</option><option value="Dungarpur">Dungarpur</option><option value="Gangapur City">Gangapur City</option><option value="Hanumangarh">Hanumangarh</option><option value="Jaipur">Jaipur</option><option value="Jaipur (Rural)">Jaipur (Rural)</option><option value="Jaisalmer">Jaisalmer</option><option value="Jalore">Jalore</option><option value="Jhalawar">Jhalawar</option><option value="Jhunjhunu">Jhunjhunu</option><option value="Jodhpur">Jodhpur</option><option value="Jodhpur (Rural)">Jodhpur (Rural)</option><option value="Karauli">Karauli</option><option value="Kekri">Kekri</option><option value="Khairthal-Tijara">Khairthal-Tijara</option><option value="Kota">Kota</option><option value="Kotputli-Bahrod">Kotputli-Bahrod</option><option value="Nagaur">Nagaur</option><option value="Neem Ka Thana">Neem Ka Thana</option><option value="Pali">Pali</option><option value="Phalodi">Phalodi</option><option value="Pratapgarh">Pratapgarh</option><option value="Rajsamand">Rajsamand</option><option value="Salumbar">Salumbar</option><option value="Sanchore">Sanchore</option><option value="Sawai Madhopur">Sawai Madhopur</option><option value="Shahpura">Shahpura</option><option value="Sikar">Sikar</option><option value="Sirohi">Sirohi</option><option value="Sri Ganganagar">Sri Ganganagar</option><option value="Tonk">Tonk</option><option value="Udaipur">Udaipur</option>

                    </select>
                </div>
                <div role="group" className="space-y-2 w-2/5">
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                        Occupation
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="occupation"
                        placeholder="Occupation"
                        required
                        value={occupation}
                        onChange={(e) => handleOccupation(e)}
                        aria-required="true"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="space-y-2 mt-4">
                    <label className="inline-flex items-start">
                        {checkBox === true ? (
                            <input
                                type="checkbox"
                                name="checkbox"
                                required
                                checked
                                value={checkBox}
                                onChange={(e) => handleCheckBox(e)}
                                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                            />
                        )
                            : (
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    required

                                    value={checkBox}
                                    onChange={(e) => handleCheckBox(e)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                            )
                        }

                        <span className="ml-2 text-sm text-gray-700">

                            <span className="ml-2">
                                By submitting this form, I consent to Founder General Secretary of<i> MARWADI INTERNATIONAL FEDERATION (MIF)</i> for using my name and details for records of MIF and its office bearers list. I have read and understood all the terms and conditions of MIF.
                            </span>
                        </span>
                    </label>
                </div>
                <div role="group" className="space-y-2 mt-4 w-1/2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={yourName}
                        onChange={(e) => handleYourName(e)}
                        required
                        aria-required="true"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mt-6 flex space-x-4">
                    {checkBox === true ? (
                        <button
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${!isSubmitting ? 'bg-indigo-600 hover:bg-indigo-700': 'bg-indigo-400'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            Submit
                        </button>
                    )
                        : (
                            <button
                                type="submit"
                                disabled
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        )
                    }

                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div >
    );
};

export default RegisterForm;
