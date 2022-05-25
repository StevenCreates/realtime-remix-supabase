import React, { useState } from "react";
import { Row } from "./row";
// import {initializeRows} from "~/utils/organizeRows"
import { moveRowUp, moveRowDown } from "~/utils/organizeRows";

const stateVariable = {
  0: 'current',
  1: 'next',
}

export const Queue = ({ list }) => {
const [queue, setQueue] = useState(list)


React.useEffect(() => {
  const organizedQueue = list.sort(function(a, b) {
    return a.position - b.position;
  });
  setQueue(organizedQueue)
}, [list])




  return (
    <div
      style={{ maxHeight: "32rem" }}
      className="bg-white border -z-10 border-gray-300  overflow-y-scroll rounded-md"
    >
      <ul className="divide-y divide-gray-300">
        {queue.map((item, index) => {
          const state = stateVariable[index] ?? 'queued'

          return (
            <li key={item.id} index={index} className="">
              <Row user={item} products={item.items} state={state} onRowUpClick={() => moveRowUp(item)}  onRowDownClick={moveRowDown} onFinishClick={() => console.log('finished')}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
