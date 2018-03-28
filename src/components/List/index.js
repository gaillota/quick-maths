import React from 'react'
import PropTypes from 'prop-types'

function getItemKey(item, keyPath) {
  if (typeof item === 'string') {
    return item
  }
  
  if (typeof item === 'object') {
    return item[keyPath]
  }
  
  return null
}

export default class extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    items: PropTypes.any,
    itemName: PropTypes.string,
    wrapper: PropTypes.func,
    keyPath: PropTypes.string,
  }
  
  static defaultProps = {
    itemName: 'item',
  }
  
  componentProps = ({ item, index }) => {
    const { itemName, keyPath } = this.props
    
    return {
      [itemName]: item,
      key: getItemKey(item, keyPath),
      index,
    }
  }
  
  render() {
    const {
      component: Component,
      items,
      wrapper,
    } = this.props
    
    if (!items || (Array.isArray(items) && !items.length)) {
      return null
    }
    
    const Wrapper = wrapper || React.Fragment
    
    return (
      <Wrapper>
        {
          items.map((item, index) => (
            <Component
              {...this.componentProps({ item, index })}
            />
          ))
        }
      </Wrapper>
    )
  }
}
