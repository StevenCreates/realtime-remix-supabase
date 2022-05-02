import { getSession } from "~/utils/cookies";
import authRequired from "~/utils/authRequired";
import supabase from "~/utils/supabase";






export const initializeRows = async () => {

    const { data, error } = await supabase.rpc('get_queue_current_date')

   console.log(data)
}