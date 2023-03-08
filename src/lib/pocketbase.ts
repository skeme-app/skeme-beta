import PocketBase from "pocketbase";
import { writable } from "svelte/store";

// connect to PocketBase
export const pb = new PocketBase("http://127.0.0.1:8090");

// create a store for the currentUser instance
export const currentUser = writable(pb.authStore.model);

// listen for auth state changings
pb.authStore.onChange((auth) => {
  console.log("[INFO] Auth state changed", auth);
  currentUser.set(pb.authStore.model)
})