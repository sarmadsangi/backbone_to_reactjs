'use strict';

define(['react', 'jsx!views/Cat'],
function (React, Cat) {
    var CatView = React.createClass({
        getInitialState: function () {
          var updateState = function () {
            this.setState({ cats: _.clone(this.props.cats.models) });
          };
          
          this.props.cats.on('reset', updateState, this);
          this.props.cats.on('add', updateState, this);
          this.props.cats.on('remove', updateState, this);
          
          return { cats: _.clone(this.props.cats.models) };
        },
        AddCat: function() {
            var cat = 'cat'+(this.props.cats.length + 1);
            if(this.props.cats.length <= 60) {
                this.props.cats.push({cat : cat});
            }
        },
        render: function() {
            var cats = _.map(this.state.cats, function (cat) {
                return <Cat cat={cat} />;
            });
            return (
                <div>
                    <header>
                        <section>
                            <a href="#" className="btn btn-primary" onClick={this.AddCat}>Add Cat</a>
                            <h4> Number of cats {this.state.cats.length}</h4>
                        </section>
                    </header>
                    <div className="left animate">
                        {cats}
                    </div>
                </div>
            );
        }

    });

    return CatView;
});