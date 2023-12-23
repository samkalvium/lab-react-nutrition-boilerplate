import React, { Component } from 'react'
import '../src/App.css'

export default class FoodBox extends Component {
    state={
        val: 0,
        cal: 0
    }

    changeVal = (e)=>{
        this.setState(()=>{
            return{
                val: e.target.value,
                cal: 0
            }
        })
    }

    displayCal = (cal1) =>{
        this.setState(()=>{
            return{
                val: this.state.val,
                cal: this.state.val*cal1
            }
        })
    }
    reset=()=>{
        this.setState(()=>{
            return{
                val: 0,
                cal: 0
            }
        })
    }
    render() {
        let data=this.props.food
        return (
            <>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={data.img} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{data.name}</strong> <br />
                                    <small>{data.cal} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={this.state.val} onChange={this.changeVal} />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={()=>this.displayCal(data.cal)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div  className='right-items'>
                        <h4>{this.state.val} {data.name} = {this.state.cal} Calories </h4>
                        <button className='reset' onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </>
        )
    }
}
