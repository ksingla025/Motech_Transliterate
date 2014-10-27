# Java Transliteration Package for Indian Languages

The current package is a simple wrapper over some old javascript code I wrote.
I plan to rewrite the whole thing in Java with a much cleaner interface.
Stay tuned for more.

To use the current version of the package, do the following ::

import phoeneticTransliteration.Transliterate;

and then for a function call, initialize a Transliterate object by ::
Transliterate T 

Then you can select the source Language by ::

T.setSourceLanguage(phoeneticTransliteration.Properties.ENGLISH);

and the destination language by ::
T.setDestinationLanguage(phoeneticTransliteration.Properties.HINDI);

and then to get the transliterated String, you can use :: 

T.transliterate("mujhe khaanaa khanaa hai."); 

Note :: The String returned will be a UTF-8 String, so take enough precaution when rendering it.


Details about the system::

this is a basic implementation of the paper:

Lavanya, Prahallad, Prahallad Kishore, and Ganapa Thiraju Madhavi. "A simple approach for building transliteration editors for indian languages." Journal of Zhejiang University-Science A 6.11 (2005): 1354-1361.

This is a rule based system which uses phoenetic mapping to transliterate from one language to another. Extending it is as simple as 
mapping the sounds with the respective characters in the target language.
The currently supported languages are ::
Source ::
English

Destination ::
 TELUGU 
 HINDI 
 MALAYALI 
 BENGALI 
 TAMIL 
 ASSAMESE 
 KANNADA 
 MARATHI 
 SANSKRIT 
 ORIYA 

