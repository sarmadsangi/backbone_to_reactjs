// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Cat", "views/View", "collections/Cats"],

    function($, Backbone, Cat, View, Cats) {

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
                new View({collection: cats});

            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);