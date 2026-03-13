import React from 'react';
import PolicyLayout from '../../components/PolicyLayout';

export default function TermsConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern RJ Traders relationship with you in relation to this website.
        </p>

        <p>
          The term RJ Traders or ‘us’ or ‘we’ refers to the owner of the website whose registered office is RJ Traders. The term ‘you’ refers to the user or viewer of our website.
        </p>

        <div className="pt-4">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Terms of Use</h2>
          <p className="mb-4">
            The use of this website is subject to the following terms of use:
          </p>

          <ul className="list-disc pl-6 space-y-4 marker:text-primary">
            <li>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
            </li>
            <li>
              You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
            </li>
            <li>
              It shall be your own responsibility to ensure that any products or information available through this website meet your specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to RJ Traders. This material includes, but is not limited to, the design, layout, look, appearance and graphics.
            </li>
            <li>
              Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
            </li>
            <li>
              From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.
            </li>
            <li>
              They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </li>
            <li>
              You may not create a link to this website from another website or document without RJ Traders prior written consent.
            </li>
            <li>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </li>
          </ul>
        </div>
      </div>
    </PolicyLayout>
  );
}
