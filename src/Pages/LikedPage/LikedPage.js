import React, { useEffect, useState } from "react";
import "./LikedPage.css";
import Navbar from "../../Components/Navbar/Navbar";
// firebase imports
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
// imports for authentication
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Ribbon from "../../Components/Ribbon/Ribbon";
import PageTitle from "../../Components/PageTitle/PageTitle";

function LikedPage() {
  const { user } = useSelector(selectUser);
  const userName = user.name;
  const userId = user.uid;

  // Get All Posts
  const [allGroups, setAllGroups] = useState([]);
  useEffect(() => {
    async function getAllDocumentsFromDatabase() {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("uid", "==", userId), limit(1))
      );

      const following = querySnapshot.docs[0].data().following;

      const querySnapshot1 = await getDocs(
        query(collection(db, "groups"), orderBy("date"))
      );
      querySnapshot1.docs.reverse().forEach((doc) => {
        var followed = false;
        if (following.includes(doc.id)) {
          followed = true;
        }

        setAllGroups((allPosts) => [
          ...allPosts,
          {
            doc_id: doc.id,
            doc_data: doc.data(),
            followed: followed,
          },
        ]);
      });
    }
    getAllDocumentsFromDatabase();
  }, [userId]);

  const followGroup = async (group_id, group_name) => {
    const d = query(collection(db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(d);

    if (querySnapshot.docs.length === 1) {
      await setDoc(
        doc(db, "users", querySnapshot.docs.at(0).id),
        {
          following: arrayUnion(group_id),
        },
        { merge: true }
      );
      alert(`You are following ${group_name} group !`);
      window.location.reload();
    }
  };

  return (
    <div className="likedpage">
      <Navbar activePage={"liked"} />
      <Ribbon/>
      <PageTitle title={'Groups'} />
      <div className="likedpage__postSection">
        {allGroups.length > 0 ? (
          allGroups.map(({ doc_id, doc_data, followed }) => (
            <div className="grid grid-cols-2 items-center my-2 ">
              <h5 className=" col-span-1 " key={doc_id}>
                {doc_data.name} &nbsp;&nbsp;&nbsp;
              </h5>

              <button
                className="className=' col-span-1 ' w-[143px] h-[52px] bg-[#652666] text-white ml-4 "
                onClick={() => {
                  if (!followed) {
                    followGroup(doc_id, doc_data.name);
                  }
                }}
              >
                {followed ? "followed" : "follow"}
              </button>
            </div>
          ))
        ) : (
          <h3
            style={{ textAlign: "center", color: "#CED0D4", marginTop: "50px" }}
          >
            No Groups Created Yet !
          </h3>
        )}
      </div>
    </div>
  );
}

export default LikedPage;
