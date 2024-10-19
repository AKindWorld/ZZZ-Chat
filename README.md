<img src="https://github.com/user-attachments/assets/4ce955aa-7c46-47bb-af9c-28bada59e664" align="right"
     alt="ZZZ Chat Readme Illust" width="40%" height="auto">
<br>


<img src="https://github.com/user-attachments/assets/6c8f185d-b0eb-4a7a-81a8-7897175672e1" alt="Ellen ZZZs~" height="100" width="100">

<h3><a href="https://zzz-chat.auraa.moe">ZZZ Chat</a></h3>

<hr width="20%">

A simple, but feature-rich chat simulation web-app for the DMs feature of the game Zenless Zone Zero, developed by miHoYo/HoYoVerse. Closely follows the in-game UI and design system.

<br>

[![https://zzz-chat.auraa.moe](https://img.shields.io/website?down_message=APP%20DOWN&label=VISIT&style=for-the-badge&up_color=%231C55E3&up_message=https%3A%2F%2Fzzz-chat.auraa.moe&url=https%3A%2F%2Fzzz-chat.auraa.moe)](https://zzz-chat.auraa.moe)


<br>

Made with [Vite](https://vite.dev) with [React SWC plugin](https://github.com/vitejs/vite-plugin-react-swc), [TailwindCSS](https://tailwindcss.com) and uses [HTML2Canvas](https://github.com/niklasvh/html2canvas) for image-exporting.

<br><br>

<p align="center">
  <a href="#features">Features </a> •
  <a href="#screenshots">Screenshots </a> •
  <a href="#get-started">Get Started </a> •
  <a href="#to-do">To-Do </a> •
  <a href="#known-bugs">Known Bugs </a> •
  <a href="#contributing">Contributing </a> •
  <a href="#misc">Misc </a>
</p>

<hr>

<br>

# Features

<img src="https://github.com/user-attachments/assets/f3365e2f-36fc-49a9-b0ef-3ca32e2311b0" alt="AnbyPower" height="200" width="200" align="right"/>


* Send messages as any character, through any side of the messaging system (left/right).
* A large number of pre-uploaded characters & NPCs.
  * filtered by factions
  * also features a search bar
* Edit & delete any message at any time.
* Add a custom avatar/profile picture & rename.
* Upload images in chat.
* Export images directly from the website, no need to screenshot.
* Export text in TXT & JSON format (images don't work).
* Group Chat: chat with and as multiple characters.
* Call Lucy a "golden damsel in distress".
* Send system messages, with pre-built customizable UI blocks.
* Works offline (once loaded) & locally without any server or DB connections.
  * your texts & uploaded media stay private (handled in localStorage)  

<sub>erm... A baseball bat and a red pig just came flying and smashed my window, does anyone know where it came from?</sub>

## Screenshots

Main Chat UI            | Character Selector
:----------------------:|:--------------------------:
![](https://github.com/user-attachments/assets/b0cc2056-d10a-4a9a-8b53-703db58d90ee) | ![](https://github.com/user-attachments/assets/c2a1e83a-fab8-419f-8898-127a14c9da59)
DMs                     | Group Chat
![](https://github.com/user-attachments/assets/9a272f60-027e-4326-ad79-6e18e65f18c9) | ![](https://github.com/user-attachments/assets/49c15120-2e81-4c7b-ae4f-ab9e7d5104ad)


## Get Started
<img src="https://github.com/user-attachments/assets/641d506b-0a86-4a82-bc4d-dcd87d2fc60d" alt="BelleGift" height="200" width="200" align="right"/>

### Online Version

You can try it out at [zzz-chat.auraa.moe](https://zzz-chat.auraa.moe). It is hosted on Cloudflare Pages and runs on a subdomain for my domain.

### Build/run locally

1. Clone the repo: 
`https://github.com/AKindWorld/ZZZ-Chat.git` or you can use the GitHub Desktop app to directly clone with a GUI.

2. Run `npm install`

3. Run `npm run dev` or `npm run host` (to expose the application on your local network) or `npm run build` and then `npm run preview` (to build & serve it).

Open it on your localhost port to access it.

## To-Do

<img src="https://github.com/user-attachments/assets/ed5d38be-9591-43bf-8179-5d08cb6d5298" alt="ZhuYuanNote" height="200" width="200" align="right"/>

- [ ] re-write the App.jsx code completely to break it down to components (currently it's over 1000 lines dumped in one file).
- [ ] add more system messages (like: `User is typing...`, choice blocks as in-game, Commission details, etc).
- [ ] add more characters & NPCs.
- [ ] redesign some UI components to make them directly follow the game's design system.
- [ ] add ContactBook feature like in-game, showing various Agent details.
- [ ] add one-click option for `Clear chat`.
- [ ] add `Import JSON file` and `Import TXT file` feature for previously exported chats.
- [ ] Add ability to customize Image exports, including size, file formats and more.
- [ ] Add option to save a chat in localStorage, as well as new interface for the same.

## Known Bugs

<img src="https://github.com/user-attachments/assets/3823ead4-7065-4272-819f-1a9894ebdb61" alt="BillyCry" height="200" width="200" align="right"/>

- `Animated Background` doesn't work on mobile.
- Using the `Wide Export` option on mobile makes height of the image extremely large, even for small chats.
- Turning off `Flashing Colors` option still makes some parts of the UI flash.
- Switching from Group Chat to DMs crashes the app sometimes.

<br>

## Contributing
<img src="https://github.com/user-attachments/assets/16f5d2ff-1134-4e8a-a9ac-cb5a0c8fba7e" alt="PiperGetOn" height="200" width="200" align="right"/>

- Code & Features: If you wanna contribute, please fork the repo & open a PR with your changes. 
- Characters/NPC details: Please open a new issue with the characters' or NPCs' Name & Image/in-game profile pic, or DM me (see below).

Other than that, you can also help out by starring the repo. Thanks a lot ^^

<br>

## Misc
<img src="https://github.com/user-attachments/assets/46de1d2a-0b4f-495d-b932-be6d65a2213a" alt="CorinCute" height="200" width="200" align="right"/>

I made this as I was bored and realized there wasn't any chat simulation project for ZZZ yet (or maybe I didn't know any).
<br>
So I decided to try it out with my (barely-passable) skills and it contributed to a good learning experience. 
<br>
Implementing the game UI on web was very fun too. 
<br><br>
I used Figma for breaking down the UI parts, recreating icons & patterns from scratch, and TailwindCSS classes & SVGs for implementing them in the web. 
<br><br>
I'm glad if you used it and liked it, thank you very much. (^///^)
<br>
There is still a lot of work left, so I look forward to it a lot. \(￣︶￣*\))

For any queries/assistance/etc, contact me any time in Discord: `auraolis` or Reddit: `u/FireWaterAirEarthMe`. ^^

<br>
<br>
