// build time:Sat Aug 10 2019 22:37:37 GMT+0800 (GMT+08:00)
(function(a){a('.article img:not(".not-gallery-item")').each(function(){if(a(this).parent("a").length===0){a(this).wrap('<a class="gallery-item" href="'+a(this).attr("src")+'"></a>');if(this.alt){a(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">'+this.alt+"</div>")}}});a(".article > .content > table").each(function(){if(a(this).width()>a(this).parent().width()){a(this).wrap('<div class="table-overflow"></div>')}});function t(){const t=a(".navbar-main .navbar-start").outerWidth()+a(".navbar-main .navbar-end").outerWidth();if(a(document).outerWidth()<t){a(".navbar-main .navbar-menu").addClass("is-flex-start")}else{a(".navbar-main .navbar-menu").removeClass("is-flex-start")}}t();a(window).resize(t);var i=a("#toc");if(i.length>0){var e=a("<div>");e.attr("id","toc-mask");a("body").append(e);function n(){i.toggleClass("is-active");e.toggleClass("is-active")}i.on("click",n);e.on("click",n);a(".navbar-main .catalogue").on("click",n)}})(jQuery);
//rebuild by neat 