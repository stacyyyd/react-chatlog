import React from 'react'
import ChatEntry from './ChatEntry'
import PropTypes from 'prop-types'

function ChatLog({ entries, setLikes }) {
    const ChatEntryComponents = entries.map((chatEntry) => {

        return (
            <li key={chatEntry.id}>
            <ChatEntry
                id={chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
                liked={chatEntry.liked}
                setLikes = {setLikes}
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
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.number.isRequired
        })
    ),
    setLikes : PropTypes.func
}

export default ChatLog

// rfce 