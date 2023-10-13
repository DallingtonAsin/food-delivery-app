import React, { useState } from 'react';

export const MessageChatContext = React.createContext({
    channel: null,
    setChannel: (channel: any) => {},
    thread: null,
    setThread: (thread: any) => {},
});

export const MessageChatProvider = ({ children }: { children: any }) => {
    const [channel, setChannel] = useState<any>({});
    const [thread, setThread] = useState<any>(null);

    return <MessageChatContext.Provider value={{ channel, setChannel, thread, setThread }}>{children}</MessageChatContext.Provider>;
};

export const useMessagingChatContext = () => React.useContext(MessageChatContext);