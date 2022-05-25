import {
    useLoaderData,
    Form,
    useFetcher,
    useTransition,
  } from "@remix-run/react";
  import supabase from "~/utils/supabase";
  import { useEffect, useState, useRef } from "react";
  import { getSession } from "~/utils/cookies";
  import authRequired from "~/utils/authRequired";
  
  export const loader = async ({ request }) => {

  };
  
  export const action = async ({ request }) => {

  };
  
  export default () => {

  
    return (
      <div>
          Create Stripe Customer
      </div>
    );
  };
  