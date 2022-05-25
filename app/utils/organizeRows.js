import { getSession } from "~/utils/cookies";
import authRequired from "~/utils/authRequired";
import supabase from "~/utils/supabase";
import { data } from "browserslist";

export const initializeQueue = async () => {
  const { data, error } = await supabase.rpc(
    "get_queue_is_finished_equals_false"
  );
  return data
};

export const moveRowUp = async (user) => {
    const {data: userInRowAbove} = await supabase
    .from("queue")
    .select("*")
    .match({position: user.position - 1})
    .single();

    const {data, error} = await supabase
    .from("queue")
    .upsert([
        { ...user, user_id: user.user_id, id: user.id, position: user.position - 1, },
        { ...userInRowAbove, user_id: userInRowAbove.user_id, id: userInRowAbove.id, position: user.position},
    ])

    return data

};

export const moveRowDown = async (user) => {

    const {data: userInRowBelow} = await supabase
    .from("queue")
    .select("*")
    .match({position: user.position + 1})
    .single();


    const {data, error} = await supabase
    .from("queue")
    .upsert([
        { ...user, user_id: user.user_id, id: user.id, position: user.position + 1, },
        { ...userInRowBelow, user_id: userInRowBelow.user_id, id: userInRowBelow.id, position: user.position},
    ])

    console.log(data)
    return data
};
