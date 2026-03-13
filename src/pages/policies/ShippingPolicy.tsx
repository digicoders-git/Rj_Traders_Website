import React from 'react';
import PolicyLayout from '../../components/PolicyLayout';

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy">
      <h2>Shipping Methods</h2>
      <p>
        We offer various shipping methods to meet your needs, including standard and expedited shipping. The available shipping methods and costs will be displayed at checkout based on your location and the items in your order.
      </p>

      <h2>Processing Time</h2>
      <p>
        Orders are typically processed within 1-3 business days. Please note that processing time may be longer during peak seasons or for custom-made products. You will receive a shipping confirmation email with tracking information once your order has shipped.
      </p>

      <h2>Delivery Times</h2>
      <p>
        Delivery times vary depending on the shipping method selected and your location. Standard shipping typically takes 3-7 business days, while expedited shipping takes 1-3 business days. Please note that these are estimates and not guaranteed delivery times.
      </p>

      <h2>Shipping Restrictions</h2>
      <p>
        We ship to most locations worldwide. However, there may be certain restrictions on shipping to certain countries or regions due to local laws or carrier limitations. If we are unable to ship to your location, we will notify you and cancel your order.
      </p>

      <h2>Damaged or Lost Shipments</h2>
      <p>
        If your order is damaged or lost during transit, please contact us immediately. We will work with the carrier to resolve the issue and ensure you receive your order or a refund.
      </p>
    </PolicyLayout>
  );
}
