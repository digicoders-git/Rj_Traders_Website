import React from 'react';
import PolicyLayout from '../../components/PolicyLayout';

export default function ReturnPolicy() {
  return (
    <PolicyLayout title="Return Policy">
      <h2>Returns Eligibility</h2>
      <p>
        We want you to be completely satisfied with your purchase. If you are not satisfied, you may return eligible items within 30 days of receipt for a refund or exchange. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition as when you received it.
      </p>

      <h2>Non-Returnable Items</h2>
      <p>
        Certain items are not eligible for return, including custom-made or personalized products, hazardous materials, and items marked as final sale. Please check the product description for specific return information.
      </p>

      <h2>Return Process</h2>
      <p>
        To initiate a return, please contact our customer support team with your order number and the reason for the return. We will provide you with instructions on how to return the item. You are responsible for the cost of return shipping unless the item is defective or we made an error.
      </p>

      <h2>Refunds</h2>
      <p>
        Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.
      </p>

      <h2>Exchanges</h2>
      <p>
        If you would like to exchange an item for a different size or color, please follow the return process and place a new order for the desired item.
      </p>
    </PolicyLayout>
  );
}
