# Assignment 3: Query Google API
* Write a script that accepts a search parameter, queries Google API, and prints JSON. Only print the title/link/snippet properties, and only print the first 5 items.
```
Example:
$ node index.js 'pilipili sc2'
[
  {
    title: 'PiLiPiLi - Liquipedia - The StarCraft II Encyclopedia',
    link: 'https://liquipedia.net/starcraft2/PiLiPiLi',
    snippet: 'Jul 31, 2022 ... Pavel "PiLiPiLi" Pilipenko (born May 11, 1996) is an American/Kazakhstani Protoss player who is currently playing for Genesis Gaming.'
  },
  {
    title: 'PiLiPiLi (@PiLiPiLi96) / Twitter',
    link: 'https://twitter.com/pilipili96',
    snippet: 'StarCraft 2 player and streamer representing ... PiLiPiLi Retweeted ... Announcing the Apprentice Esports SC2 Circuit _ Featuring $400 NA Apprentice and_...'
  },
  {
    title: 'PiliPili back at it again, boosting another top GM in NA : r/starcraft',
    link: 'https://www.reddit.com/r/starcraft/comments/jl19mu/pilipili_back_at_it_again_boosting_another_top_gm/',
    snippet: 'Oct 30, 2020 ... 20 votes, 41 comments. Hello SC2 community, looks like Pilipili is back at it again. This eXaScaLe guy who has historically only played team_...'
  },
  {
    title: 'ESL_SC2 - Big Gabe Impressions - 6500 MMR but his build is 5000 ...',
    link: 'https://www.twitch.tv/esl_sc2/clip/CulturedSpunkyMeerkatCorgiDerp-5WrIl81Hn-6r1mvY?lang=cs',
    snippet: 'May 28, 2021 ... RERUN: Vindicta vs. PiLiPiLi - Group B - DreamHack SC2 Masters: Valencia 2022 - NA. StarCraft II | 1 view | 2 days ago.'
  },
  {
    title: '________',
    link: 'https://www.facebook.com/PiLiPiLi.SC2/',
    snippet: 'PiLiPiLi is a kazakhstani grandmaster protoss (semi)pro player & StarCraft2 streamer living in ... ________. 122 likes. _. 122 followers. @PiLiPiLi.SC2.'
  }
]
```
