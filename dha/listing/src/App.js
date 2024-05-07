import './App.css';
import React, { useState } from 'react'
var array = ["Ravi", "Jaydeep", "Nilesh", "Dharmesh", "Mayur", "Vivek"]

function App() {
  const [state, setstate] = useState(0);

  return (
    <div className="App">

      <h1 className='MODULE'>MODULE: 10 List and Hooks</h1>
      <h1 className='MODULE'>List</h1>
      <h3>(1). This is Listing.</h3>
      <div className='list'>
        {
          array.map((v) => (
            <ul>
              <li>My name is {v}</li>
            </ul>
          ))
        }

      </div>

      <h1 className='MODULE'>Hooks</h1>
      <h3>(2). This is All Hooks.</h3>

      <p>(i). const [state, setState] = useState(initialState);</p>
      {/* is ka matlab a hota he ki kisi bhi value ko change kar sakte he */}

      <p>(ii). {'useEffect(()=>{},[])'}</p>
      {/* jab bhi hame server ke sath me work karna ho to jese ki koi bhi api ko fetch karana,
          and or is me koi bhi function nathi lena ho to is ka use ho skta he */}

      <p>(iii). {`useCallback(() => {callback},[input],)`};</p>

      <p>(iv). const context = useContext(contextValue);</p>
      {/* useContext ka use ham koi bhi parent ko data dedo fir o apne sabhi child ko data de sakata he  */}

      <p>(v). {`useMemo(() => function, input);`}</p>
      {/* usememo ka use ham calculation ke liye kar ta he or is me function ke ander function return karna padta he */}

      <p>(vi). const [state, dispatch] = useReducer(reducer, initialState, init);</p>
      {/* useReducer ka matlab a he ki hame multiple state ko change karne ke laye use hota he */}

      <p>(vii). const ref = useRef(initialValue);</p>
      {/* useRef ka use hota heki kisi bhi element ko id na deni ho to ref deke use kar sakte he */}

      <h3>(3). Explain Life cycle in Class Component and functional component with Hooks.</h3>

      <p>The React component lifecycle refers to the series of phases that a React component goes through, from its creation and rendering to updates and eventual removal from the DOM. While the traditional lifecycle methods are associated with class components, the introduction of hooks has provided a more versatile way to manage component behaviour in functional components.</p>
      <div className='MODULE'>
        <h4>-: There are 3 phases in the React Component LifeCycle :-</h4>
        {/* ano apde 3 pakare upayog kari sakay se  je te aa mujab se */}

        <p>(1). Mounting Phase</p>
        <p>(2). Updating Phase  </p>
        <p>(1). Unmounting Phase </p>
      </div>

      <h3>Mounting Phase :</h3>

      <ul>
        <li>
          During the mounting phase, a functional component is being created and added to the DOM. In this phase, you typically initialise state and perform any setup that's needed when the component is first rendered.
        </li>

        <li>
          useState : The useState hook allows you to add state to your functional components. It replaces the need for a constructor and this.state in class components. You can initialise state and retrieve the current value and a function to update it.
          {/* useState ma joiye to ama function state direnct work kare se */}
          {/* ane class Component ma this,state no use kari te work kare se  */}
        </li>
      </ul>
      <div>
        <p>is loading ka matal he useState me data=null hot to avitite lakavathi mare right value {`{data ? data:"Loading..."}`}</p>
        <p>atale out put apane avo male.</p>
        <Inc></Inc>
        {/* is ko ham mounting bolte he */}
      </div>

      <h3>Updating Phase :</h3>

      <ul>
        <li>
          In the updating phase, the functional component is re-rendered due to changes in its props or state. You can use the useEffect hook without an empty dependency array to achieve behaviour similar to componentDidUpdate.
          {/* 1 conponate se dusre conponate date le jana ho to ham props ka use karate he or o ham state ke dvara le jate he or is props ki value mil jati he ham is ka use is tarijese kiya jata he ane ama arry ke bina bhi useeffect use ho sakata he */}

        </li>

        <li>
          useEffect : By using the useEffect hook without a dependency array, you can simulate the behaviour of componentDidUpdate. The provided function will run on every render.

        </li>
      </ul>

      <h3>Unmounting Phase:</h3>

      <ul>
        <li>
          In the unmounting phase, the functional component is being removed from the DOM. The cleanup function in the useEffect hook simulates the behaviour of componentWillUnmount.

        </li>

        <li>
          useEffect : By returning a function from the useEffect hook, you can specify cleanup operations to be performed when the component is unmounted.

        </li>
      </ul>

    </div>
  );
}


export default App;


function Inc() {
  const [data, sedtata] = useState(null);
  return (
    <div>
      {data ? data : "Loading..."}
    </div>
  )
}

