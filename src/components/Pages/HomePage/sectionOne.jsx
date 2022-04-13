import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import  { increment, decrement, incrementByAmount,selectValue }  from '../../../redux/slices/counter'

const SectionOne = () =>{
  const dispatch = useDispatch();
  const value = useSelector(selectValue);
  const  [dynamicValue,setDynamicValue] = useState();


    const handleChange = (event) => {
      setDynamicValue(event.target.value)
    }

    const incrementValue = () => {
      dispatch(increment())
    };

    const decrementValue = () => {
      dispatch(decrement())
    }

    const incrementValueByAmount = () => {
      dispatch(incrementByAmount(parseInt(dynamicValue)))
    }


    return (
    
      <div>
        {value}
        <button onClick={incrementValue}>+</button>
       <button onClick={decrementValue}>-</button>
       <input value={dynamicValue} onChange={handleChange}/>
       <button onClick={incrementValueByAmount}>+ BY AMOUNT</button>
         <section className="section-one">
        <div className="main-banner">
    
                <div className="main-banner-text">
                   <div><h3>PRICE DROP!</h3></div>
                   <div className="main-banner-p">
                      <p>Up to 15% Off All Our Products!</p>
                    </div>  
              </div>
              <button className="main-banner-btn"> Shop Now</button>
    </div>
     
    </section>
  
      </div>
    );
  }
  
  export default SectionOne