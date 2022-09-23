'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {

    //define a variable named PageMgr that requires the dw.experience.PageMgr API
    var PageMgr = require("dw/experience/PageMgr");
    //get the page with the specific, hard-coded id
    var page = PageMgr.getPage('sale-page');
    //Hint: Use hasVisibilityRules() and isVisible() checks
    //Hint: use PageMgr.renderPage method and res object to render the page
    //Hint: don't forget to cover the else condition, because in our exercise hasVisibilityRules() is false
    if(page.hasVisibilityRules())
    {
       // pagecaching is NOT ok here
    } 
    else 
    {
        if(page.isVisible())
        {
           res.print(PageMgr.renderPage(page.ID, "sale-page"));
        }
    }
    next();

});

module.exports = server.exports();
