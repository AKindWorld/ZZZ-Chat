import React, { useState, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

const CharacterModal = ({ isOpen, onClose, onSelectCharacter, side }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('../src/data/characters.json')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error loading characters:', error);
      });
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-xl w-1/2 max-w-lg">
        <div className='flex items-center'>
          <h2 className="text-lg font-bold flex-grow text-white">Choose a Character for {side}</h2>
          <button onClick={onClose} className="p-0 bg-transparent m-0 hover:border-0 border-0 focus:outline-none">
            <svg className="size-16 transition-all group" width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="#BF2005"/>
              <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="black" fill-opacity="0.2"/>
              <path className="fill-[#BF2005] group-hover:fill-white" d="M30.2051 3H12.5C7.2533 3 3 7.25329 3 12.5C3 17.7467 7.2533 22 12.5 22H20.8149C23.9875 22 26.9258 20.3296 28.5485 17.6034L33.6422 9.04593C35.2293 6.37962 33.308 3 30.2051 3Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" stroke="#BF2005" stroke-width="3" stroke-linecap="round"/>
              <mask id="path-4-inside-1_832_899" fill="white">
                <path d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z"/>
              </mask>
              <path className="group-hover:fill-[#BF2005]" d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z" fill="black"/>
              <path className="group-hover:fill-[#BF2005]" d="M17.7707 11.828L16.3565 13.2422L17.7705 14.6563L19.1847 13.2424L17.7707 11.828ZM16.828 12.7707L18.2422 14.1849L19.6564 12.7707L18.2422 11.3565L16.828 12.7707ZM17.7707 13.7133L19.1847 12.299L17.7705 10.8851L16.3565 12.2991L17.7707 13.7133ZM18.714 12.7707L17.2998 11.3565L15.8856 12.7707L17.2998 14.1849L18.714 12.7707ZM20.128 16.0701L18.7139 17.4845L20.128 16.0701ZM14.4713 15.1273L13.0571 13.7131L14.4713 15.1273ZM18.7139 8.05687L16.3566 10.4136L19.1847 13.2424L21.542 10.8856L18.7139 8.05687ZM19.1849 10.4138L16.8282 8.05712L13.9998 10.8855L16.3565 13.2422L19.1849 10.4138ZM13.0571 11.8282L15.4138 14.1849L18.2422 11.3565L15.8855 8.99979L13.0571 11.8282ZM15.4138 11.3565L13.0571 13.7131L15.8855 16.5415L18.2422 14.1849L15.4138 11.3565ZM16.8282 17.4842L19.1849 15.1275L16.3565 12.2991L13.9998 14.6558L16.8282 17.4842ZM16.3566 15.1277L18.7139 17.4845L21.542 14.6557L19.1847 12.299L16.3566 15.1277ZM22.4849 13.7131L20.1282 11.3565L17.2998 14.1849L19.6564 16.5415L22.4849 13.7131ZM20.1282 14.1849L22.4849 11.8282L19.6564 8.99981L17.2998 11.3565L20.1282 14.1849ZM22.4849 17.4842C23.5262 16.4429 23.5262 14.7545 22.4849 13.7131L19.6564 16.5415C19.1357 16.0208 19.1357 15.1765 19.6564 14.6558L22.4849 17.4842ZM18.7139 17.4845C19.7553 18.5256 21.4436 18.5255 22.4849 17.4842L19.6564 14.6558C20.1771 14.1351 21.0213 14.1351 21.542 14.6557L18.7139 17.4845ZM13.0571 17.4842C14.0985 18.5256 15.7869 18.5256 16.8282 17.4842L13.9998 14.6558C14.5205 14.135 15.3648 14.135 15.8855 14.6558L13.0571 17.4842ZM13.0571 8.05712C12.0158 9.09848 12.0158 10.7869 13.0571 11.8282L15.8855 8.99979C16.4063 9.52052 16.4063 10.3648 15.8855 10.8855L13.0571 8.05712ZM16.8282 8.05712C15.7869 7.01576 14.0985 7.01576 13.0571 8.05712L15.8855 10.8855C15.3648 11.4063 14.5205 11.4063 13.9998 10.8855L16.8282 8.05712ZM13.0571 13.7131C12.0158 14.7545 12.0158 16.4429 13.0571 17.4842L15.8855 14.6558C16.4063 15.1765 16.4063 16.0208 15.8855 16.5415L13.0571 13.7131ZM22.4849 11.8282C23.5262 10.7869 23.5262 9.09846 22.4849 8.05709L19.6564 10.8855C19.1357 10.3648 19.1357 9.52054 19.6564 8.99981L22.4849 11.8282ZM21.542 10.8856C21.0213 11.4062 20.1771 11.4062 19.6564 10.8855L22.4849 8.05709C21.4436 7.0158 19.7553 7.01571 18.7139 8.05687L21.542 10.8856Z" fill="black" mask="url(#path-4-inside-1_832_899)"/>
            </svg>  
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Array.isArray(characters) && characters.map((character, index) => (
            <div
              key={index}
              className="cursor-pointer text-center"
              onClick={() => {
                onSelectCharacter(character);
                onClose();
              }}
            >
              <img src={character.image} alt={character.name} className="w-20 h-20 mx-auto rounded-full" />
              <p className='text-white'>{character.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const UserAddedMessage = ({ message }) => <div className='rounded-full p-2 px-4 text-white '>
    <div className='flex items-center'>
      <svg className="mx-2 size-[5]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke-white" cx="10" cy="10" r="9" stroke="#FFF" stroke-width="2"/>
        <path className="fill-white" d="M8 4.5C8 4.22386 8.22386 4 8.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H8.5C8.22386 12 8 11.7761 8 11.5V4.5Z" fill="#00A2FF"/>
        <path className="fill-white"  d="M8 13.5C8 13.2239 8.22386 13 8.5 13H11.5C11.7761 13 12 13.2239 12 13.5V15.5C12 15.7761 11.7761 16 11.5 16H8.5C8.22386 16 8 15.7761 8 15.5V13.5Z" fill="#00A2FF"/>
      </svg>
      {message}
    </div>
  </div>;
const UserBlockedMessage = ({ message }) => <div>{message}</div>;

const SystemMessagesModal = ({ isOpen, onClose, onSelectMessage }) => {
  const [customMessage, setCustomMessage] = useState('');
  const [editingMessageIndex, setEditingMessageIndex] = useState(null);

  const systemMessages = [
    { component: UserAddedMessage, props: { message: `User added you` } },
    { component: UserBlockedMessage, props: { message: 'User blocked you' } },
  ];

  const handleSelectMessage = (index) => {
    setEditingMessageIndex(index);
    setCustomMessage(systemMessages[index].props.message);
  };

  const handleSaveMessage = () => {
    systemMessages[editingMessageIndex].props.message = customMessage;
    const MessageComponent = systemMessages[editingMessageIndex].component;
    onSelectMessage(() => <MessageComponent {...systemMessages[editingMessageIndex].props} />);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-xl w-full m-4 md:w-1/2 md:m-0 max-w-lg">
        <div className="">
        {editingMessageIndex === null ? (
          <div>
            <div className='flex items-center'>
              <h2 className="text-lg font-bold tracking-wider mb-4 text-white flex-grow">Select System Message</h2>
              <button onClick={onClose} className="p-0 bg-transparent m-0 hover:border-0 border-0 focus:outline-none">
                  <svg className="size-16 transition-all group" width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="#BF2005"/>
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="black" fill-opacity="0.2"/>
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M30.2051 3H12.5C7.2533 3 3 7.25329 3 12.5C3 17.7467 7.2533 22 12.5 22H20.8149C23.9875 22 26.9258 20.3296 28.5485 17.6034L33.6422 9.04593C35.2293 6.37962 33.308 3 30.2051 3Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" stroke="#BF2005" stroke-width="3" stroke-linecap="round"/>
                    <mask id="path-4-inside-1_832_899" fill="white">
                      <path d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z"/>
                    </mask>
                    <path className="group-hover:fill-[#BF2005]" d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z" fill="black"/>
                    <path className="group-hover:fill-[#BF2005]" d="M17.7707 11.828L16.3565 13.2422L17.7705 14.6563L19.1847 13.2424L17.7707 11.828ZM16.828 12.7707L18.2422 14.1849L19.6564 12.7707L18.2422 11.3565L16.828 12.7707ZM17.7707 13.7133L19.1847 12.299L17.7705 10.8851L16.3565 12.2991L17.7707 13.7133ZM18.714 12.7707L17.2998 11.3565L15.8856 12.7707L17.2998 14.1849L18.714 12.7707ZM20.128 16.0701L18.7139 17.4845L20.128 16.0701ZM14.4713 15.1273L13.0571 13.7131L14.4713 15.1273ZM18.7139 8.05687L16.3566 10.4136L19.1847 13.2424L21.542 10.8856L18.7139 8.05687ZM19.1849 10.4138L16.8282 8.05712L13.9998 10.8855L16.3565 13.2422L19.1849 10.4138ZM13.0571 11.8282L15.4138 14.1849L18.2422 11.3565L15.8855 8.99979L13.0571 11.8282ZM15.4138 11.3565L13.0571 13.7131L15.8855 16.5415L18.2422 14.1849L15.4138 11.3565ZM16.8282 17.4842L19.1849 15.1275L16.3565 12.2991L13.9998 14.6558L16.8282 17.4842ZM16.3566 15.1277L18.7139 17.4845L21.542 14.6557L19.1847 12.299L16.3566 15.1277ZM22.4849 13.7131L20.1282 11.3565L17.2998 14.1849L19.6564 16.5415L22.4849 13.7131ZM20.1282 14.1849L22.4849 11.8282L19.6564 8.99981L17.2998 11.3565L20.1282 14.1849ZM22.4849 17.4842C23.5262 16.4429 23.5262 14.7545 22.4849 13.7131L19.6564 16.5415C19.1357 16.0208 19.1357 15.1765 19.6564 14.6558L22.4849 17.4842ZM18.7139 17.4845C19.7553 18.5256 21.4436 18.5255 22.4849 17.4842L19.6564 14.6558C20.1771 14.1351 21.0213 14.1351 21.542 14.6557L18.7139 17.4845ZM13.0571 17.4842C14.0985 18.5256 15.7869 18.5256 16.8282 17.4842L13.9998 14.6558C14.5205 14.135 15.3648 14.135 15.8855 14.6558L13.0571 17.4842ZM13.0571 8.05712C12.0158 9.09848 12.0158 10.7869 13.0571 11.8282L15.8855 8.99979C16.4063 9.52052 16.4063 10.3648 15.8855 10.8855L13.0571 8.05712ZM16.8282 8.05712C15.7869 7.01576 14.0985 7.01576 13.0571 8.05712L15.8855 10.8855C15.3648 11.4063 14.5205 11.4063 13.9998 10.8855L16.8282 8.05712ZM13.0571 13.7131C12.0158 14.7545 12.0158 16.4429 13.0571 17.4842L15.8855 14.6558C16.4063 15.1765 16.4063 16.0208 15.8855 16.5415L13.0571 13.7131ZM22.4849 11.8282C23.5262 10.7869 23.5262 9.09846 22.4849 8.05709L19.6564 10.8855C19.1357 10.3648 19.1357 9.52054 19.6564 8.99981L22.4849 11.8282ZM21.542 10.8856C21.0213 11.4062 20.1771 11.4062 19.6564 10.8855L22.4849 8.05709C21.4436 7.0158 19.7553 7.01571 18.7139 8.05687L21.542 10.8856Z" fill="black" mask="url(#path-4-inside-1_832_899)"/>
                  </svg>  
                </button>
              </div>
            <div className="grid grid-cols-1 gap-8">
              {systemMessages.map((Message, index) => {
                const Component = Message.component;
                return (
                  <button
                    key={index}
                    className="w-full p-2 rounded text-left"
                    onClick={() => handleSelectMessage(index)}
                  >
                    <Component {...Message.props} />
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
            <>
              <div className="text-white flex flex-row items-center">
                <button onClick={() => setEditingMessageIndex(null)} className="p-0 bg-transparent m-0 hover:border-0 border-0 focus:outline-none">
                <svg className="size-16 transition-all group" width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="group-hover:fill-[#BF2005]" d="M26.25 2H8.69062C4.83488 2 2.43011 6.17978 4.36808 9.51309L9.60826 18.5262C11.3985 21.6054 14.6915 23.5 18.2533 23.5H26.25C32.1871 23.5 37 18.6871 37 12.75C37 6.81294 32.1871 2 26.25 2Z" fill="black" stroke="#BF2005" stroke-width="3" stroke-linecap="round"/>
                  <path className="fill-[#BF2005] group-hover:fill-white" d="M15.076 10.0506C15.1517 10.2334 15.2799 10.3896 15.4444 10.4995C15.6088 10.6094 15.8022 10.668 16 10.668H22.6667V8.66797H18.414L19.0407 8.0413C19.2228 7.85261 19.3234 7.59996 19.321 7.33777C19.3186 7.07557 19.2133 6.82481 19.0278 6.63949C18.8424 6.45416 18.5915 6.34911 18.3293 6.34696C18.0671 6.34481 17.8145 6.44572 17.626 6.62797L15.2927 8.9613C15.1529 9.10113 15.0578 9.27924 15.0192 9.47312C14.9806 9.66701 15.0004 9.86798 15.076 10.0506Z" fill="#BF2005"/>
                  <path className="fill-[#BF2005] group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M15.076 9.2853C15.1517 9.10255 15.2799 8.94636 15.4444 8.83647C15.6088 8.72659 15.8022 8.66795 16 8.66797H22.6667C23.9928 8.66797 25.2645 9.19475 26.2022 10.1324C27.1399 11.0701 27.6667 12.3419 27.6667 13.668C27.6667 14.9941 27.1399 16.2658 26.2022 17.2035C25.2645 18.1412 23.9928 18.668 22.6667 18.668H20.6667C20.4015 18.668 20.1471 18.5626 19.9596 18.3751C19.772 18.1875 19.6667 17.9332 19.6667 17.668C19.6667 17.4028 19.772 17.1484 19.9596 16.9609C20.1471 16.7733 20.4015 16.668 20.6667 16.668H22.6667C23.4623 16.668 24.2254 16.3519 24.788 15.7893C25.3506 15.2267 25.6667 14.4636 25.6667 13.668C25.6667 12.8723 25.3506 12.1093 24.788 11.5466C24.2254 10.984 23.4623 10.668 22.6667 10.668H18.414L19.0407 11.2946C19.2228 11.4833 19.3234 11.736 19.321 11.9982C19.3186 12.2604 19.2133 12.5111 19.0278 12.6965C18.8424 12.8818 18.5915 12.9868 18.3293 12.989C18.0671 12.9911 17.8145 12.8902 17.626 12.708L15.2927 10.3746C15.1529 10.2348 15.0578 10.0567 15.0192 9.86281C14.9806 9.66893 15.0004 9.46796 15.076 9.2853Z" fill="#BF2005"/>
                </svg>
                </button>
                <span className='p-2 pl-4 text-lg font-bold tracking-wider text-white flex-grow'>Customize message</span>
                <button onClick={onClose} className="p-0 bg-transparent m-0 hover:border-0 border-0 focus:outline-none">
                  <svg className="size-16 transition-all group" width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="#BF2005"/>
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="black" fill-opacity="0.2"/>
                    <path className="fill-[#BF2005] group-hover:fill-white" d="M30.2051 3H12.5C7.2533 3 3 7.25329 3 12.5C3 17.7467 7.2533 22 12.5 22H20.8149C23.9875 22 26.9258 20.3296 28.5485 17.6034L33.6422 9.04593C35.2293 6.37962 33.308 3 30.2051 3Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" stroke="#BF2005" stroke-width="3" stroke-linecap="round"/>
                    <mask id="path-4-inside-1_832_899" fill="white">
                      <path d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z"/>
                    </mask>
                    <path className="group-hover:fill-[#BF2005]" d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z" fill="black"/>
                    <path className="group-hover:fill-[#BF2005]" d="M17.7707 11.828L16.3565 13.2422L17.7705 14.6563L19.1847 13.2424L17.7707 11.828ZM16.828 12.7707L18.2422 14.1849L19.6564 12.7707L18.2422 11.3565L16.828 12.7707ZM17.7707 13.7133L19.1847 12.299L17.7705 10.8851L16.3565 12.2991L17.7707 13.7133ZM18.714 12.7707L17.2998 11.3565L15.8856 12.7707L17.2998 14.1849L18.714 12.7707ZM20.128 16.0701L18.7139 17.4845L20.128 16.0701ZM14.4713 15.1273L13.0571 13.7131L14.4713 15.1273ZM18.7139 8.05687L16.3566 10.4136L19.1847 13.2424L21.542 10.8856L18.7139 8.05687ZM19.1849 10.4138L16.8282 8.05712L13.9998 10.8855L16.3565 13.2422L19.1849 10.4138ZM13.0571 11.8282L15.4138 14.1849L18.2422 11.3565L15.8855 8.99979L13.0571 11.8282ZM15.4138 11.3565L13.0571 13.7131L15.8855 16.5415L18.2422 14.1849L15.4138 11.3565ZM16.8282 17.4842L19.1849 15.1275L16.3565 12.2991L13.9998 14.6558L16.8282 17.4842ZM16.3566 15.1277L18.7139 17.4845L21.542 14.6557L19.1847 12.299L16.3566 15.1277ZM22.4849 13.7131L20.1282 11.3565L17.2998 14.1849L19.6564 16.5415L22.4849 13.7131ZM20.1282 14.1849L22.4849 11.8282L19.6564 8.99981L17.2998 11.3565L20.1282 14.1849ZM22.4849 17.4842C23.5262 16.4429 23.5262 14.7545 22.4849 13.7131L19.6564 16.5415C19.1357 16.0208 19.1357 15.1765 19.6564 14.6558L22.4849 17.4842ZM18.7139 17.4845C19.7553 18.5256 21.4436 18.5255 22.4849 17.4842L19.6564 14.6558C20.1771 14.1351 21.0213 14.1351 21.542 14.6557L18.7139 17.4845ZM13.0571 17.4842C14.0985 18.5256 15.7869 18.5256 16.8282 17.4842L13.9998 14.6558C14.5205 14.135 15.3648 14.135 15.8855 14.6558L13.0571 17.4842ZM13.0571 8.05712C12.0158 9.09848 12.0158 10.7869 13.0571 11.8282L15.8855 8.99979C16.4063 9.52052 16.4063 10.3648 15.8855 10.8855L13.0571 8.05712ZM16.8282 8.05712C15.7869 7.01576 14.0985 7.01576 13.0571 8.05712L15.8855 10.8855C15.3648 11.4063 14.5205 11.4063 13.9998 10.8855L16.8282 8.05712ZM13.0571 13.7131C12.0158 14.7545 12.0158 16.4429 13.0571 17.4842L15.8855 14.6558C16.4063 15.1765 16.4063 16.0208 15.8855 16.5415L13.0571 13.7131ZM22.4849 11.8282C23.5262 10.7869 23.5262 9.09846 22.4849 8.05709L19.6564 10.8855C19.1357 10.3648 19.1357 9.52054 19.6564 8.99981L22.4849 11.8282ZM21.542 10.8856C21.0213 11.4062 20.1771 11.4062 19.6564 10.8855L22.4849 8.05709C21.4436 7.0158 19.7553 7.01571 18.7139 8.05687L21.542 10.8856Z" fill="black" mask="url(#path-4-inside-1_832_899)"/>
                  </svg>  
                </button>
              </div>
              <input className="rounded-full bg-white text-gray-600 p-4 py-2 my-4 w-full" type="text" value={customMessage} onChange={e => setCustomMessage(e.target.value)} />
              <div className='flex flex-row justify-between'>
                <button onClick={handleSaveMessage} className="mt-4 animate-color-change text-black hover:tracking-wider p-2 rounded-full w-full">Okay</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


const EditMessageModal = ({ isOpen, onClose, onSave, messageContent }) => {
  const [newContent, setNewContent] = useState(messageContent);

  useEffect(() => {
    setNewContent(messageContent);
  }, [messageContent]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-lg w-full m-4 md:w-1/2 md:m-0 max-w-md">
        <h2 className="text-xl mb-4 text-white tracking-wide">Edit Message</h2>
        <textarea
          className="w-full border p-2 rounded-lg bg-gray-600 text-white focus:outline-none ring-0 border-black"
          rows="4"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSave(newContent);
            }
          }}
        ></textarea>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-500 text-white p-2 px-4 mx-2 rounded-full">Cancel</button>
          <button onClick={() => onSave(newContent)} className="bg-[#fadc00] text-black p-2 px-4 rounded-full border-2 border-[#fadc00]/40">Save</button>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedSide, setSelectedSide] = useState('left');
  const [leftProfile, setLeftProfile] = useState(null);
  const [rightProfile, setRightProfile] = useState(null);
  const [leftName, setLeftName] = useState("Untitled");
  const [rightName, setRightName] = useState("Untitled");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileSide, setProfileSide] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editMessageIndex, setEditMessageIndex] = useState(null);
  const [editMessageContent, setEditMessageContent] = useState('');
  const [isChangingColorsEnabled, setIsChangingColorsEnabled] = useState(true);
  const [isAnimatedBackgroundEnabled, setIsAnimatedBackgroundEnabled] = useState(true);
  const [isSystemModalOpen, setIsSystemModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDownExportOptionsOpen, setIsDropDownExportOptionsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropDownExportOptions = () => {
    setIsDropDownExportOptionsOpen(!isDropDownExportOptionsOpen);
  };

  const addMessage = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { side: selectedSide, type: 'text', content: inputText }]);
    setInputText('');
  };

  const addSystemMessage = (MessageComponent) => {
    setMessages([...messages, { side: 'system', type: 'component', content: <MessageComponent /> }]);
  };

  const openCharacterModal = (side) => {
    setProfileSide(side);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
      
      if (!isInputFocused && event.key === "l") {
        setSelectedSide(selectedSide === "left" ? "right" : "left");
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSide]);

  const handleImageUpload = async (e, side, isProfile = false) => {
    const file = e.target.files[0];
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      if (isProfile) {
        if (side === 'left') {
          setLeftProfile(imageData);
          sessionStorage.setItem('leftProfile', imageData);
        } else {
          setRightProfile(imageData);
          sessionStorage.setItem('rightProfile', imageData);
        }
      } else {
        setMessages([...messages, { side, type: 'image', content: imageData }]);
      }
    };
    reader.readAsDataURL(file);
  };
  
  useEffect(() => {
    const leftStoredProfile = sessionStorage.getItem('leftProfile');
    const rightStoredProfile = sessionStorage.getItem('rightProfile');
    
    if (leftStoredProfile) setLeftProfile(leftStoredProfile);
    if (rightStoredProfile) setRightProfile(rightStoredProfile);
  }, []);
  
  const editMessage = (index) => {
    setEditMessageIndex(index);
    setEditMessageContent(messages[index].content);
    setIsEditModalOpen(true);
  };

  const handleSaveEditedMessage = (newContent) => {
    const newMessages = [...messages];
    newMessages[editMessageIndex].content = newContent;
    setMessages(newMessages);
    setIsEditModalOpen(false);
  };

  const deleteMessage = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  };

  const handleSelectCharacter = (character) => {
    if (profileSide === 'left') {
      setLeftProfile(character.image);
      setLeftName(character.name);
    } else {
      setRightProfile(character.image);
      setRightName(character.name);
    }
  };


  const exportChat = () => {
    const targetDiv = document.getElementById('main-chat-window');
    const messageInputBarDiv = document.getElementById('message-bar-input');

    if (!targetDiv) {
      console.error('Error: Main Chat Window div not found.');
      return;
    }
    targetDiv.style.borderRadius = '0px';

    const originalPlaceholder = messageInputBarDiv.placeholder;
    messageInputBarDiv.placeholder = '';

    const backgroundImage = 'url(../public/assets/BG_background_ZZZChat_with_pattern_dark-2.png)'; //TODO: need to add perfectly a tiled image later 
    targetDiv.style.backgroundImage = backgroundImage;
    targetDiv.style.backgroundSize = 'auto';
    targetDiv.style.backgroundRepeat = 'repeat';
  
    html2canvas(targetDiv).then((canvas) => {
      targetDiv.style.backgroundImage = '';
      targetDiv.style.backgroundSize = '';
      targetDiv.style.backgroundRepeat = '';
      targetDiv.style.borderRadius = '';

      messageInputBarDiv.placeholder = originalPlaceholder;
  
      const link = document.createElement('a');
      link.download = `ZZZChat ${leftName} - ${rightName} - ${new Date().toISOString()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  


  const exportChatAsText = () => {
    let chatText = messages.map(message => {
      const sender = message.side === 'left' ? leftName : rightName;
      const content = message.type === 'text' ? message.content : '[ Image ]';
      return `${sender}: ${content}`;
    }).join('\n');

    const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.download = `ZZZChat ${leftName} - ${rightName} - ${new Date().toISOString()}.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
  };


  const exportChatAsJSON = () => {
    const messagesCopy = messages.map(message => ({
      ...message,
      content: message.type === 'text' ? message.content : 'image',
    }));

    const chatData = {
      leftName,
      rightName,
      messages: messagesCopy,
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.download = `ZZZChat ${leftName} - ${rightName} - ${new Date().toISOString()}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div className="App flex h-max bg-gray-800">
      <div className={`w-full h-full overflow-hidden fixed top-0 left-0 bg-[url('/assets/BG_background_ZZZChat_with_pattern.png')] bg-opacity-50 bg-gray-800` }/>
      <div className={`hidden ${isAnimatedBackgroundEnabled ? 'md:block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-gray-600 overflow-hidden`}>
        <div id="scroll-container" className='w-screen h-auto overflow-hidden transform -rotate-[30deg]'>
          <div id="scroll-text-ltr" className='flex flex-col justify-center items-center overflow-hidden animate-scroll -rotate-[30deg]'>
            <div className="tickerwrapper">
              <ul className='list font-bold text-[15rem] text-white'>
                  <li className='listitem'>
                    <span> ZERO ZONE </span>
                  </li>
              </ul>
            </div>
          </div>
          <div id="scroll-text" className='flex flex-col justify-center items-center overflow-hidden animate-scroll -rotate-[30deg]'>
            <div className="tickerwrapper">
              <ul className='list font-bold text-[15rem] text-white'>
                  <li className='listitem'>
                    <span> ZENLESS </span>
                  </li>
              </ul>
            </div>
          </div>
          <div id="scroll-text-ltr" className='flex flex-col justify-center items-center overflow-hidden animate-scroll -rotate-[30deg]'>
            <div className="tickerwrapper">
              <ul className='list font-bold text-[15rem] text-white'>
                  <li className='listitem'>
                    <span> ZONE ZERO </span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className='chat-app-wrapper flex flex-col h-screen'>

        <div className={`${isAnimatedBackgroundEnabled ? 'bg-black/90' : 'bg-black/90'} w-full max-h-max min-h-full absolute z-0`}>
          <div className='h-auto flex bg-black/90 rounded-full m-4 items-center group'>
            <svg className="ml-1 mr-2 p-1 -mt-3 group-hover:animate-wiggle" width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6046 34.5902C18.0785 33.5743 18.9365 32.7882 19.9899 32.4048C21.0434 32.0214 22.2059 32.0721 23.222 32.5457L23.9036 32.8632C24.4039 33.0962 24.9985 32.8798 25.232 32.3797L25.55 31.6983C25.7784 31.1855 26.1066 30.7233 26.5155 30.3387C26.9244 29.9541 27.4058 29.6548 27.9317 29.4582C28.4575 29.2616 29.0172 29.1717 29.5781 29.1938C30.1391 29.2158 30.69 29.3494 31.1988 29.5866C31.7075 29.8239 32.164 30.1601 32.5414 30.5756C32.9189 30.9911 33.2098 31.4776 33.3972 32.0068C33.5846 32.536 33.6648 33.0972 33.633 33.6576C33.6012 34.2181 33.4581 34.7666 33.212 35.2712L29.7444 42.7089C29.2776 43.7101 28.0875 44.1433 27.0864 43.6764L19.6492 40.2077C18.6332 39.7338 17.8471 38.8757 17.4637 37.8223C17.0803 36.7689 17.131 35.6063 17.6046 34.5902Z" fill="#FFD613"/>
              <rect x="5.74702" y="24.0508" width="29.9235" height="45.3433" rx="4" transform="rotate(-20 5.74702 24.0508)" stroke="#FFD613" stroke-width="4"/>
              <rect x="15.8408" y="57.6289" width="33.9235" height="12.3358" rx="6" transform="rotate(-20 15.8408 57.6289)" fill="#FFD613"/>
              <circle cx="33.8884" cy="57.6207" r="2.31297" transform="rotate(-20 33.8884 57.6207)" fill="black"/>
              <path d="M28.6709 9.47266V9.47266C33.2723 7.79787 38.3602 10.1704 40.035 14.7718L40.2987 15.4963" stroke="#FFD613" stroke-width="3" stroke-linecap="round"/>
              <path d="M27.0889 5.125V5.125C33.891 2.64922 41.4123 6.15643 43.888 12.9586L44.1517 13.6831" stroke="#FFD613" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h1 className='text-white text-2xl font-bold'>Knock Knock</h1>
          </div>
          <div className="chat-container flex flex-col lg:flex-row m-4">

            <div className="profiles w-full lg:w-1/4 flex flex-col bg-black/80 p-4 md:mx-2 my-2 rounded-xl min-h-[90vh]">
              <div className='p-4 rounded-xl my-0 py-0'>
              <div class="flex items-center py-4">
                <div class="flex-grow h-px bg-gray-400"></div> 
                <span class="flex-shrink text-md text-gray-500 px-4 font-light">Choose</span>
                <div class="flex-grow h-px bg-gray-400"></div>
              </div>
                <h3 className='py-2 font-medium text-white/50'>Messaging</h3>
                {leftProfile ? (
                  <button onClick={() => openCharacterModal('left')} className={`group flex items-center space-x-4 bg-[#FFD613] rounded-full p-2 w-full ${isChangingColorsEnabled ? 'animate-color-change' : ''}`}>
                    <div className='flex items-center rounded-full'>
                      <img src={leftProfile} alt={leftName} className="w-12 h-12 rounded-full" />
                      <div className='flex flex-col text-left ml-4'>
                        <span className='text-xl'>{leftName}</span>
                        <span className='text-sm text-gray-500/60 block group-hover:hidden'>
                          {leftName === 'Untitled' ? 'Click to switch' : 
                            ((message) => {
                              const lastMessage = messages.filter(message => message.side === 'left' && message.type === 'text').pop()?.content || '';
                              return lastMessage.length > 15 ? lastMessage.substring(0, 15) + '...' : lastMessage;
                            })()
                          }
                        </span>
                        <span className='text-sm text-gray-500/60 hidden group-hover:block'>Click to switch</span>
                      </div>
                    </div>
                  </button>
                ) : (
                  <button onClick={() => openCharacterModal('left')} className={`flex items-center space-x-4 bg-[#FFD613] rounded-full p-2 w-full ${isChangingColorsEnabled ? 'animate-color-change' : ''}`}>
                    <div className='flex items-center rounded-full'>
                      <img src="characters/Wise.png" alt="Wise - Default profile" className="w-12 h-12 rounded-full border-black border-2" />
                      <div className='flex flex-col text-left ml-4'>
                        <span className='text-xl'>Untitled</span>
                        <span className='text-sm text-gray-500/60'>Click to switch</span>
                      </div>
                    </div>
                  </button>
                )}
                <label className='flex items-center justify-center m-2 p-2 text-gray-600 rounded-xl cursor-pointer group'>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'left', true)} className='hidden'/>
                  <svg className="group-hover:stroke-[#FFD613] w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <span className='ml-2 text-sm lg:text-md group-hover:text-[#FFD613]'>Upload custom avatar</span>
                </label>
              </div>
              <div className='p-4 rounded-xl my-0 py-0'>
                <h3 className='py-2 font-medium text-white/50'>as</h3>
                {rightProfile ? (
                  <button onClick={() => openCharacterModal('right')} className={`group flex items-center space-x-4 bg-[#FFD613] rounded-full p-2 w-full ${isChangingColorsEnabled ? 'animate-color-change' : ''}`}>
                    <div className='flex items-center rounded-full'>
                      <img src={rightProfile} alt={rightName} className="w-12 h-12 rounded-full" />
                      <div className='flex flex-col text-left ml-4'>
                        <span className='text-xl'>{rightName}</span>
                        <span className='text-sm text-gray-500/60 block group-hover:hidden'>
                          {leftName === 'Untitled' ? 'Click to switch' : 
                            ((message) => {
                              const lastMessage = messages.filter(message => message.side === 'right' && message.type === 'text').pop()?.content || '';
                              return lastMessage.length > 15 ? lastMessage.substring(0, 15) + '...' : lastMessage;
                            })()
                          }
                        </span>
                        <span className='text-xs lg:text-sm text-gray-500/60 hidden group-hover:block'>Click to switch</span>
                      </div>
                    </div>
                  </button>
                ) : (
                  <button onClick={() => openCharacterModal('right')} className={`flex items-center space-x-4 bg-[#FFD613] rounded-full p-2 w-full ${isChangingColorsEnabled ? 'animate-color-change' : ''}`}>
                    <div className='flex items-center rounded-full'>
                      <img src="/characters/Belle.png" alt="Belle - Default Profile" className="w-12 h-12 rounded-full border-black border-2" />
                      <div className='flex flex-col text-left ml-4'>
                        <span className='text-xl'>Untitled</span>
                        <span className='text-sm text-gray-500/60'>Click to switch</span>
                      </div>
                    </div>
                  </button>
                )}
                <label className='flex items-center justify-center m-2 p-2 text-gray-600 rounded-xl cursor-pointer group'>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'right', true)} className='hidden'/>
                  <svg className="group-hover:stroke-[#FFD613] w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <span className='ml-2 text-sm lg:text-md group-hover:text-[#FFD613]'>Upload custom avatar</span>
                </label>
              </div>
              <div class="flex items-center py-4">
                <div class="flex-grow h-px bg-gray-400"></div> 
                <span class="flex-shrink text-md text-gray-500 px-4 font-light">Info</span>
                <div class="flex-grow h-px bg-gray-400"></div>
              </div>
              <div className="">
                <span className='text-gray-600 text-sm'>You are messaging <span className='text-[#FFD613]'>{leftName}</span> as <span className='text-[#FFD613]'>{rightName}</span></span>
                <br />
                <span className="text-gray-600 text-sm">Total messages: {messages.length}, with {messages.filter(message => message.side === 'left').length} sent by {leftName} and {messages.filter(message => message.side === 'right').length} by {rightName}</span>
              </div>
            </div>

            <div className='main-chat-window w-full lg:w-3/4 flex flex-col bg-black/80 p-4 md:mx-2 my-2 rounded-xl min-h-[70vh]' id='main-chat-window'>
              <div id="chatting-with" className='text-xl text-white flex items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12.0016C2.0005 9.80922 2.72148 7.67774 4.05198 5.93522C5.38249 4.19269 7.24877 2.9357 9.3636 2.3577C11.4784 1.77969 13.7246 1.91271 15.7565 2.73628C17.7883 3.55984 19.4932 5.02831 20.6087 6.91569C21.7243 8.80307 22.1886 11.0047 21.9304 13.1819C21.6721 15.359 20.7055 17.391 19.1794 18.965C17.6533 20.539 15.6521 21.5678 13.484 21.8932C11.3159 22.2185 9.10092 21.8224 7.18 20.7656L3.292 21.9496C3.11858 22.0024 2.93407 22.0071 2.75819 21.9632C2.58231 21.9192 2.42168 21.8283 2.2935 21.7001C2.16531 21.5719 2.07438 21.4113 2.03043 21.2354C1.98648 21.0596 1.99117 20.875 2.044 20.7016L3.228 16.8076C2.42153 15.3342 1.9992 13.6813 2 12.0016ZM12 4.00162C10.5799 4.0015 9.18532 4.37941 7.95956 5.09653C6.7338 5.81366 5.72102 6.84414 5.02526 8.08215C4.32949 9.32015 3.97581 10.7211 4.00054 12.141C4.02528 13.5609 4.42754 14.9486 5.166 16.1616C5.23931 16.2821 5.28629 16.4168 5.30387 16.5567C5.32145 16.6967 5.30922 16.8387 5.268 16.9736L4.502 19.4916L7.016 18.7256C7.15132 18.6844 7.29384 18.6724 7.43416 18.6903C7.57448 18.7082 7.70939 18.7557 7.83 18.8296C8.88436 19.4733 10.0735 19.8642 11.3041 19.9714C12.5348 20.0787 13.7736 19.8995 14.9234 19.4478C16.0732 18.9962 17.1029 18.2845 17.9316 17.3683C18.7603 16.4522 19.3656 15.3566 19.7 14.1674C20.0344 12.9782 20.0889 11.7277 19.8592 10.5139C19.6295 9.30013 19.1218 8.15604 18.3759 7.1713C17.63 6.18656 16.6662 5.38793 15.56 4.83801C14.4538 4.28809 13.2353 4.00182 12 4.00162Z" fill="#828282"/>
                  <path d="M12 4.00162C10.5799 4.0015 9.18532 4.37941 7.95956 5.09653C6.7338 5.81366 5.72102 6.84414 5.02526 8.08215C4.32949 9.32015 3.97581 10.7211 4.00054 12.141C4.02528 13.5609 4.42754 14.9486 5.166 16.1616C5.23931 16.2821 5.28629 16.4168 5.30387 16.5567C5.32145 16.6967 5.30922 16.8387 5.268 16.9736L4.502 19.4916L7.016 18.7256C7.15132 18.6844 7.29384 18.6724 7.43416 18.6903C7.57448 18.7082 7.70939 18.7557 7.83 18.8296C8.88436 19.4733 10.0735 19.8642 11.3041 19.9714C12.5348 20.0787 13.7736 19.8995 14.9234 19.4478C16.0732 18.9962 17.1029 18.2845 17.9316 17.3683C18.7603 16.4522 19.3656 15.3566 19.7 14.1674C20.0344 12.9782 20.0889 11.7277 19.8592 10.5139C19.6295 9.30013 19.1218 8.15604 18.3759 7.1713C17.63 6.18656 16.6662 5.38793 15.56 4.83801C14.4538 4.28809 13.2353 4.00182 12 4.00162Z" fill="#828282"/>
                  <circle cx="7.5" cy="12.5" r="1.5" fill="black"/>
                  <circle cx="12.5" cy="12.5" r="1.5" fill="black"/>
                  <circle cx="17.5" cy="12.5" r="1.5" fill="black"/>
                </svg>
                <span className='text-xl text-white ml-2'>{leftName}</span>
              </div>
              <hr className='my-4 border-2 rounded-full border-gray-600/50' />

              <div id="chat-container" className="mt-6 space-y-2 flex-1">
                {messages.length === 0 ? (
                  <div className='flex flex-col items-center justify-center'>
                    <p className='text-white/50 text-xl'>No messages yet</p>
                    <br/>
                    <p className='text-white/50 text-2xl'>Start a conversation!</p>
                    <br/>
                    <br/>
                    <div className='flex flex-col align-left max-w-prose'>
                      <span className='text-white/50 text-lg font-light'>Step 1: Select the characters for both sides or upload any avatar.</span>
                      <span className='text-white/50 text-lg font-light'>Step 2: Enter your message for each sides, using the Switch button to switch between sides.</span>
                      <span className='text-white/50 text-lg font-light'>Step 3: ...</span>
                      <span className='text-white/80 text-lg font-light'>
                        {`${leftName === "Nicole Demara" || rightName === "Nicole Demara" ? "Step 4: Profit ;)" : leftName === "Anby Demara" || rightName === "Anby Demara" ? "Step 4: Have a borgar!" : "Step 4: Have fun!"}`}
                      </span>
                    </div>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div key={index} className={`chat-message flex ${message.side === 'left' ? 'flex-row left-side' : message.side === 'right' ? 'flex-row-reverse right-side' : 'justify-center system-side'} items-start group`}>
                      {message.side !== 'system' && (
                        <img
                          src={message.side === 'left' ? leftProfile : message.side === 'right' ? rightProfile : null}
                          alt="profile"
                          className="profile-pic w-10 h-10 rounded-full mx-4 mt-3"
                        />
                      )}

                      <EditMessageModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        onSave={handleSaveEditedMessage}
                        messageContent={editMessageContent}
                      />
                      <div className=''>
                        <div className={`block text-gray-400 text-opacity-0 group-hover:text-opacity-100 text-[0.5rem] pb-1 ${message.side === 'left' && message.type === 'text' ? 'block' : message.side === 'right' && message.type === 'text' ? 'block' : 'hidden'}`}>
                            <span className={`${message.side === 'left' ? 'text-left' : message.side === 'right' ? 'text-right' : 'text-center'}`}>
                              Click to edit
                            </span>
                        </div>
                        <div
                          className={`message-content flex items-center relative max-w-prose ${message.side === 'left' ? 'bg-gray-200' : message.side === 'right' ? 'bg-[#1c55e3] text-white' : message.side === 'system' ? 'bg-none text-white' : 'bg-gray-200'} py-2 px-3 ${message.type === 'text' ? 'rounded-2xl' : 'rounded-lg'}`}
                          onClick={message.type === 'text' ? () => editMessage(index) : null}
                          id={`message-${index}`}
                        >
                          {message.type === 'text' ? (
                            <div id={`message-${index}-content`}>{message.content}</div>
                          ) : message.type === 'component' ? (
                            message.content
                          ) : (
                            <img src={message.content} alt="[ Image ]" className="max-w-full max-h-60" />
                          )}
                        </div>
                      </div>

                      <button onClick={() => deleteMessage(index)} className={`opacity-0 group-hover:opacity-100 mx-2 border-2 border-gray-200 group-hover:border-red-500 group-hover:border-4 rounded-full py-1 px-1 text-md ${message.side === 'left' ? 'self-end' : message.side === 'right' ? 'self-end' : 'self-center'}`} >
                        <img src='/assets/icons/ZZZ_trash_icon.png' alt="Delete Icon" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6">
                <div className={`${selectedSide === "left" ? "bg-gray-400/80" : "bg-[#1c55e3]/80"} my-2 p-2 rounded-xl h-fit flex flex-col md:flex-row items-center`} data-html2canvas-ignore>
                  <span className={`${selectedSide === "left" ? "text-black/80" : "text-white/80"} text-sm md:text-md`}> Currently sending message as <span className={`${selectedSide === "left" ? "text-black" : "text-white"}`}>{selectedSide === "left" ? leftName : rightName}</span></span>
                  <button onClick={() => setSelectedSide(selectedSide === 'left' ? 'right' : 'left')} className="ml-4 bg-black hover:bg-[#fadc00] text-[#fadc00] hover:text-black border-[#fadc00] hover:border-[black] border-4 focus:outline-none p-2 rounded-full flex-auto transition-colors">
                    Switch
                  </button>
                  <button onClick={() => setIsSystemModalOpen(true)} className="ml-4 bg-black hover:bg-[#fadc00] text-[#fadc00] hover:text-black border-[#fadc00] hover:border-[black] border-4 focus:outline-none p-2 rounded-full flex-auto transition-colors">
                    Add System Message
                  </button>
                    <SystemMessagesModal
                      isOpen={isSystemModalOpen}
                      onClose={() => setIsSystemModalOpen(false)}
                      onSelectMessage={addSystemMessage}
                    />
                </div>
                <div className='flex'>
                  <textarea
                    id='message-bar-input'
                    rows="1"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message [and press Enter or click Send]"
                    className="border p-3 mr-2 rounded-full w-full max-h-16 min-h-[50px] outline-none active:outline-none text-sm md:text-base border-gray-300 focus:ring-[#1c55e3] focus:border-[#1c55e3]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        addMessage();
                      }
                    }}
                  />
                  <button onClick={addMessage} className="bg-[#1c55e3] hover:bg-[#1c55e3]/75 text-white px-6 rounded-full mx-2">Send</button>
                  <label className="flex items-center justify-center w-14 h-12 p-2 bg-gray-100 hover:bg-[#fadc00] rounded-full cursor-pointer group">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(e, selectedSide)} 
                      className="hidden" 
                    />
                    <img src="/assets/icons/photo_icon.png" alt="Camera Icon" height="24px" width="24px" className=""/>
                  </label>
                </div>
              </div>

            <CharacterModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelectCharacter={handleSelectCharacter}
              side={profileSide}
            />
            </div>
          </div>

          <footer class="bg-black" id="export-footer-div">
              <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center">
                      
                    </span>
                    <button className='rounded-full bg-black border-4 border-gray-600 hover:border-[#c3c900] text-white px-6 py-2 outline-none focus:outline-[#c3c900] active:outline-[#c3c900]'>About</button>
                    <div className=''>
                      <button onClick={exportChat} className="rounded-full bg-black border-4 border-gray-600 hover:border-[#c3c900] text-white px-6 py-2 outline-none focus:outline-[#c3c900] active:outline-[#c3c900]">Export Chat as Image</button>
                      <button onClick={toggleDropDownExportOptions} className="rounded-full bg-black border-4 border-gray-600 hover:border-[#c3c900] text-white px-2py-2"> ^ </button>
                      {isDropDownExportOptionsOpen && (
                        <div className={`relative mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 flex flex-col items-center z-50 dropdown`}>
                          <button onClick={exportChatAsText} className="m-1 p-2 bg-gray-700 text-white rounded">Export Chat as TXT</button>
                          <button onClick={exportChatAsJSON} className="m-1 p-2 bg-gray-700 text-white rounded">Export Chat as JSON</button>
                        </div>
                      )}
                    </div>
                    <div className="dropdown">
                      <button className="dropdown-toggle rounded-full bg-black border-4 border-gray-600 hover:border-[#c3c900] text-white px-6 py-2 outline-none focus:outline-[#c3c900] active:outline-[#c3c900]" onClick={toggleDropdown}>
                        Settings
                      </button>
                      {isDropdownOpen && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
                          <div class="bg-black p-6 rounded-xl w-full m-4 md:w-1/2 md:m-0 max-w-lg z-10 absolute divide-y divide-gray-100 shadow">
                          <div className='flex items-center'>
                            <h2 className="text-lg font-bold tracking-wider mb-4 text-white flex-grow">Settings</h2>
                            <button onClick={toggleDropdown} className="p-0 bg-transparent m-0 hover:border-0 border-0 focus:outline-none">
                                <svg className="size-16 transition-all group" width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="#BF2005"/>
                                  <path className="fill-[#BF2005] group-hover:fill-white" d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" fill="black" fill-opacity="0.2"/>
                                  <path className="fill-[#BF2005] group-hover:fill-white" d="M30.2051 3H12.5C7.2533 3 3 7.25329 3 12.5C3 17.7467 7.2533 22 12.5 22H20.8149C23.9875 22 26.9258 20.3296 28.5485 17.6034L33.6422 9.04593C35.2293 6.37962 33.308 3 30.2051 3Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                  <path d="M12.5 2H30.2051C34.0837 2 36.4854 6.22452 34.5015 9.55741L29.4078 18.1148C27.6048 21.144 24.34 23 20.8149 23H12.5C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2Z" stroke="#BF2005" stroke-width="3" stroke-linecap="round"/>
                                  <mask id="path-4-inside-1_832_899" fill="white">
                                    <path d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z"/>
                                  </mask>
                                  <path className="group-hover:fill-[#BF2005]" d="M21.0706 9.47131C20.8103 9.211 20.3883 9.21098 20.128 9.47125L17.7707 11.828L15.414 9.47133C15.1537 9.21102 14.7316 9.21102 14.4713 9.47133V9.47133C14.211 9.73164 14.211 10.1537 14.4713 10.414L16.828 12.7707L14.4713 15.1273C14.211 15.3876 14.211 15.8097 14.4713 16.07V16.07C14.7316 16.3303 15.1537 16.3303 15.414 16.07L17.7707 13.7133L20.128 16.0701C20.3883 16.3304 20.8103 16.3303 21.0706 16.07V16.07C21.331 15.8097 21.331 15.3876 21.0706 15.1273L18.714 12.7707L21.0706 10.414C21.331 10.1537 21.331 9.73163 21.0706 9.47131V9.47131Z" fill="black"/>
                                  <path className="group-hover:fill-[#BF2005]" d="M17.7707 11.828L16.3565 13.2422L17.7705 14.6563L19.1847 13.2424L17.7707 11.828ZM16.828 12.7707L18.2422 14.1849L19.6564 12.7707L18.2422 11.3565L16.828 12.7707ZM17.7707 13.7133L19.1847 12.299L17.7705 10.8851L16.3565 12.2991L17.7707 13.7133ZM18.714 12.7707L17.2998 11.3565L15.8856 12.7707L17.2998 14.1849L18.714 12.7707ZM20.128 16.0701L18.7139 17.4845L20.128 16.0701ZM14.4713 15.1273L13.0571 13.7131L14.4713 15.1273ZM18.7139 8.05687L16.3566 10.4136L19.1847 13.2424L21.542 10.8856L18.7139 8.05687ZM19.1849 10.4138L16.8282 8.05712L13.9998 10.8855L16.3565 13.2422L19.1849 10.4138ZM13.0571 11.8282L15.4138 14.1849L18.2422 11.3565L15.8855 8.99979L13.0571 11.8282ZM15.4138 11.3565L13.0571 13.7131L15.8855 16.5415L18.2422 14.1849L15.4138 11.3565ZM16.8282 17.4842L19.1849 15.1275L16.3565 12.2991L13.9998 14.6558L16.8282 17.4842ZM16.3566 15.1277L18.7139 17.4845L21.542 14.6557L19.1847 12.299L16.3566 15.1277ZM22.4849 13.7131L20.1282 11.3565L17.2998 14.1849L19.6564 16.5415L22.4849 13.7131ZM20.1282 14.1849L22.4849 11.8282L19.6564 8.99981L17.2998 11.3565L20.1282 14.1849ZM22.4849 17.4842C23.5262 16.4429 23.5262 14.7545 22.4849 13.7131L19.6564 16.5415C19.1357 16.0208 19.1357 15.1765 19.6564 14.6558L22.4849 17.4842ZM18.7139 17.4845C19.7553 18.5256 21.4436 18.5255 22.4849 17.4842L19.6564 14.6558C20.1771 14.1351 21.0213 14.1351 21.542 14.6557L18.7139 17.4845ZM13.0571 17.4842C14.0985 18.5256 15.7869 18.5256 16.8282 17.4842L13.9998 14.6558C14.5205 14.135 15.3648 14.135 15.8855 14.6558L13.0571 17.4842ZM13.0571 8.05712C12.0158 9.09848 12.0158 10.7869 13.0571 11.8282L15.8855 8.99979C16.4063 9.52052 16.4063 10.3648 15.8855 10.8855L13.0571 8.05712ZM16.8282 8.05712C15.7869 7.01576 14.0985 7.01576 13.0571 8.05712L15.8855 10.8855C15.3648 11.4063 14.5205 11.4063 13.9998 10.8855L16.8282 8.05712ZM13.0571 13.7131C12.0158 14.7545 12.0158 16.4429 13.0571 17.4842L15.8855 14.6558C16.4063 15.1765 16.4063 16.0208 15.8855 16.5415L13.0571 13.7131ZM22.4849 11.8282C23.5262 10.7869 23.5262 9.09846 22.4849 8.05709L19.6564 10.8855C19.1357 10.3648 19.1357 9.52054 19.6564 8.99981L22.4849 11.8282ZM21.542 10.8856C21.0213 11.4062 20.1771 11.4062 19.6564 10.8855L22.4849 8.05709C21.4436 7.0158 19.7553 7.01571 18.7139 8.05687L21.542 10.8856Z" fill="black" mask="url(#path-4-inside-1_832_899)"/>
                                </svg>  
                              </button>
                            </div>
                            <ul class="p-3 px-1 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownToggleButton">
                              <li>
                                <div className="flex bg-gray-700 rounded-lg p-4 group">
                                  <label className="inline-flex items-center w-full cursor-pointer">
                                    <input
                                      type="checkbox"
                                      className="sr-only peer"
                                      checked={isChangingColorsEnabled}
                                      onChange={(e) => setIsChangingColorsEnabled(e.target.checked)}
                                    />
                                    <div className="relative w-9 min-w-9 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 ring-4 ring-black rounded-full peer-checked:after:translate-x-full peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-600 after:border-black after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FFD613]"></div>
                                    <div className="flex flex-col">
                                      <span className="ms-3 text-sm font-medium text-white/80 group-hover:text-white">Flashing colors [{`${isChangingColorsEnabled === true ? "ON" : "OFF"}`}]</span>
                                      <span className='ms-3 text-xs text-white/50 group-hover:text-white'>Some menus have color changing animations similar to the ZZZ UI. Toggle it off if you're not a fan.</span>
                                    </div>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="flex bg-gray-700 rounded-lg p-4 group">
                                  <label className="inline-flex items-center w-full cursor-pointer">
                                    <input
                                      type="checkbox"
                                      className="sr-only peer"
                                      checked={isAnimatedBackgroundEnabled}
                                      onChange={(e) => setIsAnimatedBackgroundEnabled(e.target.checked)}
                                    />
                                    <div className="relative w-9 min-w-9 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 ring-4 ring-black rounded-full peer-checked:after:translate-x-full peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-600 after:border-black after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FFD613]"></div>
                                    <div className="flex flex-col">
                                      <span className="ms-3 text-sm font-medium text-white/80 group-hover:text-white">Animated Background [{`${isAnimatedBackgroundEnabled === true ? "ON" : "OFF"}`}]</span>
                                      <span className='ms-3 text-xs text-white/50 group-hover:text-white'>A similar background animation to the ZZZ DMs UI made with web elements. Toggle off to set to a static background. Does NOT work on mobile devices.</span>
                                    </div>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                </div>
              </div>
          </footer>
          </div>
        </div>
    </div>  
  );
};

export default App;
