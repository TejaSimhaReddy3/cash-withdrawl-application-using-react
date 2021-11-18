// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {currentCount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({currentCount: prevState.currentCount - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)
    const {denominationsList} = this.props
    const {currentCount} = this.state

    return (
      <div className="bg-container">
        <div className="contentContainer">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initialName}</p>
            </div>
            <p className="fullName">{name}</p>
          </div>
          <div className="balanceContainer">
            <div className="bal-con">
              <p className="yBalance">Your Balance</p>
            </div>
            <p className="amount">
              {currentCount}
              <br />
              <span className="inRs">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="yBalance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttonsList">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
                denominationsDetails={eachDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
