// Read Data from the RTDB

import { ref, child, get } from "firebase/database";
import { db } from "../../config/firebase/firebaseInit";

/*
    1. connect to the to do list
        reference ref
        const dbRef = ref(db, "/todos")

    2. asking for the data from that ref path to a node in the JSON file...
        get(ref) ===> returns data snapshot

    3. extracting the data
        snapshot.val()

*/

async function getMovieData() {
  const dbRef = ref(db, "/movies");
  const dataSnapshot = await get(dbRef);
  return await dataSnapshot.val();
}

export { getMovieData };
