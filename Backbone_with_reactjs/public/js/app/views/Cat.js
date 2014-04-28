define(['react'], function (React) {
    var Cat = React.createClass({
        getInitialState: function () {
            this.props.cat.on('change', function (cat) {
                this.setState({ cat: _.clone(cat.attributes) });
            });
            
            return { cat: _.clone(this.props.cat.attributes) };
        },
        
        render: function () {
            var imgSrc = '/img/cats/'+this.state.cat.cat+'.jpg';
            return <img src={imgSrc} />;
        }
    });

    return Cat;
});
