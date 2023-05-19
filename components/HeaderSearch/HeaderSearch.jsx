import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import search from '../../assets/img/headerSearch.png'

const HeaderSearch = () => {
  return (
    <TouchableOpacity
      style={{
        width: '30px',
        height: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px'
      }}
    >
      <Image
        source={search}
        resizeMethod="cover"
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </TouchableOpacity>
  )
}

export default HeaderSearch
