# JS-JQuery-Famous-Movie-Quote-Random-Gen
Famous Movie Quote Random Generator using Javascript and JQuery 

*What is this?*

The following is a script using 'javascript' that populates any text based html tag with a selection of 50 random popular movie quotes upon the loading of an html document. The script operates in conjunction with JQuery so you must link the JQuery core with the <script src=""></script> tag like so:

 <!-- Linking JQuery Core -->  
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
 <!-------------------------->
 
 *You can just copy and paste the above snippet anywhere inside of the html tags into your html document*
 ------------------------------------------------------------

*Why use this?*

You use this to generate random popular movie quotes in order to keep users entertained, namely if you have an error screen such as a custom 404 page you can utilize this script
to spice things up and put a little fun into your code.

*How do I install this?*

First off, as mentioned previously you must link the JQuery core in your HTML document using the provided snippet above, this linkage doesn't have to be placed in the <head> section, just place it anywhere you'd like and make sure it's organized in line with your other code. Second, to link the script you can simply use the external link provided below or place the physical .js file in your website/document's root folder along with the rest of your html and other documents after downloading it and moving it from the zipped folder, then put the script tag anywhere you'd like, like so:
  
 //For root folder placement of the script//
 <!-- Linking root based FMQRG Core -->    
<script src="FMQRG.js"> </script>
 <!-------------------------->
 
 <!-- getQuote() method call triggers the script -->
 <script> getQuote(); </script>
  <!-- getQuote() method call triggers the script -->
 //////////////////////////////////////////
 
  //For external link usage of the script//
   <!-- Linking external link based FMQRG Core -->    
<script src="https://jcook03266.s3.us-east-2.amazonaws.com/FMQRG.js"> </script>
 <!-------------------------->
 
 <!-- getQuote() method call triggers the script -->
 <script> getQuote(); </script>
  <!-- getQuote() method call triggers the script -->
 //////////////////////////////////////////
 
  *You can just copy and paste the above snippet anywhere inside of the html tags into your html document*
  ------------------------------------------------------------
  *How do I apply this?*
  
  Now, after all of the setup is done, in order to utilize the script you attach the following id to any text based tag you're using <h1, <p1 etc:
  
  "id = "rnd-quote-data""
  example.)
  h2 class = "ex-css" id = "rnd-quote-data">Sample text</h2
  
  *Note: Complete the tags with either missing '<' or '>' notation*
  ------------------------------------------------------------
  And you're done!
