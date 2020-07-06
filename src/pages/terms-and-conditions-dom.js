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
        <h2>Dog of the Month</h2>
      </div>
    <p>
      The Promoter is Immediate Media Company London Limited. This promotion is in no way sponsored, endorsed, administered by, or associated with Facebook.
    </p>
    <p>
    The promotion is open to all residents of the UK, including the Channel Islands, aged 18 years or older, except the Promoter’s employees or contractors and anyone connected with the promotion or their direct family members.
    </p>
    <p>
    The promotional period starts at 00:01 on the first of the month and closes at 23.59 on the last day of the month. The promotion is repeated on a monthly basis with the last promotion ending on 30 September 2020. 
    </p>
    <p>
    By entering the promotion, the participants agree:
    </p>
    <p>
      <ul>
        <li>to be bound by these terms and conditions and</li>
        <li>that should they win the promotion, their name and likeness may be used by the Promoter for pre-arranged promotional purposes</li>
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
    The Promoter’s decision as to the winner is final and no correspondence relating to the promotion will be entered into. The Promoter may share the winner’s details with the prize provider for the purpose of fulfilling the prize.
    </p>
    <p>
      The winning entrants will be the randomly chosen story from all entries within the relevant promotional period after the closing date. The monthly winning entrant will be chosen at random. 
    </p>
    <p>
    The Promoter’s decision as to the winner is final and no correspondence relating to the promotion will be entered into. The Promoter may share the winner’s details with the prize provider for the purpose of fulfilling the prize. 
    </p>
    <p>
    The winner will be notified within 28 days of the close of the promotion by email. If the winner cannot be contacted, or fails to respond within 28 days of such notification being sent, the Promoter reserves the right to offer the prize to a runner up, or to re-offer the prize in any future promotion.
    </p>
    <p>
    Each winner shall receive a luxury hamper of dog goods including a blanket, dog bowl, tote bag, certificate, rosette, and Winalot dog food pouches.
    The prize includes nothing other than stated above. There is no cash alternative and the prize will not be transferable. Prizes must be taken as stated and cannot be deferred. 
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
