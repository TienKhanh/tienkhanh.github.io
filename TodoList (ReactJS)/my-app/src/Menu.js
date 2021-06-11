import React from 'react';

class Menu extends React.Component {

    renderMenu(){
        return(
            <>
            {
                this.props.dataList.map((item,index) => {
                    return <li>{item.title}</li>
                })
            }    
            </>
        );
    }

    render(){
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

