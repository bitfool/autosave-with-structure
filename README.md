autosave-with-structure
=======================

Edit in a textarea with autosave. Fine.

But what if you want a document with some pre-ordained structure to it?  Say, so that users can fill in a template but the sections are pre-established and not to be trifled with?

So here we have autosave-with-structure.  Define your structure in JSON for the document, each autosave verifies that the structure still matches before saving.

How to demo it for yourself, and what it does:
-------------------------

1. Put those two files in a folder

2. Add jquery.min.js to that folder

3. Go visit the html file and you'll see the textarea along with a sample structured template.  

4. As you change the text (but leave the headers alone) the contents will autosave into localStorage.  
 
5. But as soon as you mess up the structure of the template, no saving will take place and a not-very-helpful message will tell you this.  You can keep editing, but no saving will take place unless you either manually fix the template structure, or tap the Refresh button... which will lose your other edits, but restore the text to its last known valid state.

6. The html file is commented to show you where to specify the structure of the template, and also allow you to change the variable name of the stored text in localStorage.


License:
-------------------------
Released under the [MIT license](http://opensource.org/licenses/MIT).
