import {forwardRef, useImperativeHandle, useRef} from 'react'
const ResultModal=forwardRef(function ResultModal({ result,remainingTime, onReset, targetTime}, ref){
    
   const userLost= remainingTime<=0 
   const dialog=useRef();

   const score= Math.round((1-remainingTime/(targetTime*1000))*100)
   useImperativeHandle(ref,()=>{
    return{
        open(){
            dialog.current.showModal();
        }
    };
   })
    return(
        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You win with Score: {score}</h2>}
            <p>The Target Time was <strong>{targetTime} seconds.</strong> </p>
            <p>You Stopped the timer with <strong> {(remainingTime/1000).toFixed(2)} seconds left.</strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModal