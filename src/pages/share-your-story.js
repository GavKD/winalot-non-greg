import React from "react"
import { Link } from "gatsby"
import { navigate } from 'gatsby-link'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BackButton from "../components/backButton"
// import Hub from "../components/hub"
// import VideoHeader from "../components/videoHeader"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

let submissionAttempt = false;

export default function shareYourStory() {

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    if(submissionAttempt)
    {
      
      validateForm();
      //validationReminders();
    }
  }

  const handleAttachment = (e) => {

    if(e.target.files[0]!=null)
    {
      if(e.target.files[0].size > 5000000){
        //alert("File is too big!");
        document.querySelector('.file-upload-wrapper').setAttribute('data-text', "select photo");
        document.querySelector('.validation-message').style.display = 'block';
      }
      else
      {
          setState({ ...state, [e.target.name]: e.target.files[0] });
          document.querySelector('.file-upload-wrapper').setAttribute('data-text', e.target.files[0].name);
          document.querySelector('.validation-message').style.display = 'none';
      }
    }

  }

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateForm = (f) => {

     const form = document.querySelector('form');
     // validate form
     const emailField = form["email"].value;
     const ownerFirstNameField = form["ownerFirstName"].value;
     const ownerLastNameField = form["ownerLastName"].value;
     const dogNameField = form["dogName"].value;
     const dogAgeYearsField = form["dogAgeYears"].value;
     const dogAgeMonthsField = form["dogAgeMonths"].value;
     const dogStoryField = form["dogStory"].value;
     const refererField = form["referer"].value;
     const consentField = form["consent"].value;
     let validated = true;

     if(validateEmail(emailField))
     {
        form["email"].classList.remove('required-field'); 
     }
     else
     {
        form["email"].classList.add('required-field');
        validated = false;
     }
 
     if(ownerFirstNameField === "")
     {
       form["ownerFirstName"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["ownerFirstName"].classList.remove('required-field');
     }

     if(ownerLastNameField === "")
     {
       form["ownerLastName"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["ownerLastName"].classList.remove('required-field');
     }
 
     if(dogNameField === "")
     {
       form["dogName"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["dogName"].classList.remove('required-field');
     }
 
     if(dogAgeYearsField == -1)
     {
       form["dogAgeYears"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["dogAgeYears"].classList.remove('required-field');
     }

     if(dogAgeMonthsField == -1)
     {
       form["dogAgeMonths"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["dogAgeMonths"].classList.remove('required-field');
     }
 
     if(dogStoryField === "")
     {
       form["dogStory"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["dogStory"].classList.remove('required-field');
     }
 
     if(refererField == -1)
     {
       form["referer"].classList.add('required-field');
       validated = false;
     }
     else
     {
       form["referer"].classList.remove('required-field');
     }

     if(consentField === "")
     {
       document.querySelector('.opt-in-box').classList.add('required-opt-in');
       validated = false;
     }
     else
     {
      document.querySelector('.opt-in-box').classList.remove('required-opt-in');
     }

     if(validated)
     {
       return true;
     }
     else
     {
       return false;
     }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if(!submissionAttempt)
    {
      submissionAttempt = true; 
    }

    if(validateForm(form))
    {
      // submit
      fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
      navigate(form.getAttribute('action'))
    }
    else{
      // not validated
      
    }
  }

  return (

  <Layout>
    <SEO title='greatbritishdogs.co.uk | Share your story' keywords={[`great`, `british`, `dogs`]} />
    <BackButton page="form" link=""></BackButton>
    <div className="share-story-main">
      <div className="form-container">
      <div className="form-title">
        <h1>Share your story for the chance to feature online and win a dog-friendly coastal break</h1>
      </div>
      <div className="dog-break"></div>
      {/* <div className="form-subtitle">
        <h2>It only takes a moment to put yourself in with a chance of winning</h2>
      </div> */}
      {/* <div className="form-subtitle">
        <h3>What you could win…</h3>
      </div> */}
      <div className="form-prize">
      <h4>What you could win…</h4>
      <ul>
        <li>
         <div> four-night stay for two adults and two dogs at a dog-friendly coastal cottage of the winner’s choice</div>
        </li>
        <li>
         <div>A pub lunch whilst on the trip and a dog grooming session</div>
        </li>
        <li>
         <div>Available locations are Cornwall, Devon, West Wales, Somerset, Lincolnshire, Yorkshire and Sussex.<br></br><br></br>
         <span className="opt-in-disclaimer">By entering you agree to our <Link to={"/terms-and-conditions/"}>Terms and Conditions.</Link></span>
         </div>
        </li>
      </ul>
    <h4>But that's not all... </h4>
    <ul>
      <li>
      You’ll also be eligible for our monthly Dog of the Month competition. If your dog wins, your story and picture will sit on a special Dog of the Month spot at the top of the home page for the whole month. You will also win a prize hamper containing Winalot dog food pouches, a special personalised bowl and pillow for each winning dog, plus Great British Dog tote bags, a winner’s rosette and letter.
      <br>
      </br>
      <br></br>
      <span className="opt-in-disclaimer">By entering Dog of the Month competition you agree to our <Link to={"/terms-and-conditions-dom/"}>Terms and Conditions.</Link></span>
      </li>
    </ul>

      <h5>It only takes a moment to put yourself in with a chance of winning</h5>
      </div>
        <form
          name="share-story-form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
        <input type="hidden" name="form-name" value="share-story-form" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
          <p>
            <label className="form-label"> <span>*</span> Email <input type="email" name="email" className="form-corners" onChange={handleChange} /></label>   
            {/* <span className="validation-message">this isn't a valid email address</span> */}
          </p>
          <p>
            <label className="form-label">Phone number (optional) <input type="number" name="phone-number" className="form-corners" onChange={handleChange} /></label>
          </p>
          <p>
            <label className="form-label"> <span>*</span> Your first name <input type="text" name="ownerFirstName" className="form-corners" onChange={handleChange} /></label>   
            {/* <span className="validation-message">Please enter your name</span> */}
          </p>
          <p>
            <label className="form-label"> <span>*</span> Your last name <input type="text" name="ownerLastName" className="form-corners" onChange={handleChange} /></label>   
            {/* <span className="validation-message">Please enter your name</span> */}
          </p>
          <p>
            <label className="form-label"> <span>*</span> Your dog's name <input type="text" name="dogName" className="form-corners" onChange={handleChange} /></label>
            {/* <span className="validation-message">Please enter your dogs name</span> */}
          </p>
          <p>
            <label className="form-label"> <span>*</span> How old is your dog? <br/>
              <select name="dogAgeYears" className="form-corners" defaultValue="-1" onChange={handleChange}>
                <option disabled="disabled" value="-1">Years</option>
                <option value="0">Less than One</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
                <option value="6">6 Years</option>
                <option value="7">7 Years</option>
                <option value="8">8 Years</option>
                <option value="9">9 Years</option>
                <option value="10">10 Years</option>
                <option value="11">11 Years</option>
                <option value="12">12 Years</option>
                <option value="13">13 Years</option>
                <option value="14">14 Years</option>
                <option value="15">15 Years</option>
                <option value="16">16 Years</option>
                <option value="17">17 Years</option>
                <option value="18">18 Years</option>
                <option value="19">19 Years</option>
                <option value="20">20 Years</option>
              </select>
            </label>
            {/* <span className="validation-message">Please tell us your dogs age</span> */}
          </p>
          <p>
            <label className="form-label"> <span>*</span> Which month do you celebrate their birthday? <br/>
              <select name="dogAgeMonths" className="form-corners" defaultValue="-1" onChange={handleChange}>
                <option disabled="disabled" value="-1">Month</option>
                <option value="JAN">January</option>
                <option value="FEB">February</option>
                <option value="MAR">March</option>
                <option value="APR">April</option>
                <option value="MAY">May</option>
                <option value="JUN">June</option>
                <option value="JUL">July</option>
                <option value="AUG">August</option>
                <option value="SEP">September</option>
                <option value="OCT">October</option>
                <option value="NOV">November</option>
                <option value="DEC">December</option>
              </select>
            </label>
            {/* <span className="validation-message">Please tell us your dogs age</span> */}
          </p>
          <p className="no-gap">
            <label className="form-label"> <span>*</span> Now tell us a bit about what makes your dog such a positive influence in your life. Give us as much detail as you can – we'd love to hear about their habits, quirks, etc.<textarea name="dogStory" placeholder=""  className="form-corners form-story-box" onChange={handleChange}></textarea></label>
            {/* <span className="validation-message">Please tell us your story</span> */}
          </p>
          <div>
            <label className="form-label"> Upload a photo (optional)</label>
            <div className="file-upload-wrapper" data-text="select photo">
              <input name="file-upload-field" type="file" accept='image/*' className="file-upload-field" onChange={handleAttachment} />
            </div>
            <span className="validation-message">Photo must be less than 5MB, please select another</span>
          </div>
          <br/>
          <p>
            <label className="form-label"> <span>*</span> Where did you find out about Great British Dogs?
              <select name="referer" className="form-corners" onChange={handleChange} defaultValue="-1">
                <option disabled="disabled" value="-1">please select</option>
                <option value="SOCIAL">Social</option>
                <option value="ONLINE-ADS">Online ads</option>
                <option value="MFM">MadeForMums.com</option>
                <option value="GF">BBC Good Food magazine</option>
                <option value="GW">BBC Gardeners World magazine</option>
                <option value="CF">BBC Countryfile magazine</option>
                <option value="RT">Radio Times magazine</option>
                <option value="SC">Simply Crochet magazine</option>
                <option value="SS">Simply Sewing magazine</option>
                <option value="LPQM">Love Patchwork & Quilting magazine</option>
                <option value="OTHER">Other</option>
              </select>
            </label>
            {/* <span className="validation-message">Please tell us where you heard about Great British Dogs</span> */}
          </p>
          <div>
            <span className="opt-in-disclaimer">As Immediate Media's partner in the search of Great British Dogs, Purina™ who make Winalot™, has over 80 years of nutritional expertise that they are keen to share with you and your pet.<br/><br/> By ticking the box, you consent to your data being shared with Nestlé Purina Petcare UK&I so that they can send you information and offers. Purina will only contact you via email for marketing purposes and you can update these preferences or unsubscribe at any time.</span>
            <br/>
            <div className="opt-in-box">
              <label htmlFor="consent" className="form-label radio-label"><span>*</span> Yes</label>
              <input type="radio" id="consent" name="consent" value="yes" onChange={handleChange}></input>
              <label htmlFor="consent" className="form-label radio-label">No</label>
              <input type="radio" id="consent" name="consent" value="no" onChange={handleChange}></input>
            </div>
            {/* <span className="validation-message">Please indicate your preference</span> */}
          </div>
          <p>
            <span className="opt-in-disclaimer">By entering you agree to our <Link to={"/terms-and-conditions/"}>Terms and Conditions.</Link></span>
            <br/>
            <span className="opt-in-disclaimer">For more information on how Immediate Media uses your data, see our <a href="https://policies.immediate.co.uk/privacy/" target="_blank">Privacy Notice.</a></span>
          </p>
          <p>
            <button type="submit" className="submit-label">Submit  your story</button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

}
