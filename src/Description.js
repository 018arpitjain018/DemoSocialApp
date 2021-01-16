import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfLines: null,
            truncate: false,
        };
    }

    componentDidMount() {
        const children = this.props.children;
        const numberOfLines = this.props.numberOfLines || 2;
        if (!this.props.children) {
          return null;
        }
        if (children.length > numberOfLines * 50) {
          this.setState({truncate: true, numberOfLines: numberOfLines});
        } else if (children.split(/\r\n|\r|\n/).length > 4) {
          this.setState({truncate: true, numberOfLines: numberOfLines - 2});
        }
    }

    toogleReadableText() {
        const numberOfLines = this.props.numberOfLines || 2
        this.setState({
          numberOfLines: this.state.numberOfLines ? null : numberOfLines,
        });
    }

    render() {
        return (
            <>
                <Text 
                key={Math.random()}
                removeClippedSubviews={false}
                ellipsizeMode="tail"
                numberOfLines={this.state.numberOfLines}
                style={{
                    color: '#fff'
                }}>{this.props.children}</Text>
                {this.state.truncate === true && (
                <Text
                    onPress={() => this.toogleReadableText()}
                    style={{...this.props.style, color: '#fff', fontWeight: 'bold'}}>
                    {this.state.numberOfLines === null ? 'Show less' : 'See more'}
                </Text>
                )}
            </>
        );
    }
}

export default Description;