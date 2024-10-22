// app/messages/page.tsx
import MessageComponent from "@/components/messages/MessageComponent";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-200px)]">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="h-[calc(100vh-200px)]">
        <MessageComponent />
      </div>
    </div>
  );
}
