import React from 'react';
import Header from './Header';

const TermsAndConditions = () => {
  return (
    <div>
      <Header pageTitle="Terms & Conditions" />
      <div className="container mt-5 mb-5">
      <div className="card p-4">
        <h3>Account Registration</h3>
        <ul>
          <li>To use certain features of the service, you may be required to register for an account.</li>
          <li>You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
        </ul>
        <h3>User Conduct</h3>
        <ul>
          <li>You agree not to use the service for any unlawful or prohibited purpose or in any way that could damage, disable, overburden, or impair the service.</li>
          <li>You shall not attempt to gain unauthorized access to any portion or feature of the service, or any other systems or networks connected to the service.</li>
        </ul>
        <h3>Ordering and Transactions</h3>
        <ul>
          <li>Users may place orders through our platform for food and beverages offered by participating restaurants or vendors.</li>
          <li>Prices, descriptions, and availability of items are subject to change without notice. We do not guarantee the accuracy of information about products and services on the platform.</li>
          <li>Payments made through our platform are processed by secure payment gateways. We do not store credit/debit card information.</li>
        </ul>
        <h3>Intellectual Property</h3>
        <ul>
          <li>All content on the website, including logos, trademarks, text, images, graphics, and software, are owned by or licensed to us and are protected by intellectual property laws.</li>
        </ul>
        <h3>Limitation of Liability</h3>
        <ul>
          <li>We strive to provide accurate and up-to-date information, but we do not warrant the completeness, accuracy, or reliability of any information on the website.</li>
          <li>We shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use or inability to use the service.</li>
        </ul>
        <h3>Governing Law</h3>
        <ul>
          <li>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</li>
        </ul>
        <h3>Changes to Terms</h3>
        <ul>
          <li>We reserve the right, at our sole discretion, to modify or replace these Terms at any time without notice.</li>
        </ul>
        <h3>Contact Information</h3>
        <ul>
        <li>If you have any questions about these Terms, please contact us at +916391058103.</li>
        </ul>
       

        {/* Include other sections as per the sample content provided earlier */}
      </div>
    </div>
    </div>
  );
}

export default TermsAndConditions;
