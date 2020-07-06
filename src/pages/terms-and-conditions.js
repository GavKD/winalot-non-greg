import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VoucherAd from "../components/voucherAd";
import BackButton from "../components/backButton"

const TermsAndConditions = () => (
  <Layout>
    <SEO title="Terms and Conditions" keywords={[`great`, `british`, `dogs`]} />
    <BackButton page="form" link="share-your-story/"></BackButton>
    <div className="thanks-main">
    <div className="terms-container">
      <div className="form-title">
        <h1>Terms and Conditions</h1>
      </div>
    <p>
      The Promoter is Immediate Media Company London Limited. This promotion is in no way sponsored, endorsed, administered by, or associated with Facebook.
    </p>
    <p>
    The promotion is open to all residents of the UK, including the Channel Islands, aged 18 years or older, except the Promoter’s employees or contractors and anyone connected with the promotion or their direct family members.
    </p>
    <p>
    The closing date for entries is September 30th 2020.
    </p>
    <p>
    By entering the promotion, the participants agree:
    </p>
    <p>
      <ul>
        <li>to be bound by these terms and conditions and</li>
        <li>that should they win the promotion, their name and likeness may be used by the Promoter for pre-arranged promotional purposes</li>
        <li>you’ll also be eligible for our monthly Dog of the Month competition.<br></br>  
        <span className="opt-in-disclaimer">In accordance with the Dog of the Month competition <Link to={"/terms-and-conditions-dom/"}>Terms and Conditions.</Link></span></li>
      </ul>
    </p>
    <p>
    Entrants will have to complete the form, including a story, on www.greatbritishdogs.co.uk. Entries received after the closing date of the promotion will not be considered.
    </p>
    <p>
    Entrants must supply to Immediate Media Company Limited their email, full name, dogs name, dogs age, story and how the user found the site. The Promoter will use entrants’ personal details in accordance with the <a href="https://policies.immediate.co.uk/privacy/">Immediate Privacy Policy</a>. These details are being collected and used by the Promoter, not by Facebook.
    </p>
    <p>
    Only one entry will be permitted per person, regardless of method of entry. Bulk entries made by third parties will not be permitted.
    </p>
    <p>
    The winning entrant will be the chosen story from all entries after the closing date. The winning entrant will be chosen from a panel of judges from both Immediate and Winalot. 
    </p>
    <p>
    The Promoter’s decision as to the winner is final and no correspondence relating to the promotion will be entered into. The Promoter may share the winner’s details with the prize provider for the purpose of fulfilling the prize.
    </p>
    <p>
    The winner will be notified within 28 days of the close of the promotion by email. If the winner cannot be contacted, or fails to respond within 28 days of such notification being sent, the Promoter reserves the right to offer the prize to a runner up, or to re-offer the prize in any future promotion.
    </p>
    <p>
    One winner shall receive a 4 night stay for 2 adults and 2 dogs at a dog friendly costal cottage of the winner’s choice, with a travel allowance, a pub lunch whilst on the trip and dog grooming for one dog. Locations available are Cornwall, Devon, West Wales, Somerset, Lincolnshire, Yorkshire and Sussex.
    </p>
    <p>
    The dog friendly cottage stay is subject to availability at the discretion of the organiser and excludes, Valentines Day, 19 October – 30 October 2020 and 21 December 2020 – 01 January 2021 (all dates inclusive) and Bank Holidays in the UK.  Availability will start from the 1st October 2020 for 12 months after initial contact.
    </p>
    <p>
    Accommodation is based on 2 adults and 2 dogs sharing a cottage with 1 bedroom. Cottages vary in each location. Travel will be provided in the form of a fuel allowance covering a maximum total of 300 miles (round trip). Should the winner live further than 200 miles from the location, a reasonable contribution to travel expenses.
    </p>
    <p>
    Lunch at a dog friendly pub is based on 2 adults enjoying a 2-course meal from the main menu including 1⁄2 bottle of house wine per couple. Restaurant reservations are subject to availability at the time of booking. Excludes Michelin starred restaurants. 
    </p>
    <p>
    Dog grooming will be for 1 dog at the winners' choice of local groomer as agreed with the promoter. Should a dog grooming service not be available in the winner’s local area, the prize supplier reserve the right to offer an alternative or equal value. 
    </p>
    <p>
    All prizes must be claimed and booked by the prize winner within 12 months from the date of our initial correspondence with them.  
    </p>
    <p>
    The prize includes nothing other than stated above. 
    </p>
    <p>
    There is no cash alternative and the prize will not be transferable. Prizes must be taken as stated and cannot be deferred. 
    </p>
    <p>
    The Promoter reserves the right to substitute the prize with one of the same or greater value.
    The Promoter reserves the right to amend these terms and conditions or to cancel, alter or amend the promotion at any stage, if deemed necessary in its opinion, or if circumstances arise outside of its control.  
    </p>
    <p>
    The Promoter does not accept any responsibility for lost, delayed or fraudulent entries.  
    </p>
    <p>
    The Promoter excludes liability to the full extent permitted by law for any loss, damage or injury occurring to the participant arising from his or her entry into the promotion or occurring to the winner arising from his or her acceptance of a prize.
    </p>
    <p>
    By entering this promotion you agree to release Facebook of any liability howsoever caused in respect of this promotion..
    </p>
    <p>
    The promotion is subject to the laws of England.
    </p>
    </div>
    </div>
  </Layout>
)

export default TermsAndConditions
