import React from 'react'
import ChatEntry from './ChatEntry'
import PropTypes from 'prop-types'

function ChatLog({ ChatEntries }) {
    const ChatEntryComponents = ChatEntries.map((chatEntry) => {

        return (
            <li key={chatEntry.id}>
            <ChatEntry
                id={chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timestamp={chatEntry.timestamp}
                liked={chatEntry.liked}
            />
            </li>
        
        );
    })
    return (
        <section>
            <h2> Chat Log </h2>
            <ul> { ChatEntryComponents } </ul>
        </section>
    )
};

ChatLog.propTypes = {
    chatEntry: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
            liked: PropTypes.number.isRequired
        })
    )
}

export default ChatLog

// rfce 