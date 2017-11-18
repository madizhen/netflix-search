var flix = [
  //Action
  'The 100', 'Black Mirror', 'Dare Devil', 'Jessica Jones',
  
  //Action Movie
  'Civil War', 'Doctor Strange', 'Jaws', 'Pirates of the Carribean: The Curse of the Black Pearl', 'The Punisher', 'Star Wars: Rouge One',
  'xXx', 'A Lonely Place to Die', 'Avenged', 'Bitcon Heist', 
  
  //Anime
  'AJIN: Demi-Human', 'Attack on Tital', 'Castlevania','Bleach', 'Death Note', 'Mushi-Shi',
  'Naruto', 'Ouran Host Club', 'Rurouni Kenshin', 'The House of Small Cubes','You Lie In April',
  
  //Children Movie
  'A Cinderella Story', 'Air Bud', 'Dare Devil', 'Disney An Extremely Goofy Movie', 'Are We There Yet?',
  'Beauty and The Beast', 'Bee Movie', 'Everyones Hero', 'Holes', 'Hotel for Dogs',
  'Racing Stripes', 'The Iron Giant', 'Zootopia', 'Barefoot in the Park', 'Destiny', 
  'Grease', 'Sunset Boulevard', 'The Endless Summer', 'Three Coins in the Fountain', 'To Kill a Mockingbird', 
  
  //Comdey
  'Family Guy', 'New Girl', 'Futurama', 'Parks and Rec', 'That 70s Show', 
  
  //Comedy Movie
  '13 Going on 30', 'Ali Wong Baby Cobra', 'Are You Here', 'GBF', 'Magic Mike', 
  'Mean Girls', 'John Tucker Must Die', 'Sausage Party', 
  
  //Documentary
  '#Rucker50', '9 Months That Made You','Abstract: The Art of Design', 
  'Auschwitz: The Nazis and The Final Solution', 'Burn', 'Chasing Perfection', 'Code: Debugging the Gender Gap', 
  'Cooked', 'Find Me', 'Food, Inc.', 'Frozen Planet: On Thin Ice', 'Great Human Oddesy', 
  'H.H. Holmes', 'Hard Time', 'Hip Hop Evolution', 'Into the Inferno', 'Jesus Camp', 
  'Man on Wire', 'Minimalism', 'Motivation 2: The Chris Cole Story', 'Muder Maps', 'Putrage', 
  'Panama Canal: Prized Possession', 'Precious Puppies', 'Prohibition', 'Pumping Iron', 'Rise of the Super Gamer', 
  'Sky Ladder: The Art of Cai Guo-Qiang', 'Sustainable', 'The Birth of Sake', 'The Pit', 'The Propoganda Game', 
  'The Secret Rules of Modern Living: Algorithms', 'They Call It Myanmar', 'Architecture Top 10', 'Velco, the Sloth', 'Bleach', 
  
  //Dramas
  
  //Faith & Spirituality
  
  //Horror
  
  //Independent
  
  //International
  
  //LGBTQ
  
  //Music
  
  //Musicals
  
  //Romance
  
  //Sci-Fi & Fantasy
  
  //Sports Movies
  
  //Thrillers
  
  /*Easiest way to fill is by copy & pasting this into a section, then double-clicking and typing over
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach', 
  'Bleach', 'Castlevania', 'Bleach', 'Castlevania', 'Bleach',
  */
  
  ]

function genFlix() {
  var randomNumber = Math.floor(Math.random() * (flix.length));
  document.getElementById('flixDisplay').innerHTML = flix[randomNumber];

}
