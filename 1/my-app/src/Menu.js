import React, { Component } from 'react';

class Menu extends Component {
    renderMenu(){
        return(
            <>
                <li>Sach giao khoa</li>
                <li>Sach cong nghe</li>
            </>
        );
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }
}

export default Menu;