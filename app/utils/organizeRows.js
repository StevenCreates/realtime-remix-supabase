import { getSession } from "~/utils/cookies";
import authRequired from "~/utils/authRequired";
import supabase from "~/utils/supabase";






export const initializeRows = async () => {

    const { data, error } = await supabase.rpc('get_queue_is_finished_equals_false')

   console.log(data)
}