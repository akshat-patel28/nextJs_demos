import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Album from "../../components/album/album";

export default function AlbumsList() {
  const [loading, setLoading] = useState(false);
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setAlbumList(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading)
    return (
      <>
        <Link href="/">Go Back</Link>
        <h1>Loading......</h1>
      </>
    );
  return (
    <>
      <Link href="/">Go Back</Link>
      <ul>
        {albumList.map((album) => (
          <Album key={album.id} id={album.id} title={album.title} />
        ))}
      </ul>
    </>
  );
}
