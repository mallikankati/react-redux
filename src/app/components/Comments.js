import React from 'react';
import ReactDOM from 'react-dom';

export default class Comments extends React.Component {
  render () {
    return (<div className="vcomments">
                <div className="vcomments-summary">
                     <span className="vcomments-total">531</span>
                     <span className="vcomments-summary-txt">Comments</span>
                </div>
                <ul className="vcomments-box">
                     <li className="vcomment-details">
                        <div className="vcomment-header">
                           <div className="vcomment-avatar"></div>
                           <div className="vcomment-author-name">Juana Vargas</div>
                           <div className = "vcomment-time">1 year ago</div>
                        </div>
                        <div className ="vcomment-text">This is a comments place holder</div>
                     </li>
                     <li className="vcomment-details">
                        <div className="vcomment-header">
                           <div className="vcomment-avatar"></div>
                           <div className="vcomment-author-name">Philip Meyers</div>
                           <div className = "vcomment-time">1 year ago</div>
                        </div>
                        <div className ="vcomment-text">I am football fan and football player</div>
                     </li>
                </ul>
            </div>);
  }
}