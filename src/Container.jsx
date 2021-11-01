import {useCallback, useMemo, useState} from "react";
import Counter1 from "./shouldComponentUpdate/Counter1";
import Counter2 from "./shouldComponentUpdate/Counter2";
import PureCounter1 from "./PureComponent/PureCounter1";
import PureCounter2 from "./PureComponent/PureCounter2";
import PureCounter3 from "./PureComponent/PureCounter3";
import Counter4Memo from "./memo/Counter4Memo";

const dirtyObject = {
  firstName: "Kyle",
  personalInformation: {
    socialNumber: 777,
    phone: "+1333999888"
  }
}

function wow() {
  console.log('Hello from the useState');

  return 1;
}

const Container = () => {
  const [test, _] = useState((arg) => {
    console.log('HEY', arg);
    return wow();
  });

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const increase1 = useCallback(() => {
    setCounter1(prevCount => prevCount + 1);
  }, []);

  const increase2 = useCallback(() => {
    setCounter2(prevCount => prevCount + 1);
  }, []);

  const increase3 = useCallback(() => {
    setCounter3(prevCount => prevCount + 1);
  }, []);

  const increase4 = useCallback(() => {
    setCounter4(prevCount => prevCount + 1);
  }, []);

  const dirtyObject = useMemo(() => ({
    firstName: "Kyle",
    personalInformation: {
      socialNumber: 777,
      phone: "+1333999888"
    }
  }), []);

  const MemoziedCounter = useMemo(() => (
    <PureCounter3 dirtyObj={dirtyObject} value={counter3} handleClick={increase3} />
  ), [dirtyObject, counter3, increase3]);

  return (
    <div>
      <div>
        {/*<Counter1 value={counter1} handleClick={increase1} />*/}
        <PureCounter1 dirtyObj={dirtyObject} value={counter1} handleClick={increase1} />
      </div>
      <div>
        {/*<Counter2 value={counter2} handleClick={increase2} />*/}
        <PureCounter2 dirtyObj={dirtyObject} value={counter2} handleClick={increase2} />
      </div>
      <div>
        {MemoziedCounter}
      </div>
      <div>
        <Counter4Memo dirtyObj={dirtyObject} value={counter4} handleClick={increase4} />
      </div>
    </div>
  );
}

export default Container;
