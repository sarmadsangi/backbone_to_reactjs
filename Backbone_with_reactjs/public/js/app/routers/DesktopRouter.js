// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "react", "models/Cat", "jsx!views/View", "collections/Cats"],

    function($, Backbone, React, Cat, CatView, Cats) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index"

            },

            index: function() {

                var cats = new Cats();
                React.renderComponent(CatView({cats: cats}), document.getElementById('catApp'));

            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);