"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Dummy data for chat list
const chatList = [
  {
    id: 1,
    name: "Nancy Zhao",
    company: "Xiamen Moon Global Trading Co., Ltd.",
    lastMessage: "Hello",
    unread: true,
  },
  {
    id: 2,
    name: "Sum mer",
    company: "Wuzhou Li Sheng Jewelry Co., Ltd.",
    lastMessage: "Thank you",
    unread: false,
  },
  {
    id: 3,
    name: "Polly Lin",
    company: "Xiamen Moon Global Trading Co., Ltd.",
    lastMessage: "Got it",
    unread: false,
  },
  {
    id: 4,
    name: "Lanning Mo",
    company: "Wuzhou Zhongshi Gems Co., Ltd.",
    lastMessage: "Hello",
    unread: false,
  },
];

// Dummy data for messages
const messagesByChat = {
  1: [
    {
      id: 1,
      sender: "Nancy Zhao",
      content: "Hello",
      timestamp: "2024-08-03 14:27",
      isSender: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Hello, How are You?",
      timestamp: "2024-08-03 14:27",
      isSender: true,
    },
  ],
  // Add messages for other chats as needed
};

const MessageComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-full">
      {/* Chat list */}
      <div className="w-1/3 border-r overflow-y-auto">
        <div className="">
          <Input placeholder="Click to search..." className="mb-4" />
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${
                selectedChat === chat.id ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`/avatar-${chat.id}.png`} alt={chat.name} />
                  <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.company}</p>
                  <p className="text-sm">{chat.lastMessage}</p>
                </div>
                {chat.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message display area */}
      <div className="w-2/3 flex flex-col">
        {selectedChat ? (
          <>
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`/avatar-${selectedChat}.png`}
                    alt={
                      chatList.find((chat) => chat.id === selectedChat)?.name
                    }
                  />
                  <AvatarFallback>
                    {chatList
                      .find((chat) => chat.id === selectedChat)
                      ?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">
                    {chatList.find((chat) => chat.id === selectedChat)?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {chatList.find((chat) => chat.id === selectedChat)?.company}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
              <div className="space-y-4">
                {messagesByChat[selectedChat]?.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isSender ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.isSender
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      } rounded-lg p-3`}
                    >
                      <p>{message.content}</p>
                      <span className="text-xs opacity-50">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex-shrink-0">
              <div className="w-full space-y-4">
                <div className="flex space-x-2">
                  <Button variant="outline">Rate supplier</Button>
                  <Button variant="outline">Start Order</Button>
                  <Button variant="outline">Logistics Inquiry</Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Please type message..."
                    className="flex-grow"
                  />
                  <Button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardFooter>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-xl">
              Select a chat to start messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageComponent;
