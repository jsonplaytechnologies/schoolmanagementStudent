import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { MessageSquare, Send, Search, Paperclip, MoreVertical, User } from 'lucide-react'

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    height: 'calc(100vh - 6rem)'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '350px 1fr',
    height: '100%',
    gap: '1rem'
  },
  sidebar: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  sidebarHeader: {
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '1rem'
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white'
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '0.875rem'
  },
  conversationList: {
    flex: 1,
    overflowY: 'auto'
  },
  conversationItem: {
    padding: '1rem',
    borderBottom: '1px solid #f3f4f6',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  conversationItemActive: {
    backgroundColor: '#f3f4f6'
  },
  conversationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  conversationName: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827'
  },
  conversationTime: {
    fontSize: '0.75rem',
    color: '#9ca3af'
  },
  conversationPreview: {
    fontSize: '0.875rem',
    color: '#6b7280',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  chatArea: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  chatHeader: {
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatHeaderInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem'
  },
  chatName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827'
  },
  chatStatus: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  messagesArea: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    backgroundColor: '#f9fafb'
  },
  message: {
    marginBottom: '1rem',
    display: 'flex',
    gap: '0.75rem'
  },
  messageReceived: {
    justifyContent: 'flex-start'
  },
  messageSent: {
    justifyContent: 'flex-end'
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '0.75rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.875rem'
  },
  messageBubbleReceived: {
    backgroundColor: 'white',
    color: '#374151',
    borderBottomLeftRadius: '0.25rem'
  },
  messageBubbleSent: {
    backgroundColor: '#3b82f6',
    color: 'white',
    borderBottomRightRadius: '0.25rem'
  },
  messageTime: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    marginTop: '0.25rem'
  },
  inputArea: {
    padding: '1rem',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '1.5rem',
    fontSize: '0.875rem',
    outline: 'none'
  },
  button: {
    padding: '0.75rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  },
  sendButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  iconButton: {
    backgroundColor: 'transparent',
    color: '#6b7280'
  },
  unreadBadge: {
    backgroundColor: '#ef4444',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.125rem 0.5rem',
    borderRadius: '9999px',
    minWidth: '1.25rem',
    textAlign: 'center'
  }
}

export default function Messaging() {
  const { t, language } = useLanguage()
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'M. OBIANG Jean',
      role: language === 'fr' ? 'Professeur - Mathématiques' : 'Professor - Mathematics',
      lastMessage: language === 'fr' ? 'Le devoir est pour vendredi.' : 'Homework is due Friday.',
      time: '10:30',
      unread: 2
    },
    {
      id: 2,
      name: 'Mme ESSONO Marie',
      role: language === 'fr' ? 'Professeur - Français' : 'Professor - French',
      lastMessage: language === 'fr' ? 'Merci pour votre message.' : 'Thank you for your message.',
      time: language === 'fr' ? 'Hier' : 'Yesterday',
      unread: 0
    },
    {
      id: 3,
      name: language === 'fr' ? 'Administration' : 'Administration',
      role: language === 'fr' ? 'École' : 'School',
      lastMessage: language === 'fr' ? 'Réunion parents-professeurs le 20/09' : 'Parent-teacher meeting on 20/09',
      time: '15/09',
      unread: 1
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'M. OBIANG',
      text: language === 'fr' ? 'Bonjour, j\'ai une question concernant l\'exercice du chapitre 2.' : 'Hello, I have a question about the chapter 2 exercise.',
      time: '10:25',
      isSent: true
    },
    {
      id: 2,
      sender: 'Moi',
      text: language === 'fr' ? 'Bonjour, je suis disponible pour répondre à vos questions.' : 'Hello, I am available to answer your questions.',
      time: '10:28',
      isSent: false
    },
    {
      id: 3,
      sender: 'M. OBIANG',
      text: language === 'fr' ? 'Le devoir est pour vendredi prochain, n\'est-ce pas ?' : 'The homework is due next Friday, right?',
      time: '10:30',
      isSent: true
    }
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('')
    }
  }

  const getInitials = (name) => {
    const parts = name.split(' ')
    return parts.map(p => p[0]).join('').substring(0, 2)
  }

  return (
    <div style={styles.container}>
      <div style={styles.mainGrid}>
        {/* Conversations Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h1 style={styles.title}>
              {language === 'fr' ? 'Messages' : 'Messages'}
            </h1>
            <div style={styles.searchBox}>
              <Search style={{ width: '1rem', height: '1rem', color: '#9ca3af' }} />
              <input
                type="text"
                style={styles.searchInput}
                placeholder={language === 'fr' ? 'Rechercher...' : 'Search...'}
              />
            </div>
          </div>
          <div style={styles.conversationList}>
            {conversations.map((conv, index) => (
              <div
                key={conv.id}
                style={{
                  ...styles.conversationItem,
                  ...(selectedConversation === index ? styles.conversationItemActive : {})
                }}
                onClick={() => setSelectedConversation(index)}
                onMouseEnter={(e) => {
                  if (selectedConversation !== index) {
                    e.currentTarget.style.backgroundColor = '#f9fafb'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedConversation !== index) {
                    e.currentTarget.style.backgroundColor = 'white'
                  }
                }}
              >
                <div style={styles.conversationHeader}>
                  <div>
                    <div style={styles.conversationName}>{conv.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{conv.role}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                    <span style={styles.conversationTime}>{conv.time}</span>
                    {conv.unread > 0 && <span style={styles.unreadBadge}>{conv.unread}</span>}
                  </div>
                </div>
                <p style={styles.conversationPreview}>{conv.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div style={styles.chatArea}>
          <div style={styles.chatHeader}>
            <div style={styles.chatHeaderInfo}>
              <div style={styles.avatar}>{getInitials(conversations[selectedConversation].name)}</div>
              <div>
                <div style={styles.chatName}>{conversations[selectedConversation].name}</div>
                <div style={styles.chatStatus}>{conversations[selectedConversation].role}</div>
              </div>
            </div>
            <button style={{ ...styles.button, ...styles.iconButton }}>
              <MoreVertical style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>

          <div style={styles.messagesArea}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.message,
                  ...(msg.isSent ? styles.messageSent : styles.messageReceived)
                }}
              >
                {!msg.isSent && (
                  <div style={{ ...styles.avatar, width: '2rem', height: '2rem', fontSize: '0.75rem' }}>
                    {getInitials(msg.sender)}
                  </div>
                )}
                <div>
                  <div
                    style={{
                      ...styles.messageBubble,
                      ...(msg.isSent ? styles.messageBubbleSent : styles.messageBubbleReceived)
                    }}
                  >
                    {msg.text}
                  </div>
                  <div style={{ ...styles.messageTime, textAlign: msg.isSent ? 'right' : 'left' }}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <button style={{ ...styles.button, ...styles.iconButton }}>
              <Paperclip style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
            <input
              type="text"
              style={styles.input}
              placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage()
                }
              }}
            />
            <button
              style={{ ...styles.button, ...styles.sendButton }}
              onClick={handleSendMessage}
            >
              <Send style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
