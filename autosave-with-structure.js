/*
  autosave-with-structure v0.0.1 - 2014-08-28
  (c) 2014 bitfool - bitfool.com
  first version inspired by jQuery autoSave (c) 2013 Yang Zhao
  license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
  $.fn.autosaveit = function(callback, ms, savename, structure) {
    return this.each(function() {
      var timer = 0,
        structuremsg = "well structured",
        wasSaved = true,
        $this = $(this),
        delay = ms || 1000,
        headers = structure || Array("");
      $this.keyup(function() {
        clearTimeout(timer);
        var $context = $this.val();
        var hasStructure = checkStructure($context);
        if(hasStructure === true) {
          if(localStorage) {
            localStorage.setItem(savename, $context);
            wasSaved = true;
            structuremsg = "well structured";
          }
        } else {
          wasSaved = false;
          structuremsg = hasStructure;
        }
        timer = setTimeout(function() {
          callback(wasSaved,structuremsg);
        }, delay);
      });
      function checkStructure(txt){
        var truthy = false,
          restr = "";
        for(var i=0;i<headers.length;i++){
          var type = Object.getOwnPropertyNames(headers[i])[0];
          if( type == "h"){  //type h: simple headers separating text sections
            restr += headers[i].h + '([\\s\\S]*)';
          }
        } 
        var re = new RegExp(restr,'mgi');
        var structure = txt.match(re);
        var test = txt.search(re);
        var found = ( txt.search(re) != -1 );
        //console.log('jo',re,"\n",structure,test,found);
        if(structure && structure.length > 0){
          truthy = true;
        }
        return truthy;
      }
    });
  };
})(jQuery);
