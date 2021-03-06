import React from 'react';
import ResourceList from './ResourceList';
import ResourceListPager from './ResourceListPager';
import URIUtil from '../utils/URIUtil';
class Dataset extends React.Component {
    componentDidMount() {
    }
    addCommas(n){
        let rx = /(\d+)(\d{3})/;
        return String(n).replace(/^\d+/, function(w){
            while(rx.test(w)){
                w = w.replace(rx, '$1,$2');
            }
            return w;
        });
    }
    render() {
        let self = this;
        let resourceFocusType = this.props.config.resourceFocusType;
        let typeSt, typesLink = [];
        if(resourceFocusType){
            if(!resourceFocusType.length || (resourceFocusType.length && !resourceFocusType[0]) ){
                typeSt = <span className="ui black label"> Everything </span>;
            }else{
                resourceFocusType.forEach(function(uri) {
                    typesLink.push(<a key={uri} className="ui black label" target="_blank" href={uri}> {URIUtil.getURILabel(uri)} </a>);
                });
                typeSt = typesLink;
            }
        }
        return (
            <div className="ui page grid" ref="dataset">
                <div className="ui column">
                    <div className="ui segment top attached">
                        <h3>{this.props.total ? <span className="ui big black circular label">{this.addCommas(this.props.total)}</span> : ''} Resources of type {typeSt} in {this.props.graphName ? <a href={this.props.graphName}>{this.props.graphName}</a> : ' all local datasets'}</h3>
                        <ResourceList enableAuthentication={this.props.enableAuthentication} resources={this.props.resources} graphName={this.props.graphName} isBig={true} config={this.props.config}/>
                    </div>
                    <div className= "ui secondary segment bottom attached">
                        <ResourceListPager graphName={this.props.graphName} total={this.props.total} threshold={10} currentPage={this.props.page} maxNumberOfResourcesOnPage={this.props.config.maxNumberOfResourcesOnPage}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dataset;
