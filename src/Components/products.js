import React ,{Component} from 'react';


class Products extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                {this.props.name}
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Products;