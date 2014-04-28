// Collection.js
// -------------
define(["jquery","backbone","models/Cat"],

  function($, Backbone, Cat) {

    // Creates a new Backbone Collection class object
    var Cats = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Cat

    });

    // Returns the Model class
    return Cats;

  }

);