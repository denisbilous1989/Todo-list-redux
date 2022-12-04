import { connect } from 'react-redux';
import { increment, decrement } from '../../store/counter/actions'
import { selectCounterNumber } from '../../store/counter/selector'
const Counter = ({number, increment, decrement}) => {
  return (
  <div>
    <button onClick={() => increment()}>+</button>
    <div>{number}</div>
    <button onClick={() => decrement()}>-</button>
  </div>
)
}

const mapStateToProps = state => ({
  number: selectCounterNumber(state),
});

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);