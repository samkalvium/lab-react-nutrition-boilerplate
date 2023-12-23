import './App.css'
import FoodBox from '../Components/FoodBox'
import FoodData from '../resources/FoodData.js'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    inp: ""
  }

  change_inp = (e) => {
    this.setState(() => {
      return {
        inp: e.target.value
      }
    })
  }

  render() {
    let filterData = FoodData.filter((item) => {
      if (item.name.startsWith(this.state.inp)) {
        return true
      }
    })

    return (
      <>
        <div className='search'>
          <h1>Search</h1>
          <input type="text" placeholder='search' value={this.state.inp} onInput={this.change_inp} />
        </div>
        {filterData.map((item) => {
          return (
            <FoodBox key={item.id} food={item} />
          )
        })}

      </>
    )
  }
}