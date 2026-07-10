"use client";

import { postAPI } from "@/lib/apiCall";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface Props {
  courseId: number;
  amount?: number;
  courseTitle: string;
}

export default function BuyCourseButton({
  courseId,
  amount,
  courseTitle,
}: Props) {

  const handlePayment = async () => {

    try {

      // CREATE ORDER

      const orderResponse = await postAPI('/create-order',{course_id: courseId,});

      const orderData = await orderResponse;

      if (!orderData.success) {
        toast(orderData?.message);
      }

      const order = orderData.data;

      if(order.action === 'enrolled'){
        window.location.href = "/student/courses";
      }

      // OPEN RAZORPAY

      const options = {
        key: process.env.NEXT_PUBLIC_ROZARPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,
        name: "Edducator",
        description: courseTitle,
        order_id: order.id,

        handler: async function (response: any) {

          // VERIFY PAYMENT
          const payload = {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                booking_id: order.notes.booking_id,
            }

          const verifyResponse = await postAPI('/verify-payment',payload);

          const verifyData = await verifyResponse;

          if (verifyData.success) {

            // redirect
            window.location.href = "/student/courses";

          }
        },

        prefill: {
          name: order.notes.name,
          email: order.notes.email,
        },

        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new (window as any).Razorpay(
        options
      );

      paymentObject.open();

    } catch (error: any) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Enroll
    </Button>
  );
}