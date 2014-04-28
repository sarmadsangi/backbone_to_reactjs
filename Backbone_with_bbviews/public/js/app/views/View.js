// View.js
// -------
define(["jquery", "backbone", "text!templates/heading.html"],

    function($, Backbone, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#catApp",

            // View constructor
            initialize: function() {
                
                this.listenTo(this.collection, "change", this.render);
                this.render();

            },

            // View Event Handlers
            events: {
                "click .AddCat" : "addCat",
            },
            addCat: function (e) {
                e.preventDefault();
                var cat = "cat"+(this.collection.length + 1);
                if(this.collection.length <= 60) {
                    this.collection.push({cat : cat});
                }
                this.render();

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {
                                    cats : this.collection.toJSON(),
                                    length: this.collection.length
                                });

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);