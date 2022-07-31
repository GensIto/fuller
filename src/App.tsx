import { useState } from "react";
import "./App.css";
import { Circle } from "./components/Circle";
import { TokenNumber } from "./components/TokenNumber";

type Props = {
  tokenPrev: string;
  tokenRear: string;
};

function App() {
  const [token, setToken] = useState([]);
  //円グラフの進捗率
  const [progress, setProgress] = useState(314);

  //
  const OnClickAdd = () => {
    const newToken: any = [
      ...token,
      {
        tokenPrev: Math.floor(Math.random() * 1000),
        tokenRear: Math.floor(Math.random() * 1000),
      },
    ];
    setToken(newToken);
  };
  //
  const onClickDelete = () => {
    const newToken = [...token];
    newToken.pop();
    setToken(newToken);
  };
  //
  const updataToken = () => {
    setToken((tokens: any) =>
      tokens.map((_: any) => ({
        tokenPrev: Math.floor(Math.random() * 1000),
        tokenRear: Math.floor(Math.random() * 1000),
      }))
    );
  };

  if (token.length) {
    if (progress <= 314) {
      setTimeout(() => {
        setProgress(progress - 1);
      }, 19);
    }
    if (progress == 0) {
      setProgress(314);
      updataToken();
    }
  }

  return (
    <div>
      <h1 className='title'>Fake Authenticator</h1>
      <button onClick={onClickDelete}>-</button>
      <button onClick={OnClickAdd}>+</button>
      <div>
        {token.map((task: Props, index) => {
          return (
            <div className='flex' key={index}>
              <div>
                <p className='code-no'>Fake code No.{index + 1}</p>
                <TokenNumber
                  tokenPrevNumber={task.tokenPrev}
                  tokenRearNumber={task.tokenRear}
                />
              </div>
              <Circle progress={progress} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
