import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import {useLocation} from 'react-router-dom';
import {useInView} from "react-intersection-observer";

const LegalContent = () => {


    return (
        <div>
            <CustomNavbar/>
            <section className="legal-content-page">
                <div className="container">
                    <h3>Legal Notice</h3>
                    <p> This website is owned and operated by Q-Gold Resources Ltd. (“Q-Gold”). By using this website,
                        you
                        agree to the following terms and conditions.</p>

                    <h4> Conditions of Use</h4>
                    <p>
                        Except as may be expressly authorized by Q-Gold, any reproduction, modification of the website
                        materials or content, in whole or in part, is strictly prohibited.
                    </p>

                    <h4> Copyright Notice</h4>
                    <p>
                        Q-Gold and certain other names, words, titles, phrases, logos, icons, video, audio, graphics or
                        designs contained within the pages of this website may constitute trade names, registered or
                        unregistered trade-marks or service marks (the “Trade Marks”) of Q-Gold or of third parties
                        which
                        are used herein under licence. However, the display of Trade Marks on any page of this website
                        does
                        not imply that any licence has been granted or obtained from any third party.
                        All content or information made available to you on this website is protected under applicable
                        copyright laws. Q-Gold grants to you a limited licence to display the content of this website on
                        your computer and to print such content solely for your own personal, non-commercial use
                        provided
                        that you do not modify the content in any way or delete any proprietary notices. You may not
                        otherwise copy, republish or reproduce any content or information in any manner, including
                        electronic reproduction by “uploading” or “downloading”, without the prior written consent of
                        Q-Gold.
                    </p>
                    <p>
                        Any unauthorized copying, republishing, reproduction or modification of any Trade Marks or other
                        content or information of this website may be a violation of statutory or common law rights that
                        would subject you to legal action.
                    </p>

                    <h4> Currency of Website</h4>
                    <p>
                        Q-Gold intends to update the information on this website regularly. However, such information is
                        not
                        intended to be a comprehensive review of all matters and developments concerning Q-Gold and
                        Q-Gold
                        cannot guarantee the accuracy, currency or completeness of the information at all times and
                        assumes
                        no responsibility in this regard.
                    </p>

                    <h4>Disclaimer</h4>
                    <p>
                        The content and information on this website are provided “as is” and Q-Gold makes no warranties,
                        expressed or implied and disclaims and negates all other warranties, including without
                        limitation,
                        implied warranties or conditions of merchantability, fitness for a particular purpose, or
                        non-infringement of intellectual property or other violation of rights. Q-Gold does not warrant
                        or
                        make any representations concerning the accuracy, completeness or reliability of the content or
                        information of this website or otherwise relating to any content or information on any websites
                        linked to this website. Facts and information provided on this website are believed to be
                        accurate
                        at the time they are posted, however Q-Gold disclaims any and all liability for any failure to
                        update any content or information on this website. This website could include inaccuracies,
                        typographical errors, or out-of-date information and changes may be made at any time to the
                        information on this website without prior notice. YOU ARE ADVISED TO USE THIS WEBSITE AT YOUR
                        OWN
                        RISK.
                    </p>

                    <h4>Limitation of Liability</h4>
                    <p>
                        Q-Gold will not under any circumstances be liable to you for any loss of use, loss of
                        production,
                        loss of profits (anticipated or otherwise), loss of markets, economic loss, special, direct,
                        indirect or consequential loss or damage or punitive damages, whether in contract, tort, or
                        under
                        other theory or law or equity, and regardless of any negligence by Q-Gold or anyone for whom it
                        is
                        responsible, and notwithstanding that Q-Gold may have been advised of the possibility of such
                        loss
                        or damages being incurred by you.
                    </p>

                    <h4> Third Party Links</h4>
                    <p>
                        All links or references to other websites are provided merely as a convenience to the user.
                        Q-Gold
                        has no control over the linked or referenced websites, makes no representation or warranty
                        regarding
                        the completeness, accuracy and currency of the information located on the linked or referenced
                        websites and does not endorse the linked or referenced websites or their content.
                    </p>

                    <h4> Stock Quotes</h4>
                    <p>
                        All quotes are delayed at least 20 minutes unless otherwise stated. All stock quotes and
                        historical
                        stock price data are provided by third party service providers and are provided for
                        informational
                        purposes only, and are not intended for trading purposes. If you are contemplating trading in
                        the
                        securities of Q-Gold, we strongly advise you to seek independent professional advice before
                        making
                        any investment decision. Q-Gold makes no representation or warranty regarding the accuracy or
                        completeness of any such stock price quotes or historical stock price data and has not taken any
                        steps to verify the adequacy, accuracy or completeness of the information provided herein.
                    </p>

                    <h4>No Solicitation</h4>
                    <p>
                        Material contained in or accessible through this website is for information purposes only and is
                        not
                        intended to and does not constitute an offering of securities in any jurisdiction. Q-Gold does
                        not
                        assume any duty of disclosure beyond that which is required by applicable law. The information
                        on
                        this website is not intended to modify, qualify, supplement or amend information disclosed under
                        corporate and securities legislation of any jurisdiction applicable to Q-Gold and should not be
                        used
                        for the purpose of making investment decisions concerning Q-Gold securities.
                        No securities commission or regulatory authority has reviewed the accuracy or adequacy of the
                        information carried on this website.
                    </p>

                    <h4> Virus Protection</h4>
                    <p>
                        Q-Gold does not represent or warrant that the use of this website, including the browsing and
                        downloading of any content, will be free of viruses or other destructive or disruptive
                        components
                        and disclaims any liability for loss or damage caused by any virus or other destructive or
                        disruptive component downloaded from this website. You are cautioned to install and use
                        appropriate
                        anti-virus or other protective software.
                    </p>


                    <h4> Forward-looking Information</h4>
                    <p>
                        Certain statements contained in this website constitute forward-looking statements. These
                        statements
                        relate to future events or Q-Gold’s future performance, business prospects or opportunities.
                        Forward-looking statements include, but are not limited to, statements with respect to:
                        exploration
                        and drilling activities; anticipated mineral recoveries; future mineral production;
                        infrastructure
                        construction; interpretation of drill results; estimates of amounts not yet determinable; and
                        assumptions of management.
                    </p>
                    <p>
                        All statements other than statements of historical fact may be forward-looking statements.
                        Statements concerning proven and probable mineral reserves and mineral resource estimates may
                        also
                        be deemed to constitute forward-looking statements to the extent that they involve estimates of
                        the
                        mineralization that will be encountered if the property is developed, and in the case of mineral
                        resources or proven and probable mineral reserves, such statements reflect the conclusion based
                        on
                        certain assumptions that the mineral deposit can be economically exploited. Any statements that
                        express or involve discussions with respect to predictions, expectations, beliefs, plans,
                        projections, objectives, assumptions or future events or performance (often, but not always,
                        using
                        words or phrases such as “seek”, “anticipate”, “plan”, “continue”, “estimate”, “expect,
                        “forecast”,
                        “may”, “will”, “project”, “predict”, “potential”, “targeting”, “intend”, “could”, “might”,
                        “should”,
                        “believe”, “outlook” and similar expressions) are not statements of historical fact and may be
                        “forward-looking statements”. Forward-looking statements involve known and unknown risks,
                        uncertainties and other factors that may cause actual results or events to differ materially
                        from
                        those anticipated in such forward-looking statements. Q-Gold believes that the expectations
                        reflected in
                        those forward looking statements are reasonable, but no assurance can be given that these
                        expectations will prove to be correct and such forward-looking statements included in this
                        website
                        should not be unduly relied upon. Q-Gold does not intend, and does not assume any obligation, to
                        update these forward-looking statements. These forward-looking statements involve risks and
                        uncertainties relating to, among other things: results of exploration and development
                        activities;
                        uninsured risks; regulatory changes; defects in title; availability of materials and equipment;
                        timeliness of government approvals; changes in commodity prices; unanticipated environmental
                        impacts
                        on operations; and other risks outlined in Q-Gold’s public disclosure documents. Actual results
                        may
                        differ materially from those expressed or implied by such forward-looking statements.
                    </p>
                    <h4>Cautionary Notes to U.S. Investors Concerning Reserve and Resource Estimates</h4>

                    <p>

                        Q-Gold has prepared disclosure in accordance with Canadian reporting standards, which differ
                        from
                        the requirements of the U.S. Securities and Exchange Commission. Accordingly, information
                        contained
                        on this website providing descriptions of mineral deposits in accordance with National
                        Instrument
                        43-101 — Standards of Disclosure for Mineral Projects may not be comparable to similar
                        information
                        made public by other U.S. companies subject to the United States federal securities laws and the
                        rules and regulations thereunder.
                    </p>

                    <h4> Jurisdiction</h4>
                    <p>
                        The laws of the Province of Ontario and any applicable federal laws of Canada (in each case
                        without
                        regards to conflict of law principles) shall govern your use of this website. The courts of the
                        Province of Ontario shall have exclusive jurisdiction over any dispute arising out of your use
                        of this website.
                    </p>


                </div>

            </section>
            <Footer/>
        </div>
    );
};

export default LegalContent;
