/* Library: nap.js
 *  Author: Nicholas Potter
 * License: GPL 3
 * Version: 0.0.1
 * 
 * A collection of utilities to ease in working with data and creating js-based graphics. 
 * Requires d3js
 * */

(function() {
    // create the initial object
    var m2m = {
        version: "0.0.2"
    };
    





    // add the library to the window
    window.nap = nap;
})();




// Define a unique sorting function that is faster than classic method
Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
        for(i in o) r.push(o[i]);
            return r;
};
