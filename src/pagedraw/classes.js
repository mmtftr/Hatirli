// Generated by https://pagedraw.io/pages/9923
import Class from './class';
import React from 'react';
import './classes.css';

function render() {
    return <div className="classes-classes-0">
        <div className="classes-0">
            <div className="classes-0-0" /> 
            <div className="classes-0-1">
                { this.props.list.map((elem, i) => {
                    return <div key={i} className="classes-rectangle_2">
                        <div className="classes-0-1-0-0-0">
                            <div className="classes-multistate_group_instance-2">
                                <Class state={"default"} elem={elem} history={this.props.history} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
            <div className="classes-0-2" /> 
        </div>
        <div className="classes-1" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}