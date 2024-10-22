"use client";
import { useState } from "react";

type Message = {
  id: string;
  title: string;
  sender: string;
  date: string;
  status: string;
};

export default function MessageCenter() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      title: "Order Confirmation",
      sender: "Amazon",
      date: "2024-10-10",
      status: "Read",
    },
    {
      id: "2",
      title: "Shipping Notification",
      sender: "FedEx",
      date: "2024-10-11",
      status: "Unread",
    },
    {
      id: "3",
      title: "Account Update",
      sender: "Google",
      date: "2024-10-09",
      status: "Read",
    },
    {
      id: "4",
      title: "Invoice for Services",
      sender: "Upwork",
      date: "2024-10-12",
      status: "Unread",
    },
    {
      id: "5",
      title: "Security Alert",
      sender: "PayPal",
      date: "2024-10-08",
      status: "Read",
    },
    {
      id: "6",
      title: "Weekly Newsletter",
      sender: "LinkedIn",
      date: "2024-10-07",
      status: "Unread",
    },
    {
      id: "7",
      title: "Password Reset Request",
      sender: "GitHub",
      date: "2024-10-06",
      status: "Read",
    },
    {
      id: "8",
      title: "New Job Opportunities",
      sender: "Indeed",
      date: "2024-10-05",
      status: "Unread",
    },
    {
      id: "9",
      title: "Monthly Subscription",
      sender: "Netflix",
      date: "2024-10-04",
      status: "Read",
    },
    {
      id: "10",
      title: "Promotion Notification",
      sender: "Shopify",
      date: "2024-10-03",
      status: "Unread",
    },
  ]);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Messages</h2>
        <div className="mt-2 flex items-center">
          <select className="mr-2 border rounded">
            <option>Message Center</option>
          </select>
          <input
            type="text"
            placeholder="Click to search..."
            className="flex-grow p-2 border rounded"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 border-r">
          {/* Message list */}
          <ul className="divide-y">
            {messages.map((message) => (
              <li
                key={message.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
              >
                <h3 className="font-semibold">{message.title}</h3>
                <p className="text-sm text-gray-600">{message.sender}</p>
                <p className="text-sm text-gray-500">{message.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          {/* Message details and quotations */}
          <h3 className="text-lg font-semibold mb-4">Message Details</h3>
          {/* Add message details and quotation comparison here */}
        </div>
      </div>
    </div>
  );
}
