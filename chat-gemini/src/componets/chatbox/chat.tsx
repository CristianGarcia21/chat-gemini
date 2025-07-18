import InputChat from "../box-input/input";
import ChatMessages from "../chat-messages/chat-messages";
import MessageBoard from "../message-board/message-board";



function ChatBox() {
    return ( 
        <div className="flex h-screen">
            <div className="w-1/5 bg-gray-100 p-4 border-r border-gray-300">
                <MessageBoard />
            </div>

            <div className="flex-1 flex flex-col p-4">
                <div className="flex-grow bg-white border rounded-lg mb-4 p-4 overflow-auto">
                    <ChatMessages />
                </div>

                <InputChat />
            </div>
            
        </div>
     );
}

export default ChatBox;