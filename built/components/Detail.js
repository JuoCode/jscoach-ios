import * as React from 'react';
import { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, WebView } from 'react-native';
import * as axios from 'axios';
export default class Detail extends Component {
    constructor() {
        super();
        this.state = { loaded: false };
    }
    componentDidMount() {
        const { name } = this.props.item;
        axios.get(`https://js.coach/react/${name}.json`)
            .then(resp => {
            const detail = resp.data;
            this.setState({ detail, loaded: true });
            console.log('loaded');
        })
            .catch(err => console.error(err));
    }
    // wrapHtml(body: string) {
    //   return [
    //     '<!DOCTYPE html>',
    //     '<html lang="en">',
    //     '<head>',
    //     '  <meta charset="UTF-8">',
    //     '  <title>Document</title>',
    //     '</head>',
    //     body,
    //     '</html>',
    //   ].join('')
    // }
    render() {
        return (React.createElement(View, {style: { flex: 1, paddingTop: 62 }}, this.state.loaded
            ? React.createElement(WebView, {source: { html: this.state.detail.readme }})
            : React.createElement(ActivityIndicator, {animating: true, size: 'large'})));
    }
}
const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});
