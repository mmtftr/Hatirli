// Generated by https://pagedraw.io/pages/9870
import React from 'react';
import './multistate_group_2.css';

function render() {
    return <div className="pd-onhover-parent multistate_group_2">
        { (this.props.state === "wrong") ?
            <div className="multistate_group_2-wrong-3">
                <div className="multistate_group_2-0-0-0">
                    <div className="multistate_group_2-rectangle_2">
                        <div className="multistate_group_2-0-0-0-0-0">
                            <div className="multistate_group_2-do_ru-6">
                                { this.props.text }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : null}
        <div className="pd-onhover multistate_group_2-_hover-7">
            <div className="multistate_group_2-1-0">
                <div className="multistate_group_2-_hover-4">
                    <div className="multistate_group_2-1-0-0-0">
                        <div className="multistate_group_2-do_ru-66">
                            { this.props.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { (this.props.state === "correct") ?
            <div className="multistate_group_2-correct-7">
                <div className="multistate_group_2-2-0-0">
                    <div className="multistate_group_2-rectangle_2-7">
                        <div className="multistate_group_2-2-0-0-0-0">
                            <div className="multistate_group_2-do_ru-5">
                                { this.props.text }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : null}
        { (this.props.state === "default") ?
            <div className="multistate_group_2-default-9">
                <div className="multistate_group_2-3-0-0">
                    <div className="multistate_group_2-rectangle_2-0">
                        <div className="multistate_group_2-3-0-0-0-0">
                            <div className="multistate_group_2-do_ru-9">
                                { this.props.text }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : null}
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}