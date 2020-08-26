import React, { useState , useEffect} from 'react';
import { useInView } from 'react-intersection-observer'

function Example(props) {
  const [count, setCount] = useState(0);
  var counter  = 0;
  var timer = null;
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '10px', threshold:0.2 })
  useEffect(() => {
  if (inView) {
     timer =   setInterval(() => {claculate()}, 1);
    }
  }, [inView])

  const claculate = () =>{
          counter = counter + props.steps
          setCount(counter)
             if (counter === props.range) {
                clearInterval(timer)
             }
  }

  return (
    <div ref={ref}>
      <p>{count}</p>
    </div>
  );
}
export default Example