import React from 'react'

// const Prop = (props) => {
    const Prop = ({title,price = 1}) => {
// console.log(props.title);
  return (
    <div>
        <h2> Product title</h2>
        {/* <h3> {props.title} : {props.price}</h3> */}
        <h3> {title} : {price}</h3> {/*this is by using obj destructuring . in above we provide 1 defalt value when no price is passed as prop*/}
    </div>   
  )
}

export default Prop