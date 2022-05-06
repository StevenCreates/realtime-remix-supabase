import React from "react";
import { Row } from "./row";
import {initializeRows} from "~/utils/organizeRows"
const stateVariable = {
  0: 'current',
  1: 'next',
}

export const Queue = ({ list }) => {

 const values = initializeRows()
 

  return (
    <div
      style={{ maxHeight: "32rem" }}
      className="bg-white border -z-10 border-gray-300  overflow-y-scroll rounded-md"
    >
      <ul className="divide-y divide-gray-300">
        {list.map((item, index) => {
          const state = stateVariable[index] ?? 'queued'

          return (
            <li key={item.id} index={index} className="">
              <Row user={item.public_user} products={item.items} state={state}  />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
