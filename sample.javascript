
//Author: Jcook03266
//Initial Commit: 11/28/2020
//Version 0.1 11/28/2020
/////////////////////////////////////////////////////////////////////////
//Warning: You must link JQuery Core to the document that you wish to use this script with, like this: <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
/////////////////////////////////////////////////////////////////////////
//Random Movie Quote Gen Script//
/**Array filled with 50 random 'very well known' quotes from the American Film Institute's 100 movie quotes webpage (https://www.afi.com/afis-100-years-100-movie-quotes/)
*/
function getQuote(){
var quotes = new Array("Toto, I've a feeling we're not in Kansas anymore. - THE WIZARD OF OZ (1939)","Rosebud. - CITIZEN KANE (1941)","Bond. James Bond. - DR. NO (1963)", "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast. - KING KONG (1933)","A martini.  Shaken, not stirred. - GOLDFINGER (1964)","I feel the need - the need for speed! - TOP GUN (1986)","Houston, we have a problem. - APOLLO 13 (1995)","I see dead people. - THE SIXTH SENSE (1999)","My mama always said life was like a box of chocolates. You never know what you're gonna get. -FORREST GUMP (1994)","I'll be back. -THE TERMINATOR (1984)","You're gonna need a bigger boat. - JAWS (1975)","My precious. - THE LORD OF THE RINGS: THE TWO TOWERS (2002)","Listen to them.  Children of the night.  What music they make. -DRACULA (1931)","Toga!  Toga! -NATIONAL LAMPOON'S ANIMAL HOUSE (1978)", "Open the pod bay doors, please, HAL. -2001: A SPACE ODYSSEY (1968)","Soylent Green is people! -SOYLENT GREEN (1973)","Hasta la vista, baby. -TERMINATOR 2:  JUDGMENT DAY (1991)","I'm walking here!  I'm walking here! -MIDNIGHT COWBOY (1969)","You can't handle the truth! -A FEW GOOD MEN (1992)","Show me the money! -JERRY MAGUIRE (1996)","There's no place like home. -THE WIZARD OF OZ (1939)","Is it safe? -MARATHON MAN (1976)","They're here! -POLTERGEIST (1982)","Here's Johnny! -THE SHINING (1980)","I'm as mad as hell, and I'm not going to take this anymore! -NETWORK (1976)","Louis, I think this is the beginning of a beautiful friendship. -CASABLANCA (1942)","Made it, Ma! Top of the world! -WHITE HEAT (1949)","Of all the gin joints in all the towns in all the world, she walks into mine. -CASABLANCA (1942)","Take your stinking paws off me, you damned dirty ape. -PLANET OF THE APES (1968)","Elementary, my dear Watson. -THE ADVENTURES OF SHERLOCK HOLMES (1939)","Gentlemen, you can't fight in here! This is the War Room! - DR. STRANGELOVE OR: HOW I LEARNED TO STOP WORRYING AND LOVE THE BOMB (1964)","E.T. phone home. - E.T.:  THE EXTRA-TERRESTRIAL (1982)","The stuff that dreams are made of. -THE MALTESE FALCON (1941)","Mrs. Robinson, you're trying to seduce me.  Aren't you? -THE GRADUATE (1967)","I love the smell of napalm in the morning. -APOCALYPSE NOW (1979)","What a dump. -BEYOND THE FOREST (1949)","Say 'hello' to my little friend! -SCARFACE (1983)","May the Force be with you. - STAR WARS (1977)","Keep your friends close, but your enemies closer. -THE GODFATHER PART II (1974)","You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk? -DIRTY HARRY (1971)","You had me at 'hello.' -JERRY MAGUIRE (1996)","I'm gonna make him an offer he can't refuse. -THE GODFATHER (1972)","One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know. -ANIMAL CRACKERS (1930)","There's no crying in baseball! -A LEAGUE OF THEIR OWN (1992)","Here's looking at you, kid. -CASABLANCA (1942)","Go ahead, make my day. -SUDDEN IMPACT (1983)","All right, Mr. DeMille, I'm ready for my close-up. -SUNSET BLVD. (1950)","Fasten your seatbelts. It's going to be a bumpy night. -ALL ABOUT EVE (1950)","What we've got here is failure to communicate. -COOL HAND LUKE (1967)","Well, here's another nice mess you've gotten me into! -SONS OF THE DESERT (1933)");
//End of array  
//Input a random number gen ceiling and expect a return output from 0 to max-1 
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}    
//Output ranges from 0 to max-1, so in this case 0 to 49 are the expected outputs
//Our array only has indexes 0-49 so this is logically correct
 
//u is our randomly generated number
var rand = getRandomInt(50);
    
//We now insert the indexed array data referenced by the number stored as 'rand' into our text tag using either the name of the class or the id attached to that tag, either which works
//Any number above 49 would throw an error which is why we alert the dev if the index is out of bounds
if(rand >= quotes.length){
alert("Array Index error, index reference number is out of bounds, check the length of your array"); 
}
$('#rnd-quote-data').text(quotes[rand]);
/** Get the length of the array
console.log(quotes.length);
*/
}
//End of Random Movie Quote Gen Script//
